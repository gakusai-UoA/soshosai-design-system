export function PrintGuidelines() {
    return (
        <section id="print" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>7. 印刷・DTPルール (Print &amp; DTP)</budoux-ja></h3>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
                <p className="text-sm text-text-muted"><budoux-ja>パンフレットやポスターなど、紙媒体をIllustrator等で作成する際の絶対遵守ルールです。印刷事故を防ぐために徹底してください。</budoux-ja></p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                            <budoux-ja>カラーモードはCMYK</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>RGBモードで作成したデータを印刷すると、色が暗く沈んでしまいます。ファイル作成時は必ず「CMYKカラー」に設定してください。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                            <budoux-ja>塗り足し（3mm）とトンボ</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>紙の端まで色や写真を入れる場合は、仕上がりサイズより外側に3mmはみ出させて配置（塗り足し）し、トンボを作成してください。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                            <budoux-ja>文字のアウトライン化</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>印刷会社に入稿する前、または他人にデータを渡す際は、フォントの置き換わりを防ぐため、すべての文字をアウトライン化してください。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">4</span>
                            <budoux-ja>画像解像度は350dpi</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>印刷用画像は、配置サイズ原寸で300〜350dpiの解像度が必要です。Web用の軽い画像（72dpiなど）を印刷すると粗くぼやけてしまいます。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">5</span>
                            <budoux-ja>リッチブラックとK100</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>細い線や文字は「K-100%」を使用し版ズレを防ぎます。広い黒ベタは「リッチブラック（例: C40/M40/Y40/K100等）」で深みを出しますが、総インキ量には注意してください。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">6</span>
                            <budoux-ja>安全マージン（セーフエリア）</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>断裁時のズレを見越して、ロゴや切れては困るテキストなどの重要要素は、仕上がり線の内側3〜5mm以内（セーフエリア）に収めるように配置してください。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">7</span>
                            <budoux-ja>最小線幅設定</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>かすれや消失を防ぐため、線幅は必ず0.25pt（または0.1mm）以上に設定してください。モニターでのみ見える「ヘアライン（線幅0）」指定は厳禁です。</budoux-ja></p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded bg-gray-50">
                        <h4 className="font-bold text-primary mb-2 flex items-center">
                            <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">8</span>
                            <budoux-ja>QRコードの取り扱い</budoux-ja>
                        </h4>
                        <p className="text-xs text-text-muted"><budoux-ja>確実な読み取りのため、15mm角以上のサイズを確保し、背景色とのコントラスト（白地に黒など）を明確にしてください。十分な余白も重要です。</budoux-ja></p>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <h4 className="font-bold text-yellow-800 text-sm"><budoux-ja>協賛企業ロゴの取り扱いについて</budoux-ja></h4>
                    <p className="text-xs text-yellow-700 mt-1">
                        <budoux-ja>
                            企業様から提供されたロゴは、縦横比（アスペクト比）の変更は厳禁です。1色刷りのパンフレットに掲載する場合は、必ずグレースケール変換を行ってください。また、複数企業のロゴを並べる際は、単純な横幅合わせではなく、縦横の相対的な面積が等しくなるように（例：横長ロゴ幅30mmに対して、正方形ロゴ幅18mmなど数値を計算して）配置調整を行ってください。
                        </budoux-ja>
                    </p>
                </div>
            </div>
        </section>
    );
}
