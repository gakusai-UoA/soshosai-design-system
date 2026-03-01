import { useState } from "react";
import { Calendar } from "@/components/ui";
import { ComponentPreview } from "../../ui/ComponentPreview";

const calendarUsage = `import { useState } from "react"
import { Calendar } from "@/components/ui"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}`;

export function CalendarGuide() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <ComponentPreview title="カレンダー (Calendar)" code={calendarUsage}>
            <div className="flex justify-center flex-wrap gap-8 w-full">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border bg-base-surface"
                />
            </div>
        </ComponentPreview>
    );
}
