import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';
import { ComponentPreview } from '../../ui/ComponentPreview';

const tabsUsage = `import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/ui'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">タブ項目 1</TabsTrigger>
    <TabsTrigger value="tab2">タブ項目 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">コンテンツ 1</TabsContent>
  <TabsContent value="tab2">コンテンツ 2</TabsContent>
</Tabs>`;

export function TabsGuide() {
    return (
        <ComponentPreview title="タブ (Tabs)" code={tabsUsage}>
            <div className="w-full max-w-md mx-auto md:mx-0 text-left">
                <Tabs defaultValue="tab1">
                    <TabsList>
                        <TabsTrigger value="tab1">タブ項目 1</TabsTrigger>
                        <TabsTrigger value="tab2">タブ項目 2</TabsTrigger>
                        <TabsTrigger value="tab3">タブ項目 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="p-4 bg-white rounded-md mt-2 border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">タブ 1 のコンテンツ</h4>
                        <p className="text-sm text-gray-600">ここにはタブ 1 の詳細な内容が入ります。切り替えのアニメーションもスムーズです。</p>
                    </TabsContent>
                    <TabsContent value="tab2" className="p-4 bg-white rounded-md mt-2 border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">タブ 2 のコンテンツ</h4>
                        <p className="text-sm text-gray-600">タブ 2 専用の内容です。</p>
                    </TabsContent>
                    <TabsContent value="tab3" className="p-4 bg-white rounded-md mt-2 border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">タブ 3 のコンテンツ</h4>
                        <p className="text-sm text-gray-600">タブの設定により、必要な情報を整理して魅せることができます。</p>
                    </TabsContent>
                </Tabs>
            </div>
        </ComponentPreview>
    );
}
