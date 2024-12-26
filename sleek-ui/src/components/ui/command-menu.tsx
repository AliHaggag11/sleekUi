import * as React from "react"
import { Command } from "cmdk"
import { Search, FileText, Blocks, X } from "lucide-react"
import { Button } from "./button"
import * as Dialog from "@radix-ui/react-dialog"

interface CommandMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(true)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [onOpenChange])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        <Dialog.Content className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
          <div className="relative bg-background w-full max-w-[750px] rounded-xl border shadow-lg overflow-hidden">
            <Dialog.Title className="sr-only">
              Search Documentation
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Search through documentation, components, and other resources
            </Dialog.Description>

            <Command>
              <div className="flex items-center border-b px-3">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <Command.Input 
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex h-12 w-full rounded-md bg-transparent py-3 px-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Dialog.Close asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </Dialog.Close>
              </div>

              <Command.List 
                className="max-h-[300px] overflow-y-auto p-2"
              >
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Documentation">
                  <Command.Item 
                    className="px-2 py-2 rounded-lg hover:bg-accent flex items-center gap-2 text-sm cursor-pointer"
                    value="getting-started"
                    onSelect={() => onOpenChange(false)}
                  >
                    <FileText className="h-4 w-4" />
                    Getting Started
                  </Command.Item>
                  <Command.Item 
                    className="px-2 py-2 rounded-lg hover:bg-accent flex items-center gap-2 text-sm cursor-pointer"
                    value="installation"
                    onSelect={() => onOpenChange(false)}
                  >
                    <FileText className="h-4 w-4" />
                    Installation Guide
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Components" className="mt-2">
                  <Command.Item 
                    className="px-2 py-2 rounded-lg hover:bg-accent flex items-center gap-2 text-sm cursor-pointer"
                    value="button"
                    onSelect={() => onOpenChange(false)}
                  >
                    <Blocks className="h-4 w-4" />
                    Button
                  </Command.Item>
                  <Command.Item 
                    className="px-2 py-2 rounded-lg hover:bg-accent flex items-center gap-2 text-sm cursor-pointer"
                    value="dialog"
                    onSelect={() => onOpenChange(false)}
                  >
                    <Blocks className="h-4 w-4" />
                    Dialog
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function useModifierKey() {
  const [modifierKey, setModifierKey] = React.useState<'⌘' | 'Ctrl'>('⌘')

  React.useEffect(() => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    setModifierKey(isMac ? '⌘' : 'Ctrl')
  }, [])

  return modifierKey
} 