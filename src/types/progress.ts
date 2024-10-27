// types/progress.ts
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { ComponentPropsWithoutRef, ElementRef } from "react"

export interface ProgressProps extends Omit<ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'value'> {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export type ProgressRef = ElementRef<typeof ProgressPrimitive.Root>;