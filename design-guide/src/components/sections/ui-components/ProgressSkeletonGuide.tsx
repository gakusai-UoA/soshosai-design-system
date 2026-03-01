import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { ComponentPreview } from '../../ui/ComponentPreview';

const progressSkeletonUsage = `import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"

// Progress
<Progress value={33} />

// Skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`;

export function ProgressSkeletonGuide() {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ComponentPreview title="ローディング状態 (Progress, Skeleton)" code={progressSkeletonUsage}>
            <div className="flex flex-col gap-12 w-full max-w-md mx-auto items-center justify-center">
                <div className="w-full space-y-2">
                    <p className="text-sm font-medium">プログレスバー</p>
                    <Progress value={progress} className="w-full" />
                </div>

                <div className="w-full space-y-4">
                    <p className="text-sm font-medium">スケルトン (コンテンツ読み込み中)</p>
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    );
}
