// // components/ui/progress.tsx
// import * as React from "react"
// import * as ProgressPrimitive from "@radix-ui/react-progress"
// import { cn } from "@/lib/utils"

// interface ProgressProps {
//   value: number;
//   className?: string;
//   indicatorClassName?: string;
// }

// const Progress = React.forwardRef<
//   React.ElementRef<typeof ProgressPrimitive.Root>,
//   ProgressProps
// >(({ className, value, indicatorClassName, ...props }, ref) => (
//   <ProgressPrimitive.Root
//     ref={ref}
//     className={cn(
//       "relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
//       className
//     )}
//     value={value}
//     {...props}
//   >
//     <ProgressPrimitive.Indicator
//       className={cn(
//         "h-full w-full flex-1 bg-slate-900 transition-all dark:bg-slate-50",
//         indicatorClassName
//       )}
//       style={{
//         transform: `translateX(-${100 - (value || 0)}%)`
//       }}
//     />
//   </ProgressPrimitive.Root>
// ));

// Progress.displayName = "Progress"

// export { Progress }