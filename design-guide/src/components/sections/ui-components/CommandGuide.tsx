import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui";
import { ComponentPreview } from "../../ui/ComponentPreview";

const commandUsage = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui"

<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="何か検索してください..." />
  <CommandList>
    <CommandEmpty>結果が見つかりませんでした。</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>カレンダー</CommandItem>
      <CommandItem>検索絵文字</CommandItem>
      <CommandItem>計算機</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
      <CommandItem>Billing <CommandShortcut>⌘B</CommandShortcut></CommandItem>
      <CommandItem>Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;

export function CommandGuide() {
    return (
        <ComponentPreview title="コマンド・検索 (Command)" code={commandUsage}>
            <div className="w-full max-w-md mx-auto text-left">
                <Command className="rounded-lg border border-gray-200 shadow-sm bg-base-surface h-auto">
                    <CommandInput placeholder="何か検索してください..." />
                    <CommandList>
                        <CommandEmpty>結果が見つかりませんでした。</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>カレンダー</CommandItem>
                            <CommandItem>検索絵文字</CommandItem>
                            <CommandItem>計算機</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
                            <CommandItem>Billing <CommandShortcut>⌘B</CommandShortcut></CommandItem>
                            <CommandItem>Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </ComponentPreview>
    );
}
