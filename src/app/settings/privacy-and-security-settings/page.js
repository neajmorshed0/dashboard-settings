"use client";
import React, { Fragment } from "react";
import {
  RiLockLine,
  RiArrowRightSLine,
  RiShieldUserLine,
  RiDeviceLine,
  RiDeleteBin2Line,
} from "@remixicon/react";
import clsx from "clsx";
import { TabList, Tab, TabGroup, TabPanel, TabPanels } from "@headlessui/react";

export default function PrivacyAndSecurity() {
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
                    <RiLockLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Change Password
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
                    <RiShieldUserLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    2FA Security
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
                    <RiDeviceLine
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Active Sessions
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
                    <RiDeleteBin2Line
                      className={clsx(
                        "w-5 h-5",
                        selected ? "text-violet-500" : "text-pgray"
                      )}
                    />
                    Delete Account
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
            <TabPanel className="xl:max-w-[3446px]">
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Change Password
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Update password for enhanced account security.
                </p>
              </div>
              <div></div>
            </TabPanel>
            <TabPanel className="xl:max-w-[446px]">
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  2FA Security
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Enable two-factor authentication to your account.
                </p>
              </div>
              <div></div>
            </TabPanel>
            <TabPanel>
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Active Sessions
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Monitor and manage all your active sessions.
                </p>
              </div>
              <div></div>
            </TabPanel>
            <TabPanel className="xl:max-w-[446px]">
              <div className="pb-4 border-b border-bgray">
                <h4 className="mb-1 text-base font-medium leading-6 text-dgray">
                  Delete Account
                </h4>
                <p className="text-sm leading-5 text-pgray">
                  Manage the process of deleting account.
                </p>
              </div>
              <div></div>
            </TabPanel>
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  );
}
