"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Briefcase,
  Users,
  Bell,
  MessageSquare,
  Menu,
  X,
  Search,
  User,
  LogOut
} from "lucide-react";

export function SubconnectHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-subconnect-dark sticky top-0 z-50 border-b border-subconnect-dark-lighter">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-subconnect-primary font-bold text-2xl">Subconnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="flex flex-col items-center text-subconnect-gray-light hover:text-subconnect-primary transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              href="/projects"
              className="flex flex-col items-center text-subconnect-gray-light hover:text-subconnect-primary transition-colors"
            >
              <Briefcase className="h-5 w-5" />
              <span className="text-xs mt-1">Projects</span>
            </Link>
            <Link
              href="/network"
              className="flex flex-col items-center text-subconnect-gray-light hover:text-subconnect-primary transition-colors"
            >
              <Users className="h-5 w-5" />
              <span className="text-xs mt-1">Network</span>
            </Link>
            <Link
              href="/tenders"
              className="flex flex-col items-center text-subconnect-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
              <span className="text-xs mt-1">Tenders</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative mx-4 flex-1 max-w-md">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-subconnect-gray-light" />
              </div>
              <input
                type="text"
                className="subconnect-input w-full pl-10"
                placeholder="Search companies, projects or people..."
              />
            </div>
          </div>

          {/* User actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-subconnect-gray-light hover:text-white p-2 rounded-full hover:bg-subconnect-dark-lighter">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-subconnect-gray-light hover:text-white p-2 rounded-full hover:bg-subconnect-dark-lighter">
              <MessageSquare className="h-5 w-5" />
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-white hover:text-subconnect-primary transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-subconnect-primary flex items-center justify-center text-white">
                  JD
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-subconnect-dark-card rounded-md shadow-xl border border-subconnect-dark-lighter">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-white hover:bg-subconnect-dark-lighter flex items-center"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Your Profile
                  </Link>
                  <div className="border-t border-subconnect-dark-lighter my-1"></div>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-subconnect-danger hover:bg-subconnect-dark-lighter flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-subconnect-gray-light p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-subconnect-dark-lighter">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-subconnect-gray-light" />
              </div>
              <input
                type="text"
                className="subconnect-input w-full pl-10"
                placeholder="Search..."
              />
            </div>

            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="flex items-center text-subconnect-gray-light p-2 rounded-md hover:bg-subconnect-dark-lighter"
              >
                <Home className="h-5 w-5 mr-3" />
                <span>Home</span>
              </Link>
              <Link
                href="/projects"
                className="flex items-center text-subconnect-gray-light p-2 rounded-md hover:bg-subconnect-dark-lighter"
              >
                <Briefcase className="h-5 w-5 mr-3" />
                <span>Projects</span>
              </Link>
              <Link
                href="/network"
                className="flex items-center text-subconnect-gray-light p-2 rounded-md hover:bg-subconnect-dark-lighter"
              >
                <Users className="h-5 w-5 mr-3" />
                <span>Network</span>
              </Link>
              <Link
                href="/tenders"
                className="flex items-center text-subconnect-primary p-2 rounded-md hover:bg-subconnect-dark-lighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-3"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
                <span>Tenders</span>
              </Link>
              <div className="border-t border-subconnect-dark-lighter pt-3">
                <Link
                  href="/notifications"
                  className="flex items-center text-subconnect-gray-light p-2 rounded-md hover:bg-subconnect-dark-lighter"
                >
                  <Bell className="h-5 w-5 mr-3" />
                  <span>Notifications</span>
                </Link>
                <Link
                  href="/messages"
                  className="flex items-center text-subconnect-gray-light p-2 rounded-md hover:bg-subconnect-dark-lighter"
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  <span>Messages</span>
                </Link>
              </div>
              <div className="border-t border-subconnect-dark-lighter pt-3">
                <Link
                  href="/profile"
                  className="flex items-center text-white p-2 rounded-md hover:bg-subconnect-dark-lighter"
                >
                  <div className="h-8 w-8 rounded-full bg-subconnect-primary flex items-center justify-center text-white mr-3">
                    JD
                  </div>
                  <span>John Doe</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
