"use client";
// Importing necessary modules and components
import { MenuItems, SideIcons } from "../constants/data";
import TeamCard from "./teamCard";
import MenuItem from "./menuItem";
import { useState } from "react";
import Link from "next/link";

// SidebarMobile component definition
export default function SidebarMobile() {
  // State variables for team selection and menu item selection
  const [team, setTeam] = useState(SideIcons[0]);
  const [selectedId, setSelectedId] = useState(1);

  // Function to handle button click events and fetch team data from the API
  const handleButtonClick = async (id: number) => {
    try {
      // Fetching team data based on the provided id
      const response = await fetch(`/api/team/${id}`);
      if (response.ok) {
        // Parsing the response data and updating the state variables
        const data = await response.json();
        setTeam(data);
        setSelectedId(data.id);
      } else {
        console.error("Failed to fetch menu data");
      }
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  // JSX structure for the SidebarMobile component
  return (
    <div className="flex-row h-screen flex w-full  bg-primary border-r border-[#587481]">
      {/* Left section of the mobile sidebar */}
      <div className="p-4 border-r border-[#587481] lg:w-[29%] ">
        {SideIcons.map((icon) => (
          <div
            key={icon.id}
            className={` p-1 w-[64px] h-[64px] rounded-full mt-3 cursor-pointer ${
              icon.id === selectedId
                ? " bg-gradient-to-r from-[#FCE33E] to-[#BD7925] "
                : "border border-[#587481]"
            }`}
            onClick={() => handleButtonClick(icon.id)}
          >
            <div className="rounded-full bg-primary flex justify-center items-center h-full w-full">
              <img src={icon.icon} className="h-10 w-10" alt="Team Icon" />
            </div>
          </div>
        ))}
      </div>
      {/* Right section of the mobile sidebar */}
      <div className="lg:w-[70%] w-full p-3 overflow-y-scroll">
        <div className="flex items-center gap-3 mt-7">
          <img src={team.icon} className="h-10 w-10" alt="Selected Team Icon" />
          <h2 className="text-2xl">{team.name}</h2>
        </div>
        {/* Team card and menu items */}
        <TeamCard />
        <div className="flex-1 mt-3">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {/* Mapping over menu items and rendering them */}
            {MenuItems.map((item) => (
              <div key={item.name}>
                <MenuItem {...item} />
              </div>
            ))}
            {/* Account management section */}
            <div className="pt-20 ">
              <p className="text-[13px]">Account management</p>
              {/* Profile link */}
              <li className="mt-3 hover:bg-[#84F7D8] rounded-[46px]  hover:text-black  text-[#84F7D8] font-medium  brightness-100 ">
                <Link
                  href="/"
                  className="flex items-center p-2 space-x-3 rounded-md hover:brightness-0"
                >
                  <div>
                    <img
                      src="/assets/menu6.svg"
                      alt="Profile Icon"
                      className="h-[24px] w-[24px] "
                    />
                  </div>
                  <span className="brightness-100 ">Profile</span>
                </Link>
              </li>
              {/* Settings link */}
              <li className="mt-3 hover:bg-[#84F7D8] rounded-[46px]  hover:text-black  text-[#84F7D8] font-medium  brightness-100 ">
                <Link
                  href="/"
                  className="flex items-center p-2 space-x-3 rounded-md hover:brightness-0"
                >
                  <div>
                    <img
                      src="/assets/Frame.svg"
                      alt="Settings Icon"
                      className="h-[24px] w-[24px] "
                    />
                  </div>
                  <span className="brightness-100 ">Settings</span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
