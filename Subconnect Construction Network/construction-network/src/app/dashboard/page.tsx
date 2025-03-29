"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { StatCard } from "@/components/stat-card";
import { Briefcase, Building2, FileText, Users, DollarSign, Cpu, Calendar, Bell } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
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

      {/* Dashboard main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Performance */}
          <div className="subconnect-card p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Project Performance</h2>
              <select className="subconnect-input py-1 text-sm">
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div className="h-64 bg-subconnect-dark-lighter rounded-lg flex items-center justify-center">
              <p className="text-subconnect-gray-light">Chart placeholder - Project Performance</p>
            </div>
          </div>

          {/* Financial Overview */}
          <div className="subconnect-card p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Financial Overview</h2>
              <Link href="/finance" className="text-subconnect-primary text-sm hover:underline">
                View Details
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-subconnect-dark-lighter p-4 rounded-lg">
                <div className="flex items-center text-subconnect-primary mb-1">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Revenue</span>
                </div>
                <div className="text-xl font-semibold text-white">$1.2M</div>
                <div className="text-xs text-subconnect-gray-light mt-1">+12% from last month</div>
              </div>
              <div className="bg-subconnect-dark-lighter p-4 rounded-lg">
                <div className="flex items-center text-subconnect-secondary mb-1">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Expenses</span>
                </div>
                <div className="text-xl font-semibold text-white">$850K</div>
                <div className="text-xs text-subconnect-gray-light mt-1">+5% from last month</div>
              </div>
              <div className="bg-subconnect-dark-lighter p-4 rounded-lg">
                <div className="flex items-center text-subconnect-success mb-1">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Profit</span>
                </div>
                <div className="text-xl font-semibold text-white">$350K</div>
                <div className="text-xs text-subconnect-gray-light mt-1">+8% from last month</div>
              </div>
            </div>
            <div className="h-40 bg-subconnect-dark-lighter rounded-lg flex items-center justify-center">
              <p className="text-subconnect-gray-light">Chart placeholder - Financial Trends</p>
            </div>
          </div>

          {/* Resource Utilization */}
          <div className="subconnect-card p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Resource Utilization</h2>
              <Link href="/resources" className="text-subconnect-primary text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-subconnect-gray-light">Equipment</span>
                  <span className="text-white">78%</span>
                </div>
                <div className="w-full bg-subconnect-dark-lighter rounded-full h-2">
                  <div className="bg-subconnect-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-subconnect-gray-light">Labor</span>
                  <span className="text-white">92%</span>
                </div>
                <div className="w-full bg-subconnect-dark-lighter rounded-full h-2">
                  <div className="bg-subconnect-secondary h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-subconnect-gray-light">Materials</span>
                  <span className="text-white">64%</span>
                </div>
                <div className="w-full bg-subconnect-dark-lighter rounded-full h-2">
                  <div className="bg-subconnect-success h-2 rounded-full" style={{ width: "64%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-subconnect-gray-light">Budget</span>
                  <span className="text-white">85%</span>
                </div>
                <div className="w-full bg-subconnect-dark-lighter rounded-full h-2">
                  <div className="bg-subconnect-danger h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="subconnect-card p-5">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/projects/new" className="bg-subconnect-dark-lighter hover:bg-subconnect-dark-card p-3 rounded-lg flex flex-col items-center text-center">
                <Briefcase className="h-6 w-6 text-subconnect-primary mb-2" />
                <span className="text-white text-sm">New Project</span>
              </Link>
              <Link href="/tenders/new" className="bg-subconnect-dark-lighter hover:bg-subconnect-dark-card p-3 rounded-lg flex flex-col items-center text-center">
                <FileText className="h-6 w-6 text-subconnect-secondary mb-2" />
                <span className="text-white text-sm">New Tender</span>
              </Link>
              <Link href="/reports" className="bg-subconnect-dark-lighter hover:bg-subconnect-dark-card p-3 rounded-lg flex flex-col items-center text-center">
                <Cpu className="h-6 w-6 text-subconnect-danger mb-2" />
                <span className="text-white text-sm">Generate Report</span>
              </Link>
              <Link href="/schedule" className="bg-subconnect-dark-lighter hover:bg-subconnect-dark-card p-3 rounded-lg flex flex-col items-center text-center">
                <Calendar className="h-6 w-6 text-subconnect-success mb-2" />
                <span className="text-white text-sm">Schedule</span>
              </Link>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="subconnect-card p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Notifications</h2>
              <Link href="/notifications" className="text-subconnect-primary text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-subconnect-primary/10 text-subconnect-primary">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white text-sm">New bid for <span className="text-subconnect-primary">Commercial HVAC System</span></p>
                  <p className="text-subconnect-gray text-xs">15 minutes ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-subconnect-danger/10 text-subconnect-danger">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white text-sm">Deadline approaching for <span className="text-subconnect-primary">Riverside Apartments</span></p>
                  <p className="text-subconnect-gray text-xs">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-subconnect-secondary/10 text-subconnect-secondary">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white text-sm">Project status update for <span className="text-subconnect-primary">Downtown Office Tower</span></p>
                  <p className="text-subconnect-gray text-xs">Yesterday</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-subconnect-success/10 text-subconnect-success">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white text-sm">New team member joined <span className="text-subconnect-primary">Metro Station Upgrade</span></p>
                  <p className="text-subconnect-gray text-xs">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="subconnect-card p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Upcoming Deadlines</h2>
              <Link href="/calendar" className="text-subconnect-primary text-sm hover:underline">
                View Calendar
              </Link>
            </div>
            <div className="space-y-3">
              <div className="bg-subconnect-dark-lighter p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium">Bid Submission</h3>
                    <p className="text-subconnect-gray-light text-sm">Hospital Wing Construction</p>
                  </div>
                  <div className="text-subconnect-danger text-sm font-medium">
                    Today
                  </div>
                </div>
              </div>
              <div className="bg-subconnect-dark-lighter p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium">Progress Report</h3>
                    <p className="text-subconnect-gray-light text-sm">Downtown Office Tower</p>
                  </div>
                  <div className="text-subconnect-secondary text-sm font-medium">
                    Tomorrow
                  </div>
                </div>
              </div>
              <div className="bg-subconnect-dark-lighter p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium">Site Inspection</h3>
                    <p className="text-subconnect-gray-light text-sm">Riverside Apartments</p>
                  </div>
                  <div className="text-subconnect-gray-light text-sm font-medium">
                    In 3 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
