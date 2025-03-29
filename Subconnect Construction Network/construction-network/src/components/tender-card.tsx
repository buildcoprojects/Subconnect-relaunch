"use client";

import Link from "next/link";
import { Building, MapPin, Calendar, FileText, DollarSign } from "lucide-react";

interface TenderCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  dueDate: string;
  value: string;
  status: "open" | "closed" | "awarded" | "draft";
  category: string;
}

export function TenderCard({
  id,
  title,
  company,
  location,
  dueDate,
  value,
  status,
  category,
}: TenderCardProps) {
  const statusColors = {
    "open": "bg-subconnect-success/20 text-subconnect-success",
    "closed": "bg-subconnect-gray/20 text-subconnect-gray-light",
    "awarded": "bg-subconnect-secondary/20 text-subconnect-secondary",
    "draft": "bg-subconnect-primary/20 text-subconnect-primary",
  };

  const statusText = {
    "open": "Open",
    "closed": "Closed",
    "awarded": "Awarded",
    "draft": "Draft",
  };

  return (
    <div className="subconnect-card p-5 hover:border-subconnect-primary transition-colors">
      <div className="flex justify-between">
        <div>
          <Link href={`/tenders/${id}`}>
            <h3 className="text-white font-medium text-lg hover:text-subconnect-primary transition-colors">
              {title}
            </h3>
          </Link>
          <div className="flex items-center mt-1">
            <Building className="h-4 w-4 text-subconnect-gray-light mr-1" />
            <p className="text-subconnect-gray-light text-sm">{company}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {statusText[status]}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex items-center text-subconnect-gray-light">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center text-subconnect-gray-light">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">Due: {dueDate}</span>
        </div>
        <div className="flex items-center text-subconnect-gray-light">
          <FileText className="h-4 w-4 mr-2" />
          <span className="text-sm">{category}</span>
        </div>
        <div className="flex items-center text-white">
          <DollarSign className="h-4 w-4 mr-2 text-subconnect-secondary" />
          <span className="text-sm font-medium">{value}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-subconnect-dark-lighter px-2 py-1 rounded text-subconnect-gray-light">
            12 Documents
          </span>
          <span className="text-xs bg-subconnect-dark-lighter px-2 py-1 rounded text-subconnect-gray-light">
            8 Bidders
          </span>
        </div>

        <div className="flex space-x-2">
          <button className="text-subconnect-primary text-sm hover:underline">
            View Details
          </button>
          {status === "open" && (
            <button className="subconnect-btn-primary text-sm py-1 px-3">
              Submit Bid
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
