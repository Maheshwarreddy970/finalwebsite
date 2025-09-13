import * as React from "react";
import { cn } from "@/lib/utils";

const MinimalCard = React.forwardRef(({ className, children, ...props }) => (
  <div

    className={cn(
      "rounded-[24px]  relative dark:bg-neutral-800 bg-neutral-50 p-2  shadow-md  transition-all duration-300  ease-in-out ",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
MinimalCard.displayName = "MinimalCard";

const MinimalCardImage = React.forwardRef(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-60 w-full bg-white rounded-[20px]     ",
      className
    )}
    {...props}
  >
    <img
      src={src}
      alt={alt}
      className="rounded-[16px]  object-cover absolute h-full w-full inset-0  "
    />
    <div className="absolute inset-0 rounded-[16px]">
      <div
        className={cn(
          "absolute inset-0 rounded-[16px]",
          "shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)]",
          "dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[16px]",
          "dark:shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]"
        )}
      />
    </div>
  </div>
));
MinimalCardImage.displayName = "MinimalCardImage";

const MinimalCardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg mt-2 font-semibold leading-tight px-3", className)}
    {...props}
  />
));
MinimalCardTitle.displayName = "MinimalCardTitle";

const MinimalCardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-500 pb-2 px-1", className)}
    {...props}
  />
));
MinimalCardDescription.displayName = "MinimalCardDescription";

const MinimalCardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
MinimalCardContent.displayName = "MinimalCardContent";

const MinimalCardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
MinimalCardFooter.displayName = "MinimalCardFooter";

export {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
};

export default MinimalCard;
