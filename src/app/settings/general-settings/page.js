"use client";
import React, { Fragment } from "react";
import {
  RiArrowRightSLine,
  RiGlobalLine,
  RiInformationFill,
  RiSunLine,
} from "@remixicon/react";
import clsx from "clsx";
import { TabList, Tab, TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Label from "@/components/Forms/Label";
import Button from "@/components/Buttons/Button";

export default function GeneralSettings() {
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
                    <RiGlobalLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Regional Preferences
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
                    <RiSunLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Theme Options
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
                  Regional Preferences
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Select your preferences for your region.
                </p>
              </div>
              <div className="mt-4">
                <form action="">
                  <div className="space-y-3">
                    <div>
                      <Label title="Language" variant="asterisk" />
                      <select
                        name=""
                        id="language"
                        className="w-full px-3 py-2.5 bg-white shadow-custom-xs mt-1 border rounded-custom focus:border-violet-500 text-sm font-normal focus:ring-violet-500 border-bgray"
                      >
                        <option value="1">English(US)</option>
                        <option value="2">English(UK)</option>
                        <option value="3">Bangla(BD)</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <Label title="Timezone" variant="asterisk" />
                        <RiInformationFill className="w-4 h-4 text-weak-100" />
                      </div>
                      <select
                        name=""
                        id="language"
                        className="w-full px-3 py-2.5 bg-white shadow-custom-xs mt-1 border rounded-custom focus:border-violet-500 text-sm font-normal focus:ring-violet-500 border-bgray"
                      >
                        <option value="1">
                          GMT-4:00 - Atlantic Standard Time (AST)
                        </option>
                        <option value="2">
                          GMT-4:00 - Atlantic Standard Time (AST)
                        </option>
                        <option value="3">
                          GMT-4:00 - Atlantic Standard Time (AST)
                        </option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <Label title="Time Format" variant="optional" />
                        <RiInformationFill className="w-4 h-4 text-weak-100" />
                      </div>
                      <select
                        name=""
                        id="time"
                        className="w-full px-3 py-2.5 bg-white shadow-custom-xs mt-1 border rounded-custom focus:border-violet-500 text-sm font-normal focus:ring-violet-500 border-bgray"
                      >
                        <option value="1">24 Hours</option>
                        <option value="2">12 Hours</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <Label title="Date Format" variant="optional" />
                        <RiInformationFill className="w-4 h-4 text-weak-100" />
                      </div>
                      <select
                        name=""
                        id="time"
                        className="w-full px-3 py-2.5 bg-white shadow-custom-xs mt-1 border rounded-custom focus:border-violet-500 text-sm font-normal focus:ring-violet-500 border-bgray"
                      >
                        <option value="1">DD/MM/YY</option>
                        <option value="2">MM/DD/YY</option>
                        <option value="2">YY/MM/DD</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex mt-5 space-x-3">
                    <Button variant="outline">Discard</Button>
                    <Button variant="primary"> Apply Changes</Button>
                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Theme Options
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Pick theme to personalize experience.
                </p>
              </div>
              <div className="mt-4">
                <div className="flex mt-5 space-x-3">
                  <Button variant="outline">Discard</Button>
                  <Button variant="primary"> Apply Changes</Button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  );
}
