import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from '@/components/ui/hover-card';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ComponentPreview } from '../../ui/ComponentPreview';

const tooltipHoverUsage = `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

// Hover Card
<HoverCard>
  <HoverCardTrigger asChild><Button variant="link">@nextjs</Button></HoverCardTrigger>
  <HoverCardContent>
    The React Framework - created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>

// Tooltip (Requires TooltipProvider at app root)
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

export function TooltipHoverGuide() {
    return (
        <ComponentPreview title="ホバー情報 (Hover Card, Tooltip)" code={tooltipHoverUsage}>
            <div className="flex gap-8 items-center justify-center">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link">@soshosai</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                SO
                            </div>
                            <div className="space-y-1 text-left">
                                <h4 className="text-sm font-semibold">@soshosai</h4>
                                <p className="text-sm text-text-muted">
                                    雙峰祭の公式アカウントです。最新情報をお届けします。
                                </p>
                                <div className="flex items-center pt-2">
                                    <span className="text-xs text-text-light">
                                        Joined November 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">ホバーしてね</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>このボタンをクリックすると詳細が表示されます。</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </ComponentPreview>
    );
}
