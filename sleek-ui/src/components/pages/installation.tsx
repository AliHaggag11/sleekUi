import { DocContent } from "../ui/doc-content"

export function Installation() {
  return (
    <DocContent>
      {/* Header */}
      <div className="mb-12">
        <h1>Installation</h1>
        <p className="text-xl !mt-4">
          Get started with SleekUI by installing the required dependencies and setting up essential utilities.
        </p>
      </div>

      {/* Main Content */}
      <section>
        <h2 id="dependencies">Dependencies</h2>
        <p>
          To begin creating magical interfaces, you'll need to set up a few essential tools:
        </p>

        <h3 id="core-packages">Core Packages</h3>
        <p>
          Start by installing our core dependencies:
        </p>
        <pre><code className="language-bash">npm install framer-motion clsx tailwind-merge</code></pre>

        <h3 id="utilities">Essential Utilities</h3>
        <p>
          Add this utility function to your project for seamless class name management:
        </p>
        <pre><code className="language-tsx">{`// utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</code></pre>

        <h3 id="hooks">Helpful Hooks</h3>
        <p>
          Include this media query hook for responsive designs:
        </p>
        <pre><code className="language-tsx">{`// hooks/use-media-query.ts
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
}`}</code></pre>
      </section>
    </DocContent>
  )
} 