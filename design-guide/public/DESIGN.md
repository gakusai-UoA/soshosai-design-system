# 蒼翔祭2026 デザインガイドライン (Soshosai Design System)

このドキュメントは、蒼翔祭2026プロジェクトにおけるUIコンポーネント、Webページ、および印刷物のレイアウトを生成・維持するための包括的なデザインガイドラインです。

## 1. デザイン原則 (Core Principles)

- **Modern & Clean**: 豊かな余白、高いコントラスト、明確な視覚的階層を重視します。
- **Brand Identity**: 「会津グリーン」と「アクセントオレンジ」を一貫して使用し、信頼感と活気を両立させます。
- **User-Centric**: 読みやすさとアクセシビリティを最優先事項とします。

## 2. カラーパレット (Color Palette)

一貫性を保つため、定義されたセマンティックカラーを必ず使用してください。

### ブランドカラー (Brand Colors)

- **Primary (会津グリーン)**: `#008578`
    - RGB: `0, 133, 120` | CMYK: `100, 0, 50, 10`
    - ヘッダー、主要ボタン、ロゴ、重要な背景エリアに使用。
- **Primary Light / Secondary**: `#e6f3f2`
    - ブランドアイデンティティを伝えるための控えめな背景に使用。
- **Accent (アクセントオレンジ)**: `#FF9800`
    - RGB: `255, 152, 0` | CMYK: `0, 45, 100, 0`
    - 「NEW」バッジ、アラート、特別なアクションなど、UI全体の5%未満で限定的に使用。

### 基本色 (Basic Colors)

- **Main Text**: `#333333`
- **Muted Text**: `#666666`
- **Background (Base)**: `#F8FAFC` (非常に薄いブルーグレー)
- **Surface / Card (White)**: `#FFFFFF`
- **Borders**: `#E2E8F0`

### 状態色 (Status Colors)

- **Success**: `#2E7D32` (肯定的なフィードバック、完了)
- **Error**: `#D32F2F` (警告、失敗、破壊的アクション)
- **Warning**: `#EF6C00` (注意、期限間近)
- **Info**: `#0288D1` (参考情報、コンテキストヘルプ)

## 3. タイポグラフィ (Typography)

可読性とモダンな美学を両立させるため、指定のフォントを使用します。

- **和文フォント**: `Noto Sans JP`
- **欧文/数字フォント**: `Montserrat`

### タイポグラフィ・スケール

- **H1 (大見出し)**: 32px / Line-height 1.4 / Black (900)
- **H2 (中見出し)**: 24px / Line-height 1.5 / Bold (700)
- **H3 (小見出し)**: 18px / Line-height 1.5 / Bold (700)
- **Body (本文)**: 16px / Line-height 1.7 / Regular (400)
- **Caption (注釈)**: 12px / Line-height 1.5 / Regular (400)
- **En (英数字強調)**: Montserrat 700 を推奨

### 🚨 重要：和文改行ルール (BudouX)

Web（React/HTML）で日本語のタイトルや短いテキストを記述する場合、**必ず** `<budoux-ja>` コンポーネントまたはタグで囲んでください。これにより、自然な文脈での改行が保証されます。

- **推奨**: `<h2><budoux-ja>蒼翔祭2026の企画一覧</budoux-ja></h2>`
- **非推奨**: `<h2>蒼翔祭2026の企画一覧</h2>`

## 4. スペーシング・形状・影 (Layout & Shapes)

### 8px システム

余白やサイズは 8px の倍数をベースにします（Tailwindの数値に基づく）。

- **4px (`p-1`, `gap-1`)**: アイコンとテキストの隣接など
- **8px (`p-2`, `gap-2`)**: 関連する小さなアイテム間の標準的な間隔
- **16px (`p-4`, `gap-4`)**: コンポーネントの内包パディング、段落間の間隔
- **24px (`p-6`, `gap-6`)**: 見出しと本文の間隔、カード内部のパディング
- **32px (`p-8`, `gap-8`)**: 明確に異なるコンポーネント間の分離
- **48px (`p-12`, `gap-12`)**: ページの大きなセクション間の間隔

### 角丸 (Border Radius)

一般的なライブラリよりも少し丸みを強調したデザインを採用しています。

- **Small (6px / `rounded-sm`)**: タグ、バッジ
- **Medium (12px / `rounded-md`)**: ボタン、入力フォーム
- **Large (16px / `rounded-lg`)**: カード、アラート
- **Extra Large (24px / `rounded-2xl`)**: モーダル、大きなセクション
- **Full (9999px / `rounded-full`)**: ピル型ボタン

### 影 (Shadows)

ブランドの調和を保つため、影には「会津グリーン」を微かに混ぜた色 (`rgba(0, 133, 120, x)`) を使用しています。`shadow-sm`, `shadow-md`, `shadow-lg` はプロジェクト全体でこの仕様にカスタマイズされています。

## 5. UIコンポーネント (UI Components)

以下のコンポーネントが Shadcn UI をベースに拡張され、ガイドラインに準拠して実装されています。

- **Buttons / Toggles**: Primary, Secondary, Destructive, Outline, Ghost 等
- **Data Display**: Accordion, Badge, Card, Table, Carousel, Calendar
- **Navigation**: Breadcrumb, Pagination, Tabs, Dropdown Menu
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Forms**: Input, Checkbox, Select, Radio Group, Textarea, Form Validation
- **Overlays**: Dialog, Drawer, Popover, Tooltip, Hover Card
- **Layout**: Sidebar, Separator, Scroll Area, Resizable

## 6. 印刷用ガイドライン (Print Guidelines)

印刷用レイアウト（ポスター、パンフレット等）を作成する際の注意点です。

- **カラーモード**: 必ず **CMYK** プロファイルを使用してください。RGB特有の蛍光色は使用不可。
- **ブランドの再現性**: 会津グリーンは厳密に `C100 M0 Y50 K10` を使用。
- **グリッドと余白**: グリッドを強く意識し、情報の塊の間に十分な余白を設ける。端から3-5mmは裁ち落とし/セーフエリアとして確保。
- **解像度**: 画像は 300-350 DPI を維持する。

## 7. 実装上の注意 (Implementation Notes)

- **Tailwind CSS**: `bg-primary`, `text-primary`, `bg-brand-accent` などのセマンティックなクラス名を使用して構築してください。
- **Shadcn UI**: プロジェクト独自の `src/components/ui` 内のコンポーネントを優先して使用してください。これらは角丸や色がカスタマイズ済みです。
- **ダークモード**: `dark` クラスによる切り替えに対応しています。背景は `#1e293b` (slate-800) 前後になります。
