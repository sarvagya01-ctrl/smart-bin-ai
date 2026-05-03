import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface RevealProps {
  delay?: number;
  className?: string;
  as?: "div" | "section";
}

export const Reveal = ({
  children,
  delay = 0,
  className,
  as: As = "div",
}: PropsWithChildren<RevealProps>) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </As>
  );
};
