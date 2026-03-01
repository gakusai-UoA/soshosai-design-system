export function PrintTypography() {
    return (
        <section id="print-typography" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>4. 印刷用タイポグラフィ</budoux-ja></h3>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
                <h4 className="font-bold text-lg mb-4 text-gray-800"><budoux-ja>組版と可読性</budoux-ja></h4>
                <p className="text-sm text-text-muted mb-4">
                    <budoux-ja>印刷物では、Web媒体よりも厳密な文字サイズの管理が求められます。DTP環境（IllustratorやInDesignなど）では文字サイズをポイント（pt）で指定し、カーニングや行送りを見やすく調整してください。</budoux-ja>
                </p>
                <div className="bg-primary-light border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 font-bold mb-2">
                        <budoux-ja>必須ルール</budoux-ja>
                    </p>
                    <p className="text-sm text-gray-700">
                        <budoux-ja>
                            パンフレットの本文など、長文を読ませる箇所では最小文字サイズを <strong>7pt</strong> 以上としてください。これより小さい文字は印刷工程で潰れてしまい、可読性を著しく損ないます。
                        </budoux-ja>
                    </p>
                </div>
            </div>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
                <h4 className="font-bold text-lg mb-4 text-gray-800"><budoux-ja>フォント指定とウェイト (Print)</budoux-ja></h4>
                <p className="text-sm text-text-muted mb-6"><budoux-ja>和文は「Noto Sans JP」、欧文・数字の強調には「Montserrat」を使用します。Web媒体と同様ですが、サイズ設定の基準が異なります。</budoux-ja></p>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200 text-sm text-gray-500">
                                <th className="py-3 pr-4 font-normal"><budoux-ja>役割</budoux-ja></th>
                                <th className="py-3 px-4 font-normal"><budoux-ja>サイズ / 行送り</budoux-ja></th>
                                <th className="py-3 px-4 font-normal"><budoux-ja>ウェイト</budoux-ja></th>
                                <th className="py-3 pl-4 font-normal"><budoux-ja>プレビュー</budoux-ja></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>大見出し (Title)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">20pt ~ / 140%</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Black (900)</td>
                                <td className="py-4 pl-4"><span className="text-2xl font-black text-primary"><budoux-ja>蒼翔祭2026</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>中見出し (Subtitle)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">14pt ~ / 150%</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Bold (700)</td>
                                <td className="py-4 pl-4"><span className="text-xl font-bold text-text-main"><budoux-ja>来場者案内</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>本文 (Body)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">9pt ~ 11pt / 160%</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Regular (400)</td>
                                <td className="py-4 pl-4"><span className="text-sm text-text-main"><budoux-ja>K-100（黒）もしくは濃いグレーで可読性を担保します。</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>注釈 (Caption)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">7pt ~ 8pt / 150%</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Regular (400)</td>
                                <td className="py-4 pl-4"><span className="text-xs text-text-muted"><budoux-ja>※ 7pt未満の文字は推奨しません。</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>英数字強調 (En)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">-</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Bold (700)</td>
                                <td className="py-4 pl-4"><span className="font-en font-bold text-lg text-primary">Soshosai 2026</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-4 text-gray-800"><budoux-ja>より高度なタイポグラフィルール設定</budoux-ja></h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2">
                            <budoux-ja>白抜き文字（Reversed Text）</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted">
                            <budoux-ja>濃い背景に白い文字を配置する場合、印刷時にインクのにじみ（太り）で文字が細って見えたり、潰れたりしやすくなります。白抜き文字にする際は、通常時よりも1段階太めのウェイト（Regularの代わりにMediumなど）を選ぶか、文字サイズを少し大きめに設定してください。</budoux-ja>
                        </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2">
                            <budoux-ja>文字組みと禁則処理</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted">
                            <budoux-ja>句読点（、。）や括弧類が行頭や行末に不自然に配置されないよう、Illustrator等での「禁則処理」を有効にしてください。またベタ組みだけでなく、タイトル周りなどは美しく見えるよう「手動でのカーニング（文字ツメ）」を行うことを推奨します。</budoux-ja>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
