import { cn } from "@/lib/utils"; // Optional utility to combine classNames

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={cn(
          "w-8 h-8 border-4 border-t-transparent border-primary-500 rounded-full animate-spin"
        )}
      />
    </div>
  );
}
