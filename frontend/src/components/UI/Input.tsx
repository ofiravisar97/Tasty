import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../utils/utils";

const inputStyles = cva(["p-2"], {
  variants: {
    variant: {
      default: "border-b-2 border-natural-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Props = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles>;

const Input = ({ variant, name, className, ...props }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <h4 className="font-semibold">{name}</h4>
      <input
        name={name}
        {...props}
        className={cn(inputStyles({ variant }), className)}
      />
    </div>
  );
};

export default Input;
