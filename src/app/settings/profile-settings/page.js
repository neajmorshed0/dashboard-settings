"use client";
import React, { Fragment } from "react";
import {
  RiArrowRightSLine,
  RiContactsBookLine,
  RiInformationFill,
  RiShareForwardBoxLine,
  RiShareLine,
  RiUserLine,
} from "@remixicon/react";
import clsx from "clsx";
import { TabList, Tab, TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Label from "@/components/Forms/Label";

export default function ProfileLayout() {
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
                    <RiUserLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Profile Settings
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
                    <RiContactsBookLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Contact Information
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
                    <RiShareLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Social Links
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
                    <RiShareForwardBoxLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Export Data
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
              <div className="flex gap-5 pb-4 border-b border-bgray">
                <div>
                  <img src="" className="w-16 h-16 rounded-full" alt="" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                    Upload Image
                  </h4>
                  <p className="text-sm leading-5 text-pgray">
                    Min 400x400px, PNG or JPEG
                  </p>
                </div>
              </div>
              <div className="mt-4"></div>
            </TabPanel>
            <TabPanel>
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Contact Information
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Enter your contact details for communication.
                </p>
              </div>
              <div></div>
            </TabPanel>
            <TabPanel>
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Social Links
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Manage your social media connections.
                </p>
              </div>
              <div></div>
            </TabPanel>
            <TabPanel>
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Export Data
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Export your HR data for personal records.
                </p>
              </div>
              <div className="">
                <form action="">
                  <div className="py-4 space-y-4 border-b border-bgray">
                    <div className="flex items-center gap-2">
                      <input
                        name="edata"
                        type="checkbox"
                        className="w-4 h-4 bg-white border-2 rounded focus:ring-violet-500 text-violet-500 shadow-custom-sm border-bgray"
                      />
                      <label htmlFor="" className="text-sm text-dgray">
                        Include Personal Information
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        name="edata"
                        type="checkbox"
                        className="w-4 h-4 bg-white border-2 rounded focus:ring-violet-500 text-violet-500 shadow-custom-sm border-bgray"
                      />
                      <label htmlFor="" className="text-sm text-dgray">
                        Include Attendance Records
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        name="edata"
                        type="checkbox"
                        className="w-4 h-4 bg-white border-2 rounded focus:ring-violet-500 text-violet-500 shadow-custom-sm border-bgray"
                      />
                      <label htmlFor="" className="text-sm text-dgray">
                        Include Performance Reviews
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1">
                      <Label
                        title="Select preferred file format"
                        variant="optional"
                      />
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
                  <div className="mt-5">
                    <button className="w-full font-medium text-sm text-violet-500 gap-2 py-2.5 px-5 flex items-center justify-center border border-violet-500 rounded-custom">
                      <RiShareForwardBoxLine size={20} />
                      Export
                    </button>
                  </div>
                </form>
              </div>
            </TabPanel>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  );
}
