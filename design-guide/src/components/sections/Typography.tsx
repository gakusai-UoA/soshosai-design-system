export function Typography() {
    return (
        <section id="typography" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>4. タイポグラフィ</budoux-ja></h3>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
                <h4 className="font-bold text-lg mb-4 text-gray-800"><budoux-ja>日本語の改行制御 (BudouX)</budoux-ja></h4>
                <p className="text-sm text-text-muted mb-4">
                    <budoux-ja>当デザインシステムでは、自然な日本語の改行を実現するために Google の BudouX をウェブコンポーネントとして導入しています。</budoux-ja>
                </p>
                <div className="bg-primary-light border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 font-bold mb-2">
                        <budoux-ja>必須ルール</budoux-ja>
                    </p>
                    <p className="text-sm text-gray-700">
                        <budoux-ja>
                            Web上のテキスト（特に見出しや数十文字程度の文章）を記述する際は、必ず <code>&lt;budoux-ja&gt;</code> タグでテキストを囲んでください。これにより、文節での適切な改行が行われます。
                        </budoux-ja>
                    </p>
                </div>
            </div>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-4 text-gray-800"><budoux-ja>フォント指定とウェイト</budoux-ja></h4>
                <p className="text-sm text-text-muted mb-6"><budoux-ja>和文は「Noto Sans JP」、欧文・数字の強調には「Montserrat」を使用します。太さ（ウェイト）で情報の優先度を表現します。</budoux-ja></p>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200 text-sm text-gray-500">
                                <th className="py-3 pr-4 font-normal"><budoux-ja>役割</budoux-ja></th>
                                <th className="py-3 px-4 font-normal"><budoux-ja>サイズ / 行間</budoux-ja></th>
                                <th className="py-3 px-4 font-normal"><budoux-ja>ウェイト</budoux-ja></th>
                                <th className="py-3 pl-4 font-normal"><budoux-ja>プレビュー</budoux-ja></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>大見出し (H1)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">32px / 1.4</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Black (900)</td>
                                <td className="py-4 pl-4"><span className="text-3xl font-black text-primary"><budoux-ja>蒼翔祭2026</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>中見出し (H2)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">24px / 1.5</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Bold (700)</td>
                                <td className="py-4 pl-4"><span className="text-2xl font-bold text-text-main"><budoux-ja>企画一覧</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>小見出し (H3)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">18px / 1.5</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Bold (700)</td>
                                <td className="py-4 pl-4"><span className="text-lg font-bold text-text-main"><budoux-ja>メインステージ</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>本文 (Body)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">16px / 1.7</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Regular (400)</td>
                                <td className="py-4 pl-4"><span className="text-base text-text-main"><budoux-ja>テキストカラーは濃いグレー（#333333）を使用し、長文でも目が疲れないように配慮します。</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>注釈 (Caption)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">12px / 1.5</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Regular (400)</td>
                                <td className="py-4 pl-4"><span className="text-xs text-text-muted"><budoux-ja>※ 駐車場には限りがございます。公共交通機関をご利用ください。</budoux-ja></span></td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 text-sm font-bold text-gray-700"><budoux-ja>英数字強調 (En)</budoux-ja></td>
                                <td className="py-4 px-4 text-sm font-mono text-gray-500">-</td>
                                <td className="py-4 px-4 text-sm text-gray-500">Bold (700)</td>
                                <td className="py-4 pl-4"><span className="font-en font-bold text-xl text-primary">Soshosai 2026</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
