import {
  RiNotification3Line,
  RiSearch2Line,
  RiSettings2Line,
} from "@remixicon/react";
import React from "react";

export default function Header() {
  return (
    <header className="py-5 ">
      <div className="flex items-center justify-between gap-3 ">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-12 h-12 border rounded-full shrink-0 shadow-ishadow text-pgray shad border-bgray">
            <RiSettings2Line size={24} />
          </div>
          <div>
            <h4 className="text-lg font-medium leading-6 text-dgray">
              Settings Page
            </h4>
            <p className="hidden text-sm leading-5 text-pgray sm:block">
              Manage your preferences and configure various options.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center justify-center w-10 h-10 text-pgray">
            <RiSearch2Line size={24} />
          </button>{" "}
          <button className="inline-flex items-center justify-center w-10 h-10 text-pgray">
            <div className="relative w-6 h-6">
              <RiNotification3Line size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 bg-white rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </span>
            </div>
          </button>
        </div>
      </div>{" "}
    </header>
  );
}
