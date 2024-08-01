"use client";
import React, { Fragment } from "react";
import {
  RiAddCircleLine,
  RiArrowRightSLine,
  RiFolderSettingsLine,
  RiGlobalLine,
  RiSunLine,
  RiTimer2Line,
} from "@remixicon/react";
import clsx from "clsx";
import { TabList, Tab, TabGroup, TabPanels, TabPanel } from "@headlessui/react";

export default function IntegrationSettings() {
  return (
    <TabGroup>
      <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row xl:gap-28">
        <div>
          <div className="p-2.5 rounded-2xl border border-bgray shadow-custom-xs sm:w-[258px]">
            <span className="block mb-2 text-xs font-medium leading-4 uppercase text-mgray">
              Select Menu
            </span>
            <TabList className="space-y-2">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      "flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg focus:outline-none",
                      selected ? "bg-weak-50 text-dgray" : "text-pgray"
                    )}
                  >
                    <RiFolderSettingsLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Integrations
                    <span
                      className={clsx(
                        "inline-flex  items-center shadow-custom-xs justify-center w-5 h-5 ml-auto bg-white rounded-full",
                        selected ? "visible" : "invisible"
                      )}
                    >
                      <RiArrowRightSLine />
                    </span>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      "flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg focus:outline-none",
                      selected ? "bg-weak-50 text-dgray" : "text-pgray"
                    )}
                  >
                    <RiTimer2Line
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Upcoming
                    <span
                      className={clsx(
                        "inline-flex  items-center shadow-custom-xs justify-center w-5 h-5 ml-auto bg-white rounded-full",
                        selected ? "visible" : "invisible"
                      )}
                    >
                      <RiArrowRightSLine />
                    </span>
                  </button>
                )}
              </Tab>{" "}
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      "flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg focus:outline-none",
                      selected ? "bg-weak-50 text-dgray" : "text-pgray"
                    )}
                  >
                    <RiAddCircleLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Make Suggestion
                    <span
                      className={clsx(
                        "inline-flex  items-center shadow-custom-xs justify-center w-5 h-5 ml-auto bg-white rounded-full",
                        selected ? "visible" : "invisible"
                      )}
                    >
                      <RiArrowRightSLine />
                    </span>
                  </button>
                )}
              </Tab>
            </TabList>
          </div>
        </div>
        <div className="flex-1 xl:max-w-[352px]">
          <TabPanels>
            <TabPanel>
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Integrations
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Connect and sync with essential tools and platforms.
                </p>
              </div>
            </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  );
}
