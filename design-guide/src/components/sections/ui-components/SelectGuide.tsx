import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { ComponentPreview } from '../../ui/ComponentPreview';

const selectUsage = `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="果物を選択" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>果物</SelectLabel>
      <SelectItem value="apple">りんご</SelectItem>
      <SelectItem value="banana">バナナ</SelectItem>
      <SelectItem value="orange">オレンジ</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;

export function SelectGuide() {
    return (
        <ComponentPreview title="セレクト (Select)" code={selectUsage}>
            <div className="flex justify-center">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="カテゴリを選択" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>カテゴリ</SelectLabel>
                            <SelectItem value="food">模擬店（食品）</SelectItem>
                            <SelectItem value="game">企画（ゲーム）</SelectItem>
                            <SelectItem value="stage">ステージ</SelectItem>
                            <SelectItem value="exhibition">展示</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </ComponentPreview>
    );
}
