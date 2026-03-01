import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

const practices = [
    {
        category: 'レイアウトと余白 (Layout & Whitespace)',
        do: [
            {
                title: 'グリッドシステムの活用',
                description: '要素を1列、2列などの見えない線（グリッド）に沿って配置し、秩序あるレイアウトを作ること。',
            },
            {
                title: '十分なホワイトスペース',
                description: '情報の塊（チャンク）ごとに十分な余白を取り、グループ分けを明確にすること。',
            },
        ],
        dont: [
            {
                title: '端ギリギリへの配置',
                description: '紙のフチのすぐ近くに文字を配置しないこと。最低でも仕上がり線から3〜5mmの安全余白を設ける。',
            },
            {
                title: '情報過多と無秩序',
                description: '隙間をすべて文字や図で埋めようとしないこと。視線が泳ぎ、どこを見ていいかわからなくなります。',
            },
        ],
    },
    {
        category: 'カラーの運用 (Color Usage)',
        do: [
            {
                title: 'ブランドカラーの基調化',
                description: '「蒼翔祭グリーン（C100 M0 Y50 K20）」をアイデンティティとして効果的に使用すること。',
            },
            {
                title: '高いコントラスト',
                description: '文字色と背景色の視認性を確保すること。十分な明度差・彩度差をつけてください。',
            },
        ],
        dont: [
            {
                title: 'RGB専用色の使用',
                description: 'モニター上の強烈なネオンカラー（蛍光色）をCMYKデータで指定しないこと。色がくすんで仕上がります。',
            },
            {
                title: '白抜き文字での細字使用',
                description: 'リッチブラック等の背景に白抜き文字を配置する場合、細いフォントを使わないこと。潰れてしまいます。',
            },
        ],
    },
    {
        category: 'ロゴ・グラフィック (Logos & Graphics)',
        do: [
            {
                title: 'アイソレーションの確保',
                description: 'ロゴの周囲には、必ず規定のアイソレーション（保護余白）を設け、他の要素が干渉しないようにすること。',
            },
            {
                title: '高解像度画像の利用',
                description: '印刷用の写真は、原寸サイズで 300dpi〜350dpi の解像度を持つデータを使用すること。',
            },
        ],
        dont: [
            {
                title: 'アスペクト比の変更',
                description: 'ロゴや画像を縦や横に不自然に引き延ばして変形させないこと（必ず縦横比を固定して拡縮する）。',
            },
            {
                title: '複雑な背景上のテキスト',
                description: '写真や柄の上に、ドロップシャドウ付きの文字を強引に載せないこと。座布団（黒帯等）を敷いてください。',
            },
        ],
    },
];

export function PrintBestPractices() {
    return (
        <section id="print-best-practices" className="scroll-mt-16 space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>4. 印刷向けベストプラクティス (Do's &amp; Don'ts)</budoux-ja></h3>
            <p className="text-sm text-text-muted mb-8"><budoux-ja>蒼翔祭のブランド価値を高めるため、印刷物のデザイン制作において推奨される表現と避けるべき表現をまとめました。</budoux-ja></p>

            <div className="space-y-12">
                {practices.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-800">{section.category}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Do's Column */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <h4 className="text-lg font-medium text-emerald-800">Do (推奨)</h4>
                                </div>
                                {section.do.map((item, i) => (
                                    <Card key={i} className="border-emerald-100 bg-emerald-50/30 overflow-hidden">
                                        <div className="h-1 w-full bg-emerald-500" />
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base text-emerald-900 flex items-start gap-2">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-emerald-800/80 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Don'ts Column */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <XCircle className="w-5 h-5 text-rose-600" />
                                    <h4 className="text-lg font-medium text-rose-800">Don't (避けるべきこと)</h4>
                                </div>
                                {section.dont.map((item, i) => (
                                    <Card key={i} className="border-rose-100 bg-rose-50/30 overflow-hidden">
                                        <div className="h-1 w-full bg-rose-500" />
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base text-rose-900 flex items-start gap-2">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-rose-800/80 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
