"use client";
import SettingsHeader from "@/components/Layout/SettingsHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const settings = [
  {
    title: "General Settings",
    path: "/settings/general-settings",
  },
  {
    title: "Profile Settings",
    path: "/settings/profile-settings",
  },
  {
    title: "Company Settings",
    path: "/settings/company-settings",
  },
  {
    title: "Notification Settings",
    path: "/settings/notification-settings",
  },
  {
    title: "Privacy & Security",
    path: "/settings/privacy-and-security-settings",
  },
  {
    title: "Integrations",
    path: "/settings/integration-settings",
  },
];

export default function SettingsLayout({ children }) {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <div>
      <SettingsHeader />
      <nav className="flex flex-wrap space-x-4 sm:space-x-6 border-y border-bgray">
        {settings.map((setting, i) => (
          <Link
            key={i}
            href={setting.path}
            className={`border-b-2 py-3.5 transition text-sm font-medium ${
              isActive(setting.path)
                ? "text-dgray border-violet-500"
                : "text-pgray border-transparent"
            }`}
          >
            {setting.title}
          </Link>
        ))}
      </nav>
      <div className="mt-8">{children}</div>
    </div>
  );
}
