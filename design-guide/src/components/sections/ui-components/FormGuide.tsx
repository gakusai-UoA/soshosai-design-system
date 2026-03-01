import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { ComponentPreview } from '../../ui/ComponentPreview';

const formUsage = `import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"

// Basic Input Field
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>

// Textarea
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>

// Input OTP
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`;

export function FormGuide() {
    return (
        <ComponentPreview title="フォーム入力 (Input, Textarea, OTP)" code={formUsage}>
            <div className="w-full max-w-sm mx-auto space-y-8 text-left">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input type="email" id="email" placeholder="tanaka@soshosai.com" />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="message">お問い合わせ内容</Label>
                    <Textarea disabled placeholder="只今メンテナンス中です..." id="message" />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="otp">認証コード</Label>
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <Button className="w-full">送信する</Button>
            </div>
        </ComponentPreview>
    );
}
