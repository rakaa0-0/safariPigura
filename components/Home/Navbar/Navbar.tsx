import SearchBox from "@/components/helper/SearchBox";
import ShoppingCart from "@/components/helper/ShoppingCart";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { HeartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavbarPage = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-[#F5F5F5]  shadow-sm ">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
          <Image
            src="/icon/Logo_tulisan.png"
            alt="Logo"
            width={150}
            height={150}
            draggable={false}
          />
        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />
          {/* ShoppingCartButton */}
          <ShoppingCart />
          {/* User button */}

          {/* SigIn User */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* Not Sigin */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
