import { TooltipButton } from "@chatify/ui";
import type { LinkProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

interface DashboardLinkProps {
  label: string;
  to: LinkProps["to"];
  children: React.ReactNode;
}

export const DashboardLink = ({ children, label, to }: DashboardLinkProps) => {
  return (
    <TooltipButton tooltipText={label} asChild>
      <Link
        to={to}
        activeProps={{
          className: "text-accent/90 bg-accent/5 hover:text-accent",
        }}
      >
        {children}
      </Link>
    </TooltipButton>
  );
};
