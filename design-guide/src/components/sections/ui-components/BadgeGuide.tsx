import { Badge } from '@/components/ui';
import { ComponentPreview } from '../../ui/ComponentPreview';

const badgeUsage = `import { Badge } from '@/components/ui'

<Badge>企画</Badge>
<Badge variant="secondary">屋台</Badge>
<Badge variant="info">終了しました</Badge>
<Badge variant="accent">NEW</Badge>
<Badge variant="caution">注意</Badge>
<Badge variant="destructive">重要</Badge>`;

export function BadgeGuide() {
    return (
        <ComponentPreview title="バッジ・タグ (Badges)" code={badgeUsage}>
            <div className="flex flex-wrap gap-4 items-center">
                <Badge>企画</Badge>
                <Badge variant="secondary">屋台</Badge>
                <Badge variant="info">終了しました</Badge>
                <Badge variant="accent">NEW</Badge>
                <Badge variant="caution">注意</Badge>
                <Badge variant="destructive">重要なお知らせ</Badge>
            </div>
        </ComponentPreview>
    );
}
