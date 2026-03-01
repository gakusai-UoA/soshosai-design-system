import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { Home, Settings, Inbox } from 'lucide-react';
import { ComponentPreview } from '../../ui/ComponentPreview';

const sidebarUsage = `import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Home />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}`;

export function SidebarGuide() {
    return (
        <ComponentPreview title="サイドバー (Sidebar)" code={sidebarUsage}>
            <div className="w-full h-[400px] border border-border rounded-lg overflow-hidden relative shadow-sm">
                <SidebarProvider>
                    <Sidebar className="absolute h-full">
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupLabel>Soshosai Menu</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild tooltip="ホーム">
                                                <a href="#">
                                                    <Home />
                                                    <span>ホーム</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild tooltip="受信トレイ">
                                                <a href="#">
                                                    <Inbox />
                                                    <span>受信トレイ</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild tooltip="設定">
                                                <a href="#">
                                                    <Settings />
                                                    <span>設定</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <main className="flex-1 p-4 bg-base-bg flex flex-col h-full overflow-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <SidebarTrigger />
                            <h1 className="text-xl font-bold">ダッシュボード</h1>
                        </div>
                        <div className="p-4 bg-base-surface rounded-lg shadow-sm">
                            <p className="text-sm text-text-muted">
                                画面左のメニューから項目を選択してください。
                            </p>
                        </div>
                    </main>
                </SidebarProvider>
            </div>
        </ComponentPreview>
    );
}
