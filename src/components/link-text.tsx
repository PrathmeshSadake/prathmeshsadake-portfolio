import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LinkTextProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

const LinkText: React.FunctionComponent<LinkTextProps> = ({
  className,
  target,
  ...attr
}) => {
  return (
    <Link
      className={cn(
        "mono inline-flex items-center gap-1 text-[12px] text-ink transition-colors hover:text-blue",
        className
      )}
      {...attr}
      target={target}
    >
      <span>{attr?.children}</span>
      <ArrowUpRight className='h-3.5 w-3.5' />
    </Link>
  );
};

export default LinkText;
