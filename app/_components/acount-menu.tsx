import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface Props {
  visible?: boolean;
}

const AccountMenu: React.FC<Props> = ({ visible }) => {
  const { data } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex gap-3 items-center w-full">
          <Image
            src="/default-blue.jpg"
            width={50}
            height={50}
            className="w-8 rounded-md"
            alt="profile image"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: "/auth/login",
            })
          }
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
