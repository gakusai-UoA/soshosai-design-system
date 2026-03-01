import React, { useState, createContext, useContext } from 'react';

const TabsContext = createContext<{ value: string; onValueChange: (v: string) => void }>({
    value: '',
    onValueChange: () => { },
});

export function Tabs({ defaultValue, children, className = '' }: { defaultValue: string, children: React.ReactNode, className?: string }) {
    const [value, setValue] = useState(defaultValue);
    return (
        <TabsContext.Provider value={{ value, onValueChange: setValue }}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
}

export function TabsList({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
            {children}
        </div>
    );
}

export function TabsTrigger({ value, children, className = '' }: { value: string, children: React.ReactNode, className?: string }) {
    const context = useContext(TabsContext);
    const isActive = context.value === value;
    return (
        <button
            onClick={() => context.onValueChange(value)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-primary text-white shadow-sm' : 'hover:bg-primary/10 hover:text-primary'
                } ${className}`}
        >
            <budoux-ja>{children as string}</budoux-ja>
        </button>
    );
}

export function TabsContent({ value, children, className = '' }: { value: string, children: React.ReactNode, className?: string }) {
    const context = useContext(TabsContext);
    if (context.value !== value) return null;
    return (
        <div className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}>
            {children}
        </div>
    );
}
