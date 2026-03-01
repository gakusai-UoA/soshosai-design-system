import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from '@/components/ui/dialog';
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose
} from '@/components/ui/drawer';
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose
} from '@/components/ui/sheet';
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ComponentPreview } from '../../ui/ComponentPreview';

const overlaysUsage = `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

// Dialog
<Dialog>
  <DialogTrigger asChild><Button variant="outline">ダイアログ</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>確認</DialogTitle>
      <DialogDescription>この操作は取り消せません。</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">キャンセル</Button></DialogClose>
      <Button variant="accent">実行する</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Drawer
<Drawer>
  <DrawerTrigger asChild><Button variant="outline">ドロワー</Button></DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>ドロワータイトル</DrawerTitle>
        <DrawerDescription>下からスライドして表示されます。</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>閉じる</Button>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>

// Sheet
<Sheet>
  <SheetTrigger asChild><Button variant="outline">シート</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>シート設定</SheetTitle>
      <SheetDescription>横からスライドして表示されるパネルです。</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

// Popover
<Popover>
  <PopoverTrigger asChild><Button variant="outline">ポップオーバー</Button></PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium leading-none">詳細情報</h4>
      <p className="text-sm text-muted-foreground">追加の説明をここに記載します。</p>
    </div>
  </PopoverContent>
</Popover>`;

export function OverlaysGuide() {
    return (
        <ComponentPreview title="オーバーレイ (Dialog, Drawer, Sheet, Popover)" code={overlaysUsage}>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">ダイアログを開く</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>操作の確認</DialogTitle>
                            <DialogDescription>
                                この操作を実行しますか？この操作は取り消すことができません。
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">キャンセル</Button>
                            </DialogClose>
                            <Button variant="accent">実行する</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="outline">ドロワーを開く</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>ドロワーメニュー</DrawerTitle>
                                <DrawerDescription>モバイル向けのボトムシートです。</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0 flex flex-col gap-2">
                                <Button variant="outline">オプション 1</Button>
                                <Button variant="outline">オプション 2</Button>
                            </div>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button variant="ghost">閉じる</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">シートを開く</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>サイドパネル設定</SheetTitle>
                            <SheetDescription>
                                画面の横からスライドインするパネルです。フィルターや設定メニューに最適です。
                            </SheetDescription>
                        </SheetHeader>
                        <div className="py-4">
                            <p className="text-sm">ここに設定項目などを配置します。</p>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button variant="outline">閉じる</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">ポップオーバーを開く</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <h4 className="font-medium leading-none">詳細設定</h4>
                                <p className="text-sm text-text-muted">
                                    表示に関する追加情報を設定します。
                                </p>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </ComponentPreview>
    );
}
