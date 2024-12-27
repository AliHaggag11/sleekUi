import { DocContent } from "../ui/doc-content"

export function Introduction() {
  return (
    <DocContent>
      {/* Header */}
      <div className="mb-12">
        <h1>Introduction</h1>
        <p className="text-xl !mt-4">
          Create magical landing pages with components that you can copy and paste into your apps.
        </p>
      </div>

      {/* Main Content */}
      <section>
        <h2 id="overview">Overview</h2>
        <p>
          SleekUI is a collection of re-usable components that you can copy and paste into your web apps.
        </p>
        <p>
          It primarily features components, blocks, and templates geared towards creating landing pages and user-facing marketing materials.
        </p>
      </section>

      <section>
        <h2 id="philosophy">Philosophy</h2>
        <p>
          <strong>I personally believe that good design contributes significant value to software. It's one of the main methods of establishing trust between you and an internet stranger.</strong> Trust is important for internet businesses because it is the first thing a visitor evaluates before pulling out their credit card and becoming a customer.
        </p>

        <h3 id="trust-factors">Trust Factors</h3>
        <p>
          Some questions visitors might ask themselves are:
        </p>

        <ul>
          <li>"Is this company legit?"</li>
          <li>"Who else is using it?"</li>
          <li>"Can I trust them with my personal data?"</li>
        </ul>

        <h3 id="design-impact">Impact of Design</h3>
        <p>
          <strong>Poor design reflects poorly on your team.</strong> It comes off as lazy, unfinished, and unstable. It shows that the team doesn't care about user experience.
        </p>

        <p>
          <strong>Good design indicates that the team behind has their shit together.</strong> I can probably expect good things from other areas of the product too: performance, security, reliability, etc.
        </p>
      </section>
    </DocContent>
  )
} 