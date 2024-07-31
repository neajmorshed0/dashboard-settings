import React from "react";
import {
  RiArrowRightSLine,
  RiContactsBookLine,
  RiShareForwardBoxLine,
  RiShareLine,
  RiUserLine,
} from "@remixicon/react";
import Link from "next/link";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row xl:gap-36">
      <div>
        <div className="p-2.5 rounded-2xl border border-bgray shadow-custom-xs sm:w-[258px]">
          <span className="block mb-2 text-xs font-medium leading-4 uppercase text-mgray">
            Select Menu
          </span>
          <div className="space-y-2">
            <Link
              href="/settings/profile-settings"
              className="flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg"
            >
              <RiUserLine size={20} />
              Profile Settings
            </Link>
            <Link
              href="/settings/profile-settings/contact-info"
              className="flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg"
            >
              Contact Information
            </Link>
            <Link
              href=""
              className="flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg"
            >
              Social Links
            </Link>
            <Link
              href=""
              className="flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg"
            >
              Export Data
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
