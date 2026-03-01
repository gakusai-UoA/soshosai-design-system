import type { GuideMode } from '../../App';
import type { Dispatch, SetStateAction } from 'react';
import {
    Sidebar as ShadcnSidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupContent,
} from '../ui/sidebar';

interface SidebarProps {
    mode: GuideMode;
    setMode: Dispatch<SetStateAction<GuideMode>>;
}

export function Sidebar({ mode, setMode }: SidebarProps) {
    return (
        <ShadcnSidebar variant="inset">
            <SidebarHeader className="border-b border-gray-100">
                <div className="flex items-center gap-2 px-2 py-4">
                    <img src="/logo.svg" alt="蒼翔祭 Logo" className="h-8 w-auto mix-blend-multiply flex-shrink-0" />
                    <div className="flex flex-col truncate group-data-[collapsible=icon]:hidden">
                        <span className="font-black text-primary leading-tight truncate">Design System</span>
                        <span className="text-xs text-text-muted mt-0.5">Ver 2.0.0</span>
                    </div>
                </div>

                {/* Mode Toggle */}
                <div className="flex p-1 bg-gray-100 rounded-lg mx-2 mb-2 group-data-[collapsible=icon]:hidden">
                    <button
                        onClick={() => setMode('web')}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${mode === 'web'
                            ? 'bg-white text-primary shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <budoux-ja>Web用</budoux-ja>
                    </button>
                    <button
                        onClick={() => setMode('print')}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${mode === 'print'
                            ? 'bg-white text-primary shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <budoux-ja>印刷用</budoux-ja>
                    </button>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#intro" className="font-bold text-gray-700"><budoux-ja>1. はじめに</budoux-ja></a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#logo" className="font-bold text-gray-700"><budoux-ja>2. ロゴ・ガイドライン</budoux-ja></a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#colors" className="font-bold text-gray-700"><budoux-ja>3. カラーパレット</budoux-ja></a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            {mode === 'web' && (
                                <>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#typography" className="font-bold text-gray-700"><budoux-ja>4. タイポグラフィ</budoux-ja></a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#components" className="font-bold text-gray-700"><budoux-ja>5. UIコンポーネント</budoux-ja></a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#layout" className="font-bold text-gray-700"><budoux-ja>6. 余白・レイアウト</budoux-ja></a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </>
                            )}

                            {mode === 'print' && (
                                <SidebarMenuItem>
                                    <SidebarMenuButton disabled>
                                        <span className="font-bold text-gray-400"><budoux-ja>準備中...</budoux-ja></span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </ShadcnSidebar>
    );
}
