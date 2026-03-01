export function IntroSection() {
    return (
        <section id="intro" className="scroll-mt-12">
            <div className="bg-primary text-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                <span className="inline-block bg-brand-accent text-white text-bg font-bold px-3 py-1 rounded-full mb-4">Soshosai Brand Guidelines</span>
                <h2 className="text-3xl md:text-4xl font-black mb-4"><budoux-ja>ブランドの一貫性を守るために</budoux-ja></h2>
                <p className="text-primary-light leading-relaxed max-w-2xl">
                    <budoux-ja>
                        このデザインシステムは、蒼翔祭のブランドイメージをあらゆる媒体（Web、ポスター、グッズ等）で統一するためのルールブックです。<br />
                        「緑と白のハイブリッド配色」を基本とし、誰でも迷わずプロフェッショナルなデザインを作成できることを目的としています。
                    </budoux-ja>
                </p>
            </div>
        </section>
    );
}
