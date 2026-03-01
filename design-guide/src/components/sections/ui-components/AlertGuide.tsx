import { Alert, AlertTitle, AlertDescription } from '@/components/ui';
import { ComponentPreview } from '../../ui/ComponentPreview';

const alertUsage = `import { Alert, AlertTitle, AlertDescription } from "@/components/ui"
import { AlertCircle, FileWarning, Terminal } from "lucide-react"

// Default Alert
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>お知らせ</AlertTitle>
  <AlertDescription>
    新しい機能がリリースされました。
  </AlertDescription>
</Alert>

// Destructive Alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>エラー</AlertTitle>
  <AlertDescription>
    セッションが切れました。もう一度ログインしてください。
  </AlertDescription>
</Alert>`;

export function AlertGuide() {
    return (
        <ComponentPreview title="アラート (Alert)" code={alertUsage}>
            <div className="w-full max-w-md mx-auto md:mx-0 space-y-4 text-left">
                <Alert>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
                    <AlertTitle>お知らせ</AlertTitle>
                    <AlertDescription>
                        新しい機能がリリースされました。
                    </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                    <AlertTitle>エラー</AlertTitle>
                    <AlertDescription>
                        セッションが切れました。もう一度ログインしてください。
                    </AlertDescription>
                </Alert>
            </div>
        </ComponentPreview>
    );
}
