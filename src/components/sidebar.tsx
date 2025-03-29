"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  HardHat,
  FileText,
  Users,
  MessageSquare,
  Settings,
  HelpCircle
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarLink({ href, icon, label, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
        active
          ? "bg-subconnect-primary/10 text-subconnect-primary border-l-4 border-subconnect-primary pl-3"
          : "text-subconnect-gray-light hover:bg-subconnect-dark-lighter hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-subconnect-dark border-r border-subconnect-dark-lighter h-screen sticky top-0 overflow-y-auto hidden md:block">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-subconnect-dark-lighter">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-subconnect-primary font-bold text-2xl">Subconnect</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="px-6 py-4 border-b border-subconnect-dark-lighter">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-subconnect-primary flex items-center justify-center text-white">
            JD
          </div>
          <div>
            <h3 className="text-white font-medium">John Doe</h3>
            <p className="text-subconnect-gray-light text-sm">Project Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="px-3 py-4 space-y-1">
        <p className="text-xs uppercase text-subconnect-gray-light font-semibold px-3 mb-2">Main</p>
        <SidebarLink
          href="/dashboard"
          icon={<LayoutDashboard className="h-5 w-5" />}
          label="Dashboard"
          active={pathname === "/dashboard"}
        />
        <SidebarLink
          href="/projects"
          icon={<Building2 className="h-5 w-5" />}
          label="Projects"
          active={pathname === "/projects"}
        />
        <SidebarLink
          href="/tenders"
          icon={<FileText className="h-5 w-5" />}
          label="Tenders"
          active={pathname === "/tenders"}
        />
        <SidebarLink
          href="/teams"
          icon={<HardHat className="h-5 w-5" />}
          label="Teams"
          active={pathname === "/teams"}
        />

        <div className="border-t border-subconnect-dark-lighter my-4"></div>

        <p className="text-xs uppercase text-subconnect-gray-light font-semibold px-3 mb-2">Connect</p>
        <SidebarLink
          href="/network"
          icon={<Users className="h-5 w-5" />}
          label="Network"
          active={pathname === "/network"}
        />
        <SidebarLink
          href="/messages"
          icon={<MessageSquare className="h-5 w-5" />}
          label="Messages"
          active={pathname === "/messages"}
        />

        <div className="border-t border-subconnect-dark-lighter my-4"></div>

        <SidebarLink
          href="/settings"
          icon={<Settings className="h-5 w-5" />}
          label="Settings"
          active={pathname === "/settings"}
        />
        <SidebarLink
          href="/help"
          icon={<HelpCircle className="h-5 w-5" />}
          label="Help & Support"
          active={pathname === "/help"}
        />
      </nav>

      {/* Upgrade Banner */}
      <div className="px-6 py-4 mt-auto">
        <div className="bg-gradient-to-r from-subconnect-primary to-blue-600 rounded-lg p-4 text-white">
          <h4 className="font-semibold">Upgrade to Pro</h4>
          <p className="text-sm opacity-90 mt-1">Get more features and premium support</p>
          <button className="mt-3 bg-white text-subconnect-primary py-1.5 px-3 rounded-md text-sm font-medium">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
