"use client";

import { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  color?: "primary" | "secondary" | "danger" | "success" | "neutral";
}

export function StatCard({ title, value, icon, change, color = "primary" }: StatCardProps) {
  const colorClasses = {
    primary: "bg-subconnect-primary/10 text-subconnect-primary",
    secondary: "bg-subconnect-secondary/10 text-subconnect-secondary",
    danger: "bg-subconnect-danger/10 text-subconnect-danger",
    success: "bg-subconnect-success/10 text-subconnect-success",
    neutral: "bg-subconnect-gray/10 text-subconnect-gray-light",
  };

  const iconClass = colorClasses[color];

  return (
    <div className="subconnect-stat">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-subconnect-gray-light text-sm font-medium">{title}</h3>
          <div className="text-2xl font-semibold text-white mt-1">{value}</div>
        </div>
        <div className={`p-2 rounded-lg ${iconClass}`}>
          {icon}
        </div>
      </div>

      {change && (
        <div className="mt-2 flex items-center">
          {change.type === "increase" ? (
            <>
              <ArrowUpRight className="h-4 w-4 text-subconnect-success mr-1" />
              <span className="text-subconnect-success text-sm">
                {change.value}%
              </span>
            </>
          ) : (
            <>
              <ArrowDownRight className="h-4 w-4 text-subconnect-danger mr-1" />
              <span className="text-subconnect-danger text-sm">
                {change.value}%
              </span>
            </>
          )}
          <span className="text-subconnect-gray-light text-sm ml-1">vs last month</span>
        </div>
      )}
    </div>
  );
}
