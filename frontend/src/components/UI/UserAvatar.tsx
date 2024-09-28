import { cva, VariantProps } from "class-variance-authority";
import { ImgHTMLAttributes } from "react";
import { cn } from "../../utils/utils";
import placeholder from "../../assets/UserPlaceholder.svg";

const avatarStyles = cva(["overflow-hidden border-2 border-primary"], {
  variants: {
    variant: {
      rounded: "rounded-full aspect-square max-w-[full]",
    },
    size: {
      small: "min-w-[2.5rem]",
    },
    clickable: {
      default: "",
      clickable: "cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "rounded",
    size: "small",
  },
});

type Props = VariantProps<typeof avatarStyles> &
  ImgHTMLAttributes<HTMLImageElement>;

const UserAvatar = ({
  variant,
  className,
  size,
  clickable,
  src,
  ...props
}: Props) => {
  return (
    <div>
      <img
        {...props}
        alt="User Profile Avatar"
        src={src || placeholder}
        className={cn(avatarStyles({ variant, size, clickable }), className)}
      />
    </div>
  );
};

export default UserAvatar;
