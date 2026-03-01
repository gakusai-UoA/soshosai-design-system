import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "@/components/ui";
import { ComponentPreview } from "../../ui/ComponentPreview";

const collapsibleUsage = `import { useState } from "react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "@/components/ui"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte は3つのリポジトリでスターをもらっています
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <span className="sr-only">Toggle</span>
            {isOpen ? '↑' : '↓'}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`;

export function CollapsibleGuide() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ComponentPreview title="折りたたみ (Collapsible)" code={collapsibleUsage}>
            <div className="w-full max-w-sm mx-auto text-left">
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
                    <div className="flex items-center justify-between space-x-4 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="text-sm font-semibold">
                            3つの通知があります
                        </h4>
                        <CollapsibleTrigger asChild>
                            <Button variant="outline" size="sm" className="w-9 p-0 h-8">
                                <span className="sr-only">Toggle</span>
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                )}
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <div className="rounded-md border border-gray-100 px-4 py-3 text-sm">
                        アカウントのセキュリティ設定が変更されました。
                    </div>
                    <CollapsibleContent className="space-y-2">
                        <div className="rounded-md border border-gray-100 px-4 py-3 text-sm">
                            新しいログインが検出されました: Mac OS X
                        </div>
                        <div className="rounded-md border border-gray-100 px-4 py-3 text-sm">
                            パスワードの有効期限が近づいています。
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </ComponentPreview>
    );
}
