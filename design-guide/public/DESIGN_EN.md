# Soshosai Design System 2026 Guidelines

This document serves as a comprehensive design guideline for generating and maintaining UI components, web pages, and print layouts for the Soshosai 2026 project.

## 1. Core Principles

- **Modern & Clean**: Emphasize ample whitespace, high contrast, and a clear visual hierarchy.
- **Brand Identity**: Consistent use of "Aizu Green" and "Accent Orange" to balance reliability and energy.
- **User-Centric**: Prioritize readability and accessibility in all designs.

## 2. Color Palette

Always use the defined semantic colors to ensure brand consistency.

### Brand Colors

- **Primary (Aizu Green / 会津グリーン)**: `#008578`
    - RGB: `0, 133, 120` | CMYK: `100, 0, 50, 10`
    - Use for headers, primary buttons, logos, and critical background areas.
- **Primary Light / Secondary**: `#e6f3f2`
    - Use for subtle backgrounds conveying brand identity.
- **Accent (Accent Orange / アクセントオレンジ)**: `#FF9800`
    - RGB: `255, 152, 0` | CMYK: `0, 45, 100, 0`
    - Use sparingly (<5% of UI) for "NEW" badges, alerts, or standout actions.

### Basic Colors

- **Main Text**: `#333333`
- **Muted Text**: `#666666`
- **Background (Base)**: `#F8FAFC` (Very light blue-gray)
- **Surface / Card (White)**: `#FFFFFF`
- **Borders**: `#E2E8F0`

### Status Colors

- **Success**: `#2E7D32` (Positive feedback, completion)
- **Error**: `#D32F2F` (Warnings, failures, destructive actions)
- **Warning**: `#EF6C00` (Cautions, upcoming deadlines)
- **Info**: `#0288D1` (Helpful context, info links)

## 3. Typography

Designated fonts are used to balance readability and modern aesthetics.

- **Japanese Font**: `Noto Sans JP`
- **English/Number Font**: `Montserrat`

### Scale

- **H1 (Large Heading)**: 32px / Line-height 1.4 / Black (900)
- **H2 (Medium Heading)**: 24px / Line-height 1.5 / Bold (700)
- **H3 (Small Heading)**: 18px / Line-height 1.5 / Bold (700)
- **Body**: 16px / Line-height 1.7 / Regular (400)
- **Caption**: 12px / Line-height 1.5 / Regular (400)
- **En (English Emphasis)**: Montserrat 700 is recommended.

### 🚨 Critical: Japanese Line Break Rule (BudouX)

When writing headings or short Japanese texts in React/HTML, **ALWAYS** wrap the text in the `<budoux-ja>` component/tag to ensure natural Japanese line breaks.

- **Recommended**: `<h2><budoux-ja>蒼翔祭2026の企画一覧</budoux-ja></h2>`
- **Not Recommended**: `<h2>蒼翔祭2026の企画一覧</h2>`

## 4. Spacing, Shapes & Shadows

### The 8px System

Use spacing utilities based on multiples of 8px (mapping to Tailwind's scale).

- **4px (`p-1`, `gap-1`)**: Very tight grouping (e.g., icon and adjacent text)
- **8px (`p-2`, `gap-2`)**: Standard gap between related small items or list elements
- **16px (`p-4`, `gap-4`)**: Standard internal padding for components, gap between paragraphs
- **24px (`p-6`, `gap-6`)**: Spacing between H2/H3 and body text, inside Cards
- **32px (`p-8`, `gap-8`)**: Distinct component separation
- **48px (`p-12`, `gap-12`)**: Major page section gaps

### Border Radius

The design system features slightly more rounded corners than standard defaults.

- **Small (6px / `rounded-sm`)**: Tags, Badges
- **Medium (12px / `rounded-md`)**: Buttons, Inputs
- **Large (16px / `rounded-lg`)**: Cards, Alerts
- **Extra Large (24px / `rounded-2xl`)**: Modals, Large Sections
- **Full (9999px / `rounded-full`)**: Pills, Circular buttons

### Shadows

Shadows have a minimal tint of Aizu Green for brand harmony (`rgba(0, 133, 120, x)`). Standard shadow classes (`shadow-sm`, `shadow-md`, `shadow-lg`) have been globally overridden to match this.

## 5. UI Components

The following components are extended from Shadcn UI and pre-configured to adhere to these guidelines:

- **Buttons / Toggles**: Primary, Secondary, Destructive, Outline, Ghost, etc.
- **Data Display**: Accordion, Badge, Card, Table, Carousel, Calendar
- **Navigation**: Breadcrumb, Pagination, Tabs, Dropdown Menu
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Forms**: Input, Checkbox, Select, Radio Group, Textarea, Form Validation
- **Overlays**: Dialog, Drawer, Popover, Tooltip, Hover Card
- **Layout**: Sidebar, Separator, Scroll Area, Resizable

## 6. Print Best Practices

When generating layouts meant for Print (PDFs, posters, flyers):

- **Color Mode**: Strictly use the **CMYK** profile. Do NOT use RGB neon colors.
- **Brand Consistency**: Aizu Green must be exact: `C100 M0 Y50 K10`.
- **Grid & Whitespace**: Rely heavily on grids. Leave significant empty space between data chunks. Ensure a 3-5mm bleed/safe margin from edges.
- **Resolution**: Maintain 300-350 DPI for all images.

## 7. Implementation Notes

- **Tailwind CSS**: Build UIs using semantic classes like `bg-primary`, `text-primary`, and `bg-brand-accent`.
- **Shadcn UI**: Aggressively consume components from `src/components/ui`, as they are already customized for these radii and color definitions.
- **Dark Mode**: Supports dark mode via the `dark` class. The background shifts to approximately `#1e293b` (slate-800).
