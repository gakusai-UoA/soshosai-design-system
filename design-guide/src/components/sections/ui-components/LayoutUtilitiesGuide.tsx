import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle
} from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ComponentPreview } from '../../ui/ComponentPreview';

const layoutUsage = `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// Resizable Panels
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>Content</ResizablePanel>
</ResizablePanelGroup>

// Scroll Area
<ScrollArea className="h-[200px] w-full rounded-md border p-4">
  <p>Lots of content...</p>
</ScrollArea>

// Separator
<div>
  <h2>Title</h2>
  <Separator className="my-4" />
  <p>Content</p>
</div>`;

export function LayoutUtilitiesGuide() {
    return (
        <ComponentPreview title="レイアウト & ユーティリティ (Resizable, Scroll Area, Separator)" code={layoutUsage}>
            <div className="flex flex-col gap-12 w-full">
                <div className="w-full space-y-4">
                    <h4 className="text-sm font-medium">Resizable Panels</h4>
                    <ResizablePanelGroup
                        // @ts-expect-error Types in react-resizable-panels 4.6.5 omit direction here
                        direction="horizontal"
                        className="min-h-[200px] max-w-md mx-auto rounded-lg border border-border"
                    >
                        <ResizablePanel defaultSize={25}>
                            <div className="flex h-full items-center justify-center p-6 bg-base-bg">
                                <span className="font-semibold text-text-muted">メニュー</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">メインコンテンツ</span>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>

                <Separator />

                <div className="w-full space-y-4">
                    <h4 className="text-sm font-medium">Scroll Area</h4>
                    <ScrollArea className="h-48 w-full max-w-md mx-auto rounded-md border border-border p-4 bg-base-surface">
                        <div className="p-4">
                            <h4 className="mb-4 text-sm font-medium leading-none">バージョン履歴</h4>
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div key={i}>
                                    <div className="text-sm">v1.2.{i}-beta</div>
                                    <Separator className="my-2" />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </ComponentPreview>
    );
}
