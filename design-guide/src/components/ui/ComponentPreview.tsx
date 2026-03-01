import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';

export function ComponentPreview({ title, children, code }: { title: string, children: React.ReactNode, code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            <h4 className="font-bold text-gray-800 text-lg border-l-4 border-primary pl-3"><budoux-ja>{title}</budoux-ja></h4>
            <Tabs defaultValue="preview">
                <TabsList className="mb-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="mt-0">
                    <div className="bg-base-surface rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 flex items-center justify-center min-h-[150px]">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-900">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-gray-800/50">
                            <span className="text-xs text-gray-400 font-mono">tsx</span>
                            <button
                                onClick={handleCopy}
                                className="text-xs font-bold text-gray-300 hover:text-white px-2 py-1 rounded-sm transition flex items-center gap-1 hover:bg-gray-700"
                            >
                                {copied ? (
                                    <>
                                        <svg className="w-4 h-4 text-status-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="p-4 overflow-x-auto text-sm font-mono text-gray-100 max-h-[400px] overflow-y-auto">
                            <pre><code>{code.trim()}</code></pre>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
