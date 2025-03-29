"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { TenderCard } from "@/components/tender-card";
import { Search, Plus, Filter, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function TendersPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample data for demonstration purposes
  const tenders = [
    {
      id: "1",
      title: "Commercial Building HVAC System",
      company: "Metro Construction Inc.",
      location: "Chicago, IL",
      dueDate: "Apr 28, 2023",
      value: "$1.2M - $1.5M",
      status: "open",
      category: "HVAC Systems",
    },
    {
      id: "2",
      title: "Residential Complex Plumbing",
      company: "HomeBuilders Co.",
      location: "San Francisco, CA",
      dueDate: "May 15, 2023",
      value: "$750K - $950K",
      status: "draft",
      category: "Plumbing",
    },
    {
      id: "3",
      title: "Highway Bridge Construction",
      company: "RoadWorks Engineering",
      location: "Denver, CO",
      dueDate: "Jun 02, 2023",
      value: "$4.5M - $5.2M",
      status: "open",
      category: "Infrastructure",
    },
    {
      id: "4",
      title: "School Renovation Project",
      company: "Public Works Department",
      location: "Portland, OR",
      dueDate: "Mar 15, 2023",
      value: "$2.1M - $2.8M",
      status: "closed",
      category: "Renovation",
    },
    {
      id: "5",
      title: "Shopping Mall Electrical Systems",
      company: "ElectraTech Solutions",
      location: "Dallas, TX",
      dueDate: "Jul 22, 2023",
      value: "$1.8M - $2.2M",
      status: "open",
      category: "Electrical",
    },
    {
      id: "6",
      title: "Hospital Wing Construction",
      company: "MediConstruct Services",
      location: "Boston, MA",
      dueDate: "Aug 10, 2023",
      value: "$8.5M - $10.2M",
      status: "awarded",
      category: "Healthcare",
    },
  ];

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Tenders</h1>
          <p className="text-subconnect-gray-light mt-1">
            Browse and manage tenders from around the industry
          </p>
        </div>
        <Link
          href="/tenders/new"
          className="subconnect-btn-secondary flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          <span>New Tender</span>
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
              placeholder="Search tenders by title, company, location..."
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
          </div>
        </div>

        {filterOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-subconnect-dark-lighter">
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Status</label>
              <select className="subconnect-input w-full">
                <option value="">All Statuses</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="awarded">Awarded</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Category</label>
              <select className="subconnect-input w-full">
                <option value="">All Categories</option>
                <option value="hvac">HVAC Systems</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="renovation">Renovation</option>
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
                <option value="co">Colorado</option>
              </select>
            </div>
            <div>
              <label className="block text-subconnect-gray-light text-sm mb-1">Value Range</label>
              <select className="subconnect-input w-full">
                <option value="">Any Value</option>
                <option value="0-500k">Under $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m+">Over $5M</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Tender Listing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tenders.map((tender) => (
          <TenderCard
            key={tender.id}
            id={tender.id}
            title={tender.title}
            company={tender.company}
            location={tender.location}
            dueDate={tender.dueDate}
            value={tender.value}
            status={tender.status as any}
            category={tender.category}
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
