export function ColorPalette() {
    return (
        <section id="colors" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>3. カラーパレット</budoux-ja></h3>

            <div className="space-y-6">
                <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-4"><budoux-ja>ブランドカラー</budoux-ja></h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <div className="w-24 md:w-32 bg-primary"></div>
                            <div className="p-4 flex-1">
                                <p className="font-bold text-lg leading-tight"><budoux-ja>会津グリーン</budoux-ja></p>
                                <p className="text-xs text-text-muted mb-2">Primary</p>
                                <div className="space-y-1 text-sm font-mono text-gray-600">
                                    <p><span className="w-10 inline-block text-gray-400">HEX</span> #008578</p>
                                    <p><span className="w-10 inline-block text-gray-400">RGB</span> 0, 133, 120</p>
                                    <p><span className="w-10 inline-block text-gray-400">CMYK</span> 100, 0, 50, 10</p>
                                </div>
                                <p className="text-xs text-text-muted mt-3"><budoux-ja>用途：見出し、メインボタン、ロゴ、重要エリアの背景</budoux-ja></p>
                            </div>
                        </div>
                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <div className="w-24 md:w-32 bg-brand-accent"></div>
                            <div className="p-4 flex-1">
                                <p className="font-bold text-lg leading-tight"><budoux-ja>アクセントオレンジ</budoux-ja></p>
                                <p className="text-xs text-text-muted mb-2">Accent</p>
                                <div className="space-y-1 text-sm font-mono text-gray-600">
                                    <p><span className="w-10 inline-block text-gray-400">HEX</span> #FF9800</p>
                                    <p><span className="w-10 inline-block text-gray-400">RGB</span> 255, 152, 0</p>
                                    <p><span className="w-10 inline-block text-gray-400">CMYK</span> 0, 45, 100, 0</p>
                                </div>
                                <p className="text-xs text-text-muted mt-3"><budoux-ja>用途：NEWバッジ、警告、特ダネ情報（全体の5%以下に制限）</budoux-ja></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-4"><budoux-ja>テキスト・背景カラー</budoux-ja></h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="h-16 bg-text-main"></div>
                            <div className="p-3">
                                <p className="font-bold text-sm"><budoux-ja>メインテキスト</budoux-ja></p>
                                <p className="text-xs font-mono text-gray-500 mt-1">#333333</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="h-16 bg-text-muted"></div>
                            <div className="p-3">
                                <p className="font-bold text-sm"><budoux-ja>サブテキスト</budoux-ja></p>
                                <p className="text-xs font-mono text-gray-500 mt-1">#666666</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="h-16 bg-base-bg border-b border-gray-100"></div>
                            <div className="p-3">
                                <p className="font-bold text-sm"><budoux-ja>ベース背景</budoux-ja></p>
                                <p className="text-xs font-mono text-gray-500 mt-1">#F4F6F8</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="h-16 bg-base-surface border-b border-gray-100"></div>
                            <div className="p-3">
                                <p className="font-bold text-sm"><budoux-ja>カード背景(白)</budoux-ja></p>
                                <p className="text-xs font-mono text-gray-500 mt-1">#FFFFFF</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-4"><budoux-ja>ステータスカラー・サブパレット</budoux-ja></h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <div className="w-16 bg-status-success flex-shrink-0"></div>
                            <div className="p-4 flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-sm"><budoux-ja>Success（成功・確認）</budoux-ja></p>
                                    <span className="text-xs font-mono text-gray-500">#2E7D32</span>
                                </div>
                                <p className="text-xs text-gray-700 mb-2 mt-1">
                                    <span className="font-bold"><budoux-ja>用途：</budoux-ja></span>
                                    <budoux-ja>申し込み完了、保存成功、送信完了など、ユーザーのアクションが正常に終わった時のフィードバックに使用します。</budoux-ja>
                                </p>
                                <p className="text-xs text-text-muted bg-gray-50 p-2 rounded">
                                    <span className="font-bold"><budoux-ja>理由：</budoux-ja></span>
                                    <budoux-ja>メインカラーの緑よりも明るく「ポジティブ」な印象を与える緑を選定しました。</budoux-ja>
                                </p>
                            </div>
                        </div>

                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <div className="w-16 bg-status-error flex-shrink-0"></div>
                            <div className="p-4 flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-sm"><budoux-ja>Error（エラー・強い警告）</budoux-ja></p>
                                    <span className="text-xs font-mono text-gray-500">#D32F2F</span>
                                </div>
                                <p className="text-xs text-gray-700 mb-2 mt-1">
                                    <span className="font-bold"><budoux-ja>用途：</budoux-ja></span>
                                    <budoux-ja>入力不備、ログイン失敗、重要な禁止事項など、ユーザーに強い警告を出す際に使用します。</budoux-ja>
                                </p>
                                <p className="text-xs text-text-muted bg-gray-50 p-2 rounded">
                                    <span className="font-bold"><budoux-ja>理由：</budoux-ja></span>
                                    <budoux-ja>会津グリーンの補色（反対色）に近いため、非常に高い視認性を確保できます。</budoux-ja>
                                </p>
                            </div>
                        </div>

                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <div className="w-16 bg-status-warning flex-shrink-0"></div>
                            <div className="p-4 flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-sm"><budoux-ja>Warning / Caution（注意）</budoux-ja></p>
                                    <span className="text-xs font-mono text-gray-500">#EF6C00</span>
                                </div>
                                <p className="text-xs text-gray-700 mb-2 mt-1">
                                    <span className="font-bold"><budoux-ja>用途：</budoux-ja></span>
                                    <budoux-ja>締め切り間近、メンテナンス予告、限定情報の提示など、エラーではないが注意を促したい時に使用します。</budoux-ja>
                                </p>
                                <p className="text-xs text-text-muted bg-gray-50 p-2 rounded">
                                    <span className="font-bold"><budoux-ja>理由：</budoux-ja></span>
                                    <budoux-ja>背景の白や、メインカラーの緑と組み合わせても十分に目立つ、落ち着いた黄色です。</budoux-ja>
                                </p>
                            </div>
                        </div>

                        <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                            <div className="w-16 bg-status-info flex-shrink-0"></div>
                            <div className="p-4 flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-sm"><budoux-ja>Info（情報）</budoux-ja></p>
                                    <span className="text-xs font-mono text-gray-500">#0288D1</span>
                                </div>
                                <p className="text-xs text-gray-700 mb-2 mt-1">
                                    <span className="font-bold"><budoux-ja>用途：</budoux-ja></span>
                                    <budoux-ja>補足説明、参考リンク、現在の状況提示など。</budoux-ja>
                                </p>
                                <p className="text-xs text-text-muted bg-gray-50 p-2 rounded">
                                    <span className="font-bold"><budoux-ja>理由：</budoux-ja></span>
                                    <budoux-ja>誠実で冷静な印象を与える青で、情報の区別を容易にします。</budoux-ja>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
