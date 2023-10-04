"use client";
import { useState } from "react";
import { HeaderLinks } from "../constants/data";
import DrawerMob from "./drawer";
interface linkObject {
  icon: string;
  path: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className=" border-[#587481] border-b bg-primary fixed w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a className="flex items-end">
          <img
            src="/assets/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <div className="lg:hidden">
            <img
              src="/assets/ham.svg"
              alt="ham"
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </a>
        <div className="lg:flex items-center gap-4 hidden">
          {HeaderLinks.map((link: linkObject) => (
            <div key={link.path}>
              <img
                src={link.icon}
                alt="social icon"
                className="h-[24px] w-[24px]"
              />
            </div>
          ))}
        </div>
      </div>
      <DrawerMob setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
}
