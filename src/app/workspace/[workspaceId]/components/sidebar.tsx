"use client";

import UserButton from "@/features/auth/components/user-button";
import {
  BellIcon,
  BookmarkIcon,
  Ellipsis,
  Home,
  MessagesSquareIcon,
} from "lucide-react";
import SidebarButton from "./sidebar-button";
import WorkspaceSwitcher from "./workspace-switcher";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[70px] h-full bg-neutral-700 flex flex-col gap-y-4 items-center pt-[9px] pb-[8px] text-accent">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessagesSquareIcon} label="DMs" />
      <SidebarButton icon={BellIcon} label="Activity" />
      <SidebarButton icon={BookmarkIcon} label="Later" />
      <SidebarButton icon={Ellipsis} label="More" />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
