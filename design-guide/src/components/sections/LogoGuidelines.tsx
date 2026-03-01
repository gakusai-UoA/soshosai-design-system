export function LogoGuidelines() {
    return (
        <section id="logo" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>2. ロゴ・ガイドライン</budoux-ja></h3>

            <div className="bg-base-surface rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-8">
                <div>
                    <h4 className="text-lg font-bold mb-3"><budoux-ja>アイソレーション（保護領域）と最小サイズ</budoux-ja></h4>
                    <p className="text-sm text-text-muted mb-4"><budoux-ja>ロゴの視認性を保つため、周囲に必ず余白（X）を確保してください。この領域内には他の要素を配置してはいけません。</budoux-ja></p>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 bg-gray-50 border border-dashed border-gray-300 p-8 flex items-center justify-center relative rounded">
                            <div className="relative border border-blue-400 bg-blue-50/50 p-6">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-500 text-xs font-bold">X</div>
                                <div className="absolute top-1/2 -left-6 -translate-y-1/2 text-blue-500 text-xs font-bold">X</div>
                                <img src="/logo.svg" alt="蒼翔祭 Logo" className="h-20 w-auto mix-blend-multiply" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="bg-gray-50 p-4 rounded border border-gray-100">
                                <p className="font-bold text-sm mb-1"><budoux-ja>保護領域（アイソレーション）</budoux-ja></p>
                                <p className="text-sm text-text-muted"><budoux-ja>ロゴの高さ（H）とした場合、周囲に最低「0.5H」の空間を空けること。</budoux-ja></p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded border border-gray-100">
                                <p className="font-bold text-sm mb-1"><budoux-ja>最小使用サイズ</budoux-ja></p>
                                <ul className="text-sm text-text-muted list-disc list-inside">
                                    <li><budoux-ja>Web・デジタル：横幅 <span className="font-bold text-text-main">80px</span> 以上</budoux-ja></li>
                                    <li><budoux-ja>DTP・印刷物：横幅 <span className="font-bold text-text-main">25mm</span> 以上</budoux-ja></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-3"><budoux-ja>ロゴの使用ルール (Do's &amp; Don'ts)</budoux-ja></h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-red-200 rounded overflow-hidden">
                            <div className="bg-red-50 p-4 flex justify-center items-center h-24">
                                <img src="/logo.svg" alt="蒼翔祭 Logo" className="h-20 w-auto mix-blend-multiply transform scale-x-150" />
                            </div>
                            <div className="p-3 bg-white border-t border-red-200">
                                <p className="text-red-600 font-bold text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                                    <budoux-ja>NG: 変形・比率変更</budoux-ja>
                                </p>
                            </div>
                        </div>
                        <div className="border border-red-200 rounded overflow-hidden">
                            <div className="bg-red-50 p-4 flex justify-center items-center h-24 hue-rotate-90">
                                <img src="/logo.svg" alt="蒼翔祭 Logo" className="h-20 w-auto mix-blend-multiply" />
                            </div>
                            <div className="p-3 bg-white border-t border-red-200">
                                <p className="text-red-600 font-bold text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                                    <budoux-ja>NG: 指定外の配色</budoux-ja>
                                </p>
                            </div>
                        </div>
                        <div className="border border-red-200 rounded overflow-hidden">
                            <div className="bg-primary p-4 flex justify-center items-center h-24 hue-rotate-180 grayscale">
                                <img src="/logo.svg" alt="蒼翔祭 Logo" className="h-20 w-auto mix-blend-multiply opacity-50" />
                            </div>
                            <div className="p-3 bg-white border-t border-red-200">
                                <p className="text-red-600 font-bold text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                                    <budoux-ja>NG: 低コントラスト</budoux-ja>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
