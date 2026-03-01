import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { IntroSection } from './components/sections/IntroSection';
import { LogoGuidelines } from './components/sections/LogoGuidelines';
import { ColorPalette } from './components/sections/ColorPalette';
import { Typography } from './components/sections/Typography';
import { UIComponents } from './components/sections/UIComponents';
import { LayoutGuidelines } from './components/sections/LayoutGuidelines';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';

export type GuideMode = 'web' | 'print';

export default function App() {
  const [mode, setMode] = useState<GuideMode>('web');

  return (
    <SidebarProvider>
      <div className="bg-base-bg text-text-main font-sans antialiased flex h-screen w-full overflow-hidden">
        <Sidebar mode={mode} setMode={setMode} />

        <SidebarInset className="flex w-full flex-col bg-base-bg h-screen overflow-hidden">
          <Header mode={mode} setMode={setMode} />

          <main className="flex-1 overflow-y-auto scroll-pt-8">
            <div className="max-w-5xl mx-auto p-6 md:p-12 space-y-16">
              <IntroSection />
              <LogoGuidelines />
              <ColorPalette />

              {/* Web Mode Sections */}
              {mode === 'web' && (
                <>
                  <Typography />
                  <UIComponents />
                  <LayoutGuidelines />
                </>
              )}

              {/* Print Mode Sections */}
              {mode === 'print' && (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-text-main">
                    <budoux-ja>印刷用デザインガイド</budoux-ja>
                  </h2>
                  <p className="text-text-muted">
                    <budoux-ja>現在準備中です...</budoux-ja>
                  </p>
                </div>
              )}

              <div className="pb-20"></div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
