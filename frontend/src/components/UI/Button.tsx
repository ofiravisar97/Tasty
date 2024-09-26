import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/utils";

const buttonStyles = cva(
  ["font-semibold rounded-md shadow-md transition hover:opacity-75"],
  {
    variants: {
      variant: {
        default: "bg-primary flex items-center justify-center",
        outline: "border border-primary bg-white text-primary",
      },
      size: {
        default: "py-1 px-2",
        large: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
