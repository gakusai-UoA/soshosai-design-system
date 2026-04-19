# Soshosai Design System (LLM Context)

This document provides a concise, LLM-friendly summary of the Soshosai Design System. Use these guidelines when generating UI components, pages, or print layouts for the Soshosai 2026 project.

## 1. Core Principles

- **Modern & Clean**: Emphasize ample whitespace, high contrast, and clear visual hierarchy.
- **Brand Identity**: Consistent use of "Aizu Green" and "Accent Orange".

## 2. Color Palette

Always use these exact semantic color values for consistency.

### Brand Colors

- **Primary (会津グリーン / Aizu Green)**: `#008578` (RGB: 0, 133, 120 | CMYK: 100, 0, 50, 10). Use for headers, primary buttons, logos, and critical area backgrounds.
- **Primary Light / Secondary**: `#e6f3f2`. Use for subtle backgrounds conveying brand identity.
- **Accent (アクセントオレンジ / Accent Orange)**: `#FF9800` (RGB: 255, 152, 0 | CMYK: 0, 45, 100, 0). Use sparingly (<5% of UI) for NEW badges, alerts, or standout actions.

### Basic Colors

- **Main Text**: `#333333`
- **Muted Text**: `#666666`
- **Background (Base)**: `#F8FAFC` (Very light blue-gray)
- **Surface / Card (White)**: `#FFFFFF`
- **Borders**: `#E2E8F0`

### Semantic / Status Colors

- **Success**: `#2E7D32` (Positive feedback, completion)
- **Error**: `#D32F2F` (Strong warnings, failures, destructive actions)
- **Warning**: `#EF6C00` (Cautions, upcoming deadlines)
- **Info**: `#0288D1` (Helpful context, links)

## 3. Typography

We use designated fonts to balance readability and modern aesthetics.

- **Japanese Font**: `Noto Sans JP`
- **English/Number Font**: `Montserrat`

### Scale

- **H1 (大見出し)**: 32px / Line-height 1.4 / Black (900)
- **H2 (中見出し)**: 24px / Line-height 1.5 / Bold (700)
- **H3 (小見出し)**: 18px / Line-height 1.5 / Bold (700)
- **Body (本文)**: 16px / Line-height 1.7 / Regular (400)
- **Caption (注釈)**: 12px / Line-height 1.5 / Regular (400)
- **En (英数字強調)**: `font-en font-bold` (Montserrat 700)

### 🚨 Critical Typography Rule for Web (BudouX)

When writing headings or short Japanese texts in React/HTML, **ALWAYS** wrap the text in the `<budoux-ja>` component/tag to ensure natural Japanese line breaks.

- **Good**: `<h2><budoux-ja>蒼翔祭2026の企画一覧</budoux-ja></h2>`
- **Bad**: `<h2>蒼翔祭2026の企画一覧</h2>`

## 4. Spacing, Layout & Shapes

### The 8px System

Always use spacing utilities based on multiples of 8px (Tailwind map):

- **4px (`p-1`, `gap-1`)**: Very tight grouping (e.g., icon and adjacent text)
- **8px (`p-2`, `gap-2`)**: Standard gap between related small items or list elements
- **16px (`p-4`, `gap-4`)**: Standard internal padding for components, gap between paragraphs
- **24px (`p-6`, `gap-6`)**: Spacing between H2/H3 and body text, inside Cards
- **32px (`p-8`, `gap-8`)**: Distinct component separation
- **48px (`p-12`, `gap-12`)**: Major page section gaps

### Border Radius

The design system features slightly more rounded corners than standard default libraries.

- **Small (Tags, Badges)**: 6px (`rounded-sm`)
- **Medium (Buttons, Inputs)**: 12px (`rounded-md`)
- **Large (Cards, Alerts)**: 16px (`rounded-lg` or `rounded-xl`)
- **Extra Large (Modals)**: 24px (`rounded-2xl` or `rounded-3xl` equivalent)
- **Full (Pills, Circular buttons)**: 9999px (`rounded-full`)

### Shadows

Shadows have a minimal tint of Aizu Green for brand harmony (`rgba(0, 133, 120, x)`). Use standard shadcn classes (`shadow-sm`, `shadow-md`, `shadow-lg`) which have been globally overridden in index.css.

## 5. Print Best Practices

If generating layouts meant for Print (e.g., PDFs, posters, flyers):

- **Grid & Whitespace**: Heavily rely on grids. Leave significant empty space between data chunks. Avoid pushing text near edges (leave 3-5mm bleed/safe margins).
- **Color Format**: Stick strictly to CMYK profiles. Do NOT use RGB neon/bright colors.
- **Brand Consistency**: Aizu Green must be exact: `C100 M0 Y50 K20`.
- **Text on Backgrounds**: Do not use thin fonts (e.g., `<400` weight) for white text knocked out of dark backgrounds (like Rich Black), as ink bleeds.
- **Graphics**: Ensure 300-350 DPI resolution limits for images. Always maintain aspect ratios. Add solid bounding boxes (座布団) rather than rely solely on drop shadows over complex photography.

## 6. Implementation Notes for LLMs

- **Tailwind**: Generate UIs using Tailwind CSS mapping closely to these tokens. For custom variables configured in CSS, use `bg-primary`, `text-primary`, `bg-brand-accent`, `bg-base-surface`, `bg-status-success`, etc.
- **Shadcn UI**: The project extends Shadcn UI. Default components (`Button`, `Card`, `Badge`) have been pre-configured to adapt to these radii and color definitions. Consume them aggressively.
