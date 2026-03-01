import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ComponentPreview } from '../../ui/ComponentPreview';

const tableUsage = `import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`;

const invoices = [
    {
        invoice: "REQ-001",
        status: "承認済み",
        method: "自動振込",
        amount: "¥25,000",
    },
    {
        invoice: "REQ-002",
        status: "保留",
        method: "現金手渡し",
        amount: "¥15,000",
    },
    {
        invoice: "REQ-003",
        status: "未払い",
        method: "銀行振込",
        amount: "¥35,000",
    },
    {
        invoice: "REQ-004",
        status: "手配済み",
        method: "自動振込",
        amount: "¥45,000",
    },
]

export function TableGuide() {
    return (
        <ComponentPreview title="テーブル (Table)" code={tableUsage}>
            <div className="w-full">
                <Table>
                    <TableCaption>最近の申請一覧</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">申請番号</TableHead>
                            <TableHead>ステータス</TableHead>
                            <TableHead>支払方法</TableHead>
                            <TableHead className="text-right">金額</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.status}</TableCell>
                                <TableCell>{invoice.method}</TableCell>
                                <TableCell className="text-right">{invoice.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ComponentPreview>
    );
}
