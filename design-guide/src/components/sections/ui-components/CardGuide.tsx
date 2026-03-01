import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';
import { ComponentPreview } from '../../ui/ComponentPreview';

const cardUsage = `import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui'

<Card className="max-w-sm">
  <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">画像</div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>メインステージ企画</CardTitle>
      <Badge variant="accent">NEW</Badge>
    </div>
    <CardDescription>
      今年のステージは一味違う！豪華景品が当たる！
    </CardDescription>
  </CardHeader>
  <CardContent>
    <a href="#" className="text-primary text-sm font-bold hover:underline">
      詳細を読む →
    </a>
  </CardContent>
</Card>`;

export function CardGuide() {
    return (
        <ComponentPreview title="カード (Cards)" code={cardUsage}>
            <div className="max-w-sm mx-auto md:mx-0 text-left">
                <Card>
                    <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">画像エリア (16:9)</div>
                    <CardHeader>
                        <div className="flex justify-between items-start mb-1 gap-2">
                            <CardTitle className="text-lg">メインステージ企画</CardTitle>
                            <Badge variant="accent">NEW</Badge>
                        </div>
                        <CardDescription className="line-clamp-2">
                            今年のステージは一味違う！豪華景品が当たるビンゴ大会や、音楽サークルによるライブパフォーマンスを実施します。
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                            詳細を読む
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </CardContent>
                </Card>
            </div>
        </ComponentPreview>
    );
}
