import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui';
import { ComponentPreview } from '../../ui/ComponentPreview';

const accordionUsage = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui"

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>アクセシビリティに対応していますか？</AccordionTrigger>
    <AccordionContent>
      はい。WAI-ARIAのベストプラクティスに従って実装されています。
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>カスタマイズは可能ですか？</AccordionTrigger>
    <AccordionContent>
      はい！Tailwind CSSのクラスを使って自由にスタイリングできます。
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

export function AccordionGuide() {
    return (
        <ComponentPreview title="アコーディオン (Accordion)" code={accordionUsage}>
            <div className="w-full max-w-md mx-auto md:mx-0 text-left">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>アクセシビリティに対応していますか？</AccordionTrigger>
                        <AccordionContent>
                            はい。WAI-ARIAのベストプラクティスに従って実装されています。
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>カスタマイズは可能ですか？</AccordionTrigger>
                        <AccordionContent>
                            はい！Tailwind CSSのクラスを使って自由にスタイリングできます。
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>アニメーションはどうなっていますか？</AccordionTrigger>
                        <AccordionContent>
                            CSSアニメーションによってスムーズに開閉します。高さも自動的に計算されます。
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </ComponentPreview>
    );
}
