import Link from "next/link";
import { MenuItems } from "../constants/data";

interface linkObject {
  icon: string;
  name: string;
}

export default function MenuItem(item: linkObject) {
  return (
    <li className="mt-3 hover:bg-[#84F7D8] rounded-[46px]  hover:text-black  text-[#84F7D8] font-medium  brightness-100 ">
      <Link
        href="/"
        className="flex items-center p-2 space-x-3 rounded-md hover:brightness-0"
      >
        <div>
          <img
            src={item.icon}
            alt="social icon"
            className="h-[24px] w-[24px] "
          />
        </div>
        <span className="brightness-100 ">{item.name}</span>
      </Link>
    </li>
  );
}
