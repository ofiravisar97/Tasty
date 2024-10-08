import { ReactNode } from "react";

type Props = {
  button: ReactNode;
};

const ProfileInfoBio = ({ button }: Props) => {
  return (
    <div className="flex flex-col">
      <header className="py-2 flex justify-between items-center border-b-2 border-neutral-200">
        <h1 className="font-semibold">About Me</h1>
        {button}
      </header>
      <p className="min-h-[15rem] flex items-center justify-center font-semibold">
        No Bio
      </p>
    </div>
  );
};

export default ProfileInfoBio;
