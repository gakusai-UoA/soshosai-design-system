import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';
import { ComponentPreview } from '../../ui/ComponentPreview';

const toggleUsage = `import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

// Single Toggle
<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>

// Toggle Group
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`;

export function ToggleGuide() {
    return (
        <ComponentPreview title="トグル & トグルグループ (Toggle, Toggle Group)" code={toggleUsage}>
            <div className="flex flex-col gap-6 items-center justify-center">
                <div className="space-y-2 text-center">
                    <p className="text-sm font-medium">単一トグル</p>
                    <Toggle aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </Toggle>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-sm font-medium">トグルグループ (複数選択)</p>
                    <ToggleGroup type="multiple">
                        <ToggleGroupItem value="bold" aria-label="Toggle bold">
                            <Bold className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic" aria-label="Toggle italic">
                            <Italic className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="underline" aria-label="Toggle underline">
                            <Underline className="h-4 w-4" />
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
        </ComponentPreview>
    );
}
