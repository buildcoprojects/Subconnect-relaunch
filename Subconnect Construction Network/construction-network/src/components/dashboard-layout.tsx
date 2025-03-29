"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "./sidebar";
import { SubconnectHeader } from "./subconnect-header";
import { Menu, X } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div className="bg-subconnect-dark min-h-screen flex flex-col">
      {/* Mobile Header */}
      <SubconnectHeader />

      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <Sidebar />

        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          className="md:hidden fixed bottom-6 right-6 z-50 bg-subconnect-primary text-white p-3 rounded-full shadow-lg"
        >
          {showMobileSidebar ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Sidebar - Only visible on small screens when toggled */}
        {showMobileSidebar && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setShowMobileSidebar(false)}
            ></div>
            <div className="fixed inset-y-0 left-0 w-64 bg-subconnect-dark border-r border-subconnect-dark-lighter overflow-y-auto">
              <div className="p-4 flex justify-between items-center border-b border-subconnect-dark-lighter">
                <span className="text-subconnect-primary font-bold text-2xl">Subconnect</span>
                <button
                  onClick={() => setShowMobileSidebar(false)}
                  className="text-subconnect-gray-light"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
