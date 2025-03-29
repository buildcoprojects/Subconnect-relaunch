"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { StatCard } from "@/components/stat-card";
import { ProjectCard } from "@/components/project-card";
import { TenderCard } from "@/components/tender-card";
import { Briefcase, Building2, FileText, Users, Search, Plus, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-subconnect-gray-light mt-1">
          Welcome back, John! Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Projects"
          value={12}
          icon={<Briefcase className="h-5 w-5" />}
          change={{ value: 8.2, type: "increase" }}
          color="primary"
        />
        <StatCard
          title="Total Companies"
          value={85}
          icon={<Building2 className="h-5 w-5" />}
          change={{ value: 12.5, type: "increase" }}
          color="secondary"
        />
        <StatCard
          title="Open Tenders"
          value={24}
          icon={<FileText className="h-5 w-5" />}
          change={{ value: 3.7, type: "decrease" }}
          color="danger"
        />
        <StatCard
          title="Team Members"
          value={42}
          icon={<Users className="h-5 w-5" />}
          change={{ value: 4.1, type: "increase" }}
          color="success"
        />
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
          <div className="flex space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-subconnect-gray-light" />
              </div>
              <input
                type="text"
                className="subconnect-input w-48 pl-10 py-1.5 text-sm"
                placeholder="Search projects..."
              />
            </div>
            <Link
              href="/projects/new"
              className="subconnect-btn-primary flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              <span>New Project</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            id="1"
            title="Downtown Office Tower"
            company="ABC Construction Ltd."
            location="New York, NY"
            date="Jan 15, 2023 - Dec 10, 2024"
            status="in-progress"
            teamCount={8}
            progress={68}
          />
          <ProjectCard
            id="2"
            title="Riverside Apartments"
            company="Apex Developers"
            location="Miami, FL"
            date="Mar 22, 2023 - Aug 30, 2024"
            status="pending"
            teamCount={5}
            progress={32}
          />
          <ProjectCard
            id="3"
            title="Central Park Renovation"
            company="GreenSpace Contractors"
            location="Boston, MA"
            date="Nov 05, 2022 - Apr 15, 2023"
            status="completed"
            teamCount={12}
            progress={100}
          />
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/projects"
            className="text-subconnect-primary hover:underline inline-flex items-center"
          >
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Tenders Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Tenders</h2>
          <div className="flex space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-subconnect-gray-light" />
              </div>
              <input
                type="text"
                className="subconnect-input w-48 pl-10 py-1.5 text-sm"
                placeholder="Search tenders..."
              />
            </div>
            <Link
              href="/tenders/new"
              className="subconnect-btn-secondary flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              <span>New Tender</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TenderCard
            id="1"
            title="Commercial Building HVAC System"
            company="Metro Construction Inc."
            location="Chicago, IL"
            dueDate="Apr 28, 2023"
            value="$1.2M - $1.5M"
            status="open"
            category="HVAC Systems"
          />
          <TenderCard
            id="2"
            title="Residential Complex Plumbing"
            company="HomeBuilders Co."
            location="San Francisco, CA"
            dueDate="May 15, 2023"
            value="$750K - $950K"
            status="draft"
            category="Plumbing"
          />
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/tenders"
            className="text-subconnect-primary hover:underline inline-flex items-center"
          >
            <span>View All Tenders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="subconnect-card p-5">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-subconnect-primary flex items-center justify-center text-white mr-3 mt-1">
              JD
            </div>
            <div>
              <p className="text-white">
                <span className="font-medium">John Doe</span> commented on <span className="text-subconnect-primary">Downtown Office Tower</span>
              </p>
              <p className="text-subconnect-gray-light text-sm mt-1">
                "The updated designs look great. Let's proceed with the next phase."
              </p>
              <p className="text-subconnect-gray text-xs mt-2">2 hours ago</p>
            </div>
          </div>

          <div className="border-t border-subconnect-dark-lighter my-3"></div>

          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-subconnect-secondary flex items-center justify-center text-white mr-3 mt-1">
              SM
            </div>
            <div>
              <p className="text-white">
                <span className="font-medium">Sarah Miller</span> uploaded new documents to <span className="text-subconnect-primary">Riverside Apartments</span>
              </p>
              <div className="flex space-x-2 mt-1">
                <div className="bg-subconnect-dark-lighter px-3 py-1 rounded text-sm text-subconnect-gray-light flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>Floor Plans.pdf</span>
                </div>
                <div className="bg-subconnect-dark-lighter px-3 py-1 rounded text-sm text-subconnect-gray-light flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>Budget.xlsx</span>
                </div>
              </div>
              <p className="text-subconnect-gray text-xs mt-2">Yesterday at 4:30 PM</p>
            </div>
          </div>

          <div className="border-t border-subconnect-dark-lighter my-3"></div>

          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-subconnect-danger flex items-center justify-center text-white mr-3 mt-1">
              TK
            </div>
            <div>
              <p className="text-white">
                <span className="font-medium">Tom Keller</span> created a new tender <span className="text-subconnect-primary">Commercial Building HVAC System</span>
              </p>
              <p className="text-subconnect-gray text-xs mt-2">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
