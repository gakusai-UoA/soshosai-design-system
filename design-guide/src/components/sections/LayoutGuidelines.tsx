import { Button } from '@/components/ui/button';

export function LayoutGuidelines() {
    return (
        <section id="layout" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>6. 余白・レイアウト</budoux-ja></h3>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <p className="text-sm text-text-muted mb-6"><budoux-ja>要素同士の余白（マージンやパディング）は、基本となる「8の倍数（8px, 16px, 24px, 32px...）」を基準として設定します。明確な基準を用いることで、デザイン全体に一貫性とリズムが生まれます。</budoux-ja></p>

                <div className="mb-8">
                    <h4 className="font-bold mb-4 text-gray-800"><budoux-ja>余白の基本スケール（8pxシステム）</budoux-ja></h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-3 font-bold text-gray-700 whitespace-nowrap">サイズ名</th>
                                    <th className="p-3 font-bold text-gray-700 whitespace-nowrap">値 (px / rem)</th>
                                    <th className="p-3 font-bold text-gray-700">主な用途</th>
                                    <th className="p-3 font-bold text-gray-700 whitespace-nowrap">Tailwindクラス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="p-3 font-medium">Extra Small</td>
                                    <td className="p-3 text-gray-600">4px / 0.25rem</td>
                                    <td className="p-3 text-gray-600"><budoux-ja>アイコンとテキストの間など、極めて密接な要素同士</budoux-ja></td>
                                    <td className="p-3 font-mono text-xs text-gray-500 whitespace-nowrap">p-1 / gap-1</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-3 font-medium">Small</td>
                                    <td className="p-3 text-gray-600">8px / 0.5rem</td>
                                    <td className="p-3 text-gray-600"><budoux-ja>リスト項目や、関連する小さなUI要素（ボタン・バッジ）の隙間</budoux-ja></td>
                                    <td className="p-3 font-mono text-xs text-gray-500 whitespace-nowrap">p-2 / gap-2</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-3 font-medium">Medium</td>
                                    <td className="p-3 text-gray-600">16px / 1rem</td>
                                    <td className="p-3 text-gray-600"><budoux-ja>コンポーネント内側の標準的なパディング、段落の間、一般的な余白</budoux-ja></td>
                                    <td className="p-3 font-mono text-xs text-gray-500 whitespace-nowrap">p-4 / gap-4</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-3 font-medium">Large</td>
                                    <td className="p-3 text-gray-600">24px / 1.5rem</td>
                                    <td className="p-3 text-gray-600"><budoux-ja>見出しと本文の間、同類のカードやグループ間の余白</budoux-ja></td>
                                    <td className="p-3 font-mono text-xs text-gray-500 whitespace-nowrap">p-6 / gap-6</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-3 font-medium">Extra Large</td>
                                    <td className="p-3 text-gray-600">32px / 2rem</td>
                                    <td className="p-3 text-gray-600"><budoux-ja>異なる意味を持つセクション間の境界、コンテナ外側の余白</budoux-ja></td>
                                    <td className="p-3 font-mono text-xs text-gray-500 whitespace-nowrap">p-8 / gap-8</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-3 font-medium">2x Large</td>
                                    <td className="p-3 text-gray-600">48px / 3rem</td>
                                    <td className="p-3 text-gray-600"><budoux-ja>ページの大きなコンテンツブロック間（セクション）の区切り</budoux-ja></td>
                                    <td className="p-3 font-mono text-xs text-gray-500 whitespace-nowrap">p-12 / gap-12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h4 className="font-bold mb-3 text-gray-700"><budoux-ja>OK: 正しい余白設定（標準スケール）</budoux-ja></h4>
                        <div className="border border-status-success bg-green-50 p-6 rounded-xl">
                            <h5 className="font-bold text-lg mb-4 text-gray-900"><budoux-ja>開催のご案内</budoux-ja></h5>
                            <p className="text-sm text-gray-700 mb-6 leading-relaxed"><budoux-ja>見出し下部に16px（mb-4）、段落下部に24px（mb-6）、さらに全体の囲みに24px（p-6）の余白が設定されています。十分なスペースにより、視覚的な負担がなく情報が伝わりやすくなります。</budoux-ja></p>
                            <Button variant="default">詳細を見る</Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3 text-gray-700"><budoux-ja>NG: 詰め込みすぎたレイアウト</budoux-ja></h4>
                        <div className="border border-status-error bg-red-50 p-2 rounded-xl">
                            <h5 className="font-bold text-lg mb-1 text-gray-900"><budoux-ja>開催のご案内</budoux-ja></h5>
                            <p className="text-sm text-gray-700 mb-1 leading-tight"><budoux-ja>余白が4px〜8px程度しかありません。外見が窮屈になり、それぞれの情報のまとまりが判別しづらくなります。コンポーネント同士が密着していると、ユーザーの読む気を削いでしまいます。</budoux-ja></p>
                            <Button variant="default" size="sm">詳細を見る</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
