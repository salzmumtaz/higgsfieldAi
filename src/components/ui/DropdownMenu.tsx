import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export function DropdownMenuContent({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        side="bottom"
        align="end"
        sideOffset={sideOffset}
        className={cn(
          "z-[250] flex w-56 flex-col gap-2 rounded-card border border-border-default bg-surface-primary p-2 text-fg shadow-[var(--shadow-raised-sm)]",
          "data-[state=open]:animate-[overlay-in_var(--duration-fast)_var(--ease-out)]",
          className,
        )}
        {...props}
      />
    </DropdownMenuPortal>
  );
}

export function DropdownMenuItem({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none select-none",
        "text-fg data-[highlighted]:bg-overlay-hover",
        className,
      )}
      {...props}
    />
  );
}

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none select-none",
        "text-fg data-[highlighted]:bg-overlay-hover data-[state=checked]:bg-white/5",
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}
