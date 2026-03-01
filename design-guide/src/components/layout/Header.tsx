import type { GuideMode } from '../../App';
import type { Dispatch, SetStateAction } from 'react';
import { SidebarTrigger } from '../ui/sidebar';

interface HeaderProps {
    mode: GuideMode;
    setMode: Dispatch<SetStateAction<GuideMode>>;
}

export function Header({ mode, setMode }: HeaderProps) {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-base-surface px-4 sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1 text-gray-500 hover:text-gray-900" />
                <div className="md:hidden flex items-center gap-2 ml-2">
                    <img src="/logo.svg" alt="蒼翔祭 Logo" className="h-6 w-auto mix-blend-multiply" />
                    <h1 className="text-sm font-black text-primary leading-tight"><budoux-ja>Design System</budoux-ja></h1>
                </div>
            </div>

            {/* Mobile Mode Toggle */}
            <div className="md:hidden flex p-0.5 bg-gray-100 rounded-lg">
                <button
                    onClick={() => setMode('web')}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${mode === 'web'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <budoux-ja>Web</budoux-ja>
                </button>
                <button
                    onClick={() => setMode('print')}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${mode === 'print'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <budoux-ja>Print</budoux-ja>
                </button>
            </div>
        </header>
    );
}
