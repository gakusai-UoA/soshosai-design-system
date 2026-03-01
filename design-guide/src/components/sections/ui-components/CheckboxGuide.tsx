import { Checkbox } from "@/components/ui";
import { ComponentPreview } from "../../ui/ComponentPreview";

const checkboxUsage = `import { Checkbox } from "@/components/ui"

<div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <label
      htmlFor="terms1"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      利用規約に同意する
    </label>
    <p className="text-sm text-text-muted">
      蒼翔祭の規則と参加条件に同意します。
    </p>
  </div>
</div>`;

export function CheckboxGuide() {
    return (
        <ComponentPreview title="チェックボックス (Checkbox)" code={checkboxUsage}>
            <div className="items-top flex space-x-2 text-left w-full max-w-sm mx-auto">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        利用規約に同意する
                    </label>
                    <p className="text-sm text-text-muted">
                        蒼翔祭の規則と参加条件に同意します。
                    </p>
                </div>
            </div>
        </ComponentPreview>
    );
}
