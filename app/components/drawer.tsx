import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SideBarMobile from "./sidebarMobile";

type DrawerProps = {
  setIsOpen: Function;
  isOpen: boolean;
};

export default function DrawerMob({ setIsOpen, isOpen }: DrawerProps) {
  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        overlayColor="no"
        size="80%"
      >
        <SideBarMobile />
      </Drawer>
    </>
  );
}
