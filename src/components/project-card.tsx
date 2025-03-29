"use client";

import Link from "next/link";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  status: "in-progress" | "completed" | "pending" | "on-hold";
  teamCount: number;
  progress: number;
  imageUrl?: string;
}

export function ProjectCard({
  id,
  title,
  company,
  location,
  date,
  status,
  teamCount,
  progress,
  imageUrl,
}: ProjectCardProps) {
  const statusColors = {
    "in-progress": "bg-subconnect-primary/20 text-subconnect-primary",
    "completed": "bg-subconnect-success/20 text-subconnect-success",
    "pending": "bg-subconnect-secondary/20 text-subconnect-secondary",
    "on-hold": "bg-subconnect-danger/20 text-subconnect-danger",
  };

  const statusText = {
    "in-progress": "In Progress",
    "completed": "Completed",
    "pending": "Pending",
    "on-hold": "On Hold",
  };

  return (
    <div className="subconnect-card p-5 hover:border-subconnect-primary transition-colors">
      <div className="flex justify-between">
        <div>
          <Link href={`/projects/${id}`}>
            <h3 className="text-white font-medium text-lg hover:text-subconnect-primary transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-subconnect-gray-light mt-1">{company}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {statusText[status]}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-subconnect-gray-light">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center text-subconnect-gray-light">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-subconnect-gray-light">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-sm">{teamCount} Team Members</span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between mb-1">
          <span className="text-white text-sm">Progress</span>
          <span className="text-white text-sm font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-subconnect-dark-lighter rounded-full h-2">
          <div
            className="bg-subconnect-primary h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex -space-x-2">
          {/* Placeholder for team avatars */}
          <div className="h-8 w-8 rounded-full bg-subconnect-primary flex items-center justify-center text-white text-xs border-2 border-subconnect-dark-card">JD</div>
          <div className="h-8 w-8 rounded-full bg-subconnect-secondary flex items-center justify-center text-white text-xs border-2 border-subconnect-dark-card">TK</div>
          <div className="h-8 w-8 rounded-full bg-subconnect-danger flex items-center justify-center text-white text-xs border-2 border-subconnect-dark-card">MS</div>
          {teamCount > 3 && (
            <div className="h-8 w-8 rounded-full bg-subconnect-dark-lighter flex items-center justify-center text-white text-xs border-2 border-subconnect-dark-card">
              +{teamCount - 3}
            </div>
          )}
        </div>

        <div className="flex items-center text-subconnect-gray-light">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-xs">Updated 2d ago</span>
        </div>
      </div>
    </div>
  );
}
