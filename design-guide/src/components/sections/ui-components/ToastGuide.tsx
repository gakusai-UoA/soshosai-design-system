import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { ComponentPreview } from '../../ui/ComponentPreview';

const sonnerUsage = `import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          toast("イベントが作成されました", {
            description: "2024年10月1日 10:00 AM",
            action: { label: "元に戻す", onClick: () => console.log("Undo") },
          })
        }}
      >
        トーストを表示
      </Button>
      <Toaster />
    </>
  )
}`;

export function ToastGuide() {
    return (
        <ComponentPreview title="トースト通知 (Sonner)" code={sonnerUsage}>
            <div className="flex items-center justify-center p-8">
                <Button
                    variant="outline"
                    onClick={() => {
                        toast("イベントが作成されました", {
                            description: "2024年11月2日 10:00 AM",
                            action: {
                                label: "閉じる",
                                onClick: () => console.log("Undo"),
                            },
                        });
                    }}
                >
                    通知を表示
                </Button>
                {/* Toaster is usually put at the root of the app, but placed here for demonstration, although app Root usually has it */}
                <Toaster />
            </div>
        </ComponentPreview>
    );
}
