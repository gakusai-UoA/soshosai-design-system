import { Button } from '@/components/ui';
import { ComponentPreview } from '../../ui/ComponentPreview';

const buttonUsage = `import { Button } from '@/components/ui'

// Primary
<Button>詳しく見る</Button>

// Outline
<Button variant="outline">キャンセル</Button>

// Accent
<Button variant="accent">保存する</Button>

// Disabled
<Button disabled>送信不可</Button>`;

export function ButtonGuide() {
    return (
        <ComponentPreview title="ボタン (Buttons)" code={buttonUsage}>
            <div className="flex flex-wrap gap-6 items-center">
                <div className="space-y-2 text-center">
                    <p className="text-xs text-text-muted">Primary (基本)</p>
                    <Button>詳しく見る</Button>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-xs text-text-muted">Outline (枠線)</p>
                    <Button variant="outline">キャンセル</Button>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-xs text-text-muted">Accent (アクセント)</p>
                    <Button variant="accent">保存する</Button>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-xs text-text-muted">Disabled (非活性)</p>
                    <Button disabled>送信不可</Button>
                </div>
            </div>
        </ComponentPreview>
    );
}
