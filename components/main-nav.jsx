import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import { Plus } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const MainNav = () => {
  return (
    <nav className="w-full flex justify-between p-2">
      <Menubar className="border-none">
        <MenubarMenu>
          <MenubarTrigger asChild className="hover:text-slate-700">
            <Link href={"/"} className="gap-2">
              Tickets
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2">
        <Link href={"https://basic-issue-ticketing.vercel.app/ticket/new"}>
          <Plus className="w-6 h-6" />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default MainNav;
