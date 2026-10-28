import { cn } from "@/lib/utils";

const Callout: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <div
      className={cn(
        "border border-amber-line bg-amber-soft p-5 text-[15px] leading-[1.6] text-ink",
        className
      )}
      {...attr}
    >
      {attr?.children}
    </div>
  );
};

export default Callout;
