"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-base-surface group-[.toaster]:text-text-main group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg rounded-xl",
          description: "group-[.toast]:text-text-muted",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-white font-bold",
          cancelButton:
            "group-[.toast]:bg-background group-[.toast]:text-primary group-[.toast]:border group-[.toast]:border-primary hover:group-[.toast]:bg-primary/10",
          closeButton:
            "group-[.toast]:bg-base-surface group-[.toast]:text-text-muted group-[.toast]:border-gray-200 hover:group-[.toast]:bg-gray-50 hover:group-[.toast]:text-text-main",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4 text-status-success" />,
        info: <InfoIcon className="size-4 text-status-info" />,
        warning: <TriangleAlertIcon className="size-4 text-status-warning" />,
        error: <OctagonXIcon className="size-4 text-status-error" />,
        loading: <Loader2Icon className="size-4 animate-spin text-primary" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
