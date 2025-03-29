"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProjectCard } from "@/components/project-card";
import { Search, Plus, Filter, SlidersHorizontal, GridIcon, List } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample data for demonstration purposes
  const projects = [
    {
      id: "1",
      title: "Downtown Office Tower",
      company: "ABC Construction Ltd.",
      location: "New York, NY",
      date: "Jan 15, 2023 - Dec 10, 2024",
      status: "in-progress",
      teamCount: 8,
      progress: 68,
    },
    {
      id: "2",
      title: "Riverside Apartments",
      company: "Apex Developers",
      location: "Miami, FL",
      date: "Mar 22, 2023 - Aug 30, 2024",
      status: "pending",
      teamCount: 5,
      progress: 32,
    },
    {
      id: "3",
      title: "Central Park Renovation",
      company: "GreenSpace Contractors",
      location: "Boston, MA",
      date: "Nov 05, 2022 - Apr 15, 2023",
      status: "completed",
      teamCount: 12,
      progress: 100,
    },
    {
      id: "4",
      title: "Harbor Shopping Complex",
      company: "Urban Retail Solutions",
      location: "Seattle, WA",
      date: "Apr 10, 2023 - Sep 30, 2024",
      status: "in-progress",
      teamCount: 15,
      progress: 42,
    },
    {
      id: "5",
      title: "Metro Station Upgrade",
      company: "Transit Infrastructure Inc.",
      location: "Washington, DC",
      date: "Feb 01, 2023 - Jun 15, 2024",
      status: "on-hold",
      teamCount: 10,
      progress: 25,
    },
    {
      id: "6",
      title: "Beachfront Resort",
      company: "Coastal Developments",
      location: "San Diego, CA",
      date: "May 20, 2023 - Nov 30, 2024",
      status: "pending",
      teamCount: 7,
      progress: 18,
    },
  ];

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Projects</h1>
          <p className="text-subconnect-gray-light mt-1">
            Manage and track all your construction projects
          </p>
        </div>
        <Link
          href="/projects/new"
          className="subconnect-btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          <span>New Project</span>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="subconnect-card p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-subconnect-gray-light" />
            </div>
            <input
              type="text"
              className="subconnect-input w-full pl-10"
              placeholder="Search projects by title, company, location..."
            />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="subconnect-btn-outline flex items-center"
            >
              <Filter className="h-4 w-4 mr-1" />
              <span>Filters</span>
            </button>
            <button className="subconnect-btn-outline flex items-center">
              <SlidersHorizontal className="h-4 w-4 mr-1" />
              <span>Sort</span>
            </button>
            <div className="bg-subconnect-dark-lighter rounded-md flex">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-l-md ${viewMode === "grid" ? "bg-subconnect-primary text-white" : "text-subconnect-gray-light"}`}
              >
                <GridIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-r-md ${viewMode === "list" ? "bg-subconnect-primary text-white" : "text-subconnect-gray-light"}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {filterOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-subconnect-dark-lighter">
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Status</label>
              <select className="subconnect-input w-full">
                <option value="">All Statuses</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="on-hold">On Hold</option>
              </select>
            </div>
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Location</label>
              <select className="subconnect-input w-full">
                <option value="">All Locations</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
                <option value="fl">Florida</option>
                <option value="ma">Massachusetts</option>
              </select>
            </div>
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Team Size</label>
              <select className="subconnect-input w-full">
                <option value="">Any Size</option>
                <option value="small">Small (1-5)</option>
                <option value="medium">Medium (6-10)</option>
                <option value="large">Large (11+)</option>
              </select>
            </div>
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Progress</label>
              <select className="subconnect-input w-full">
                <option value="">Any Progress</option>
                <option value="early">Just Started (0-25%)</option>
                <option value="mid">In Progress (26-75%)</option>
                <option value="late">Near Completion (76-99%)</option>
                <option value="complete">Completed (100%)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Project Listing */}
      <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4`}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            company={project.company}
            location={project.location}
            date={project.date}
            status={project.status as any}
            teamCount={project.teamCount}
            progress={project.progress}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-1">
          <button className="subconnect-btn-outline px-3 py-1">Previous</button>
          <button className="h-8 w-8 bg-subconnect-primary text-white rounded-md flex items-center justify-center">1</button>
          <button className="h-8 w-8 bg-subconnect-dark-lighter text-white rounded-md flex items-center justify-center hover:bg-subconnect-dark-card">2</button>
          <button className="h-8 w-8 bg-subconnect-dark-lighter text-white rounded-md flex items-center justify-center hover:bg-subconnect-dark-card">3</button>
          <span className="text-subconnect-gray-light px-1">...</span>
          <button className="h-8 w-8 bg-subconnect-dark-lighter text-white rounded-md flex items-center justify-center hover:bg-subconnect-dark-card">8</button>
          <button className="subconnect-btn-outline px-3 py-1">Next</button>
        </nav>
      </div>
    </DashboardLayout>
  );
}
