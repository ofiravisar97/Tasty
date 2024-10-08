import { ReactNode } from "react";

type Props = {
  avatar: ReactNode;
  content: ReactNode;
};

const ProfileInfoHeader = ({ avatar, content }: Props) => {
  return (
    <header className="flex items-center gap-4  w-full h-fit p-2">
      {avatar}
      {content}
    </header>
  );
};

export default ProfileInfoHeader;
