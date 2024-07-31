"use client";

import CompanySettings from "@/components/Settings/CompanySettings";
import GeneralSettings from "@/components/Settings/GeneralSettings";
import Integrations from "@/components/Settings/Integrations";
import NotificationSettings from "@/components/Settings/NotificationSettings";
import PrivacyAndSecurity from "@/components/Settings/PrivacyAndSecurity";
import ProfileSettings from "@/components/Settings/ProfileSettings";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const settings = [
  {
    title: "General Settings",
  },
  {
    title: "Profile Settings",
  },
  {
    title: "Company Settings",
  },
  {
    title: "Notification Settings",
  },
  {
    title: "Privacy & Security",
  },
  {
    title: "Integrations",
  },
];

export default function Home() {
  return (
    <div>
      <TabGroup>
        <TabList className="flex flex-wrap space-x-4 sm:space-x-6 border-y border-bgray">
          {settings.map((setting) => (
            <Tab className="data-[selected]:text-dgray data-[selected]:border-violet-500 border-b-2 border-transparent focus:outline-none py-3.5 text-sm text-pgray font-medium">
              {setting.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="max-w-3xl py-8">
          <TabPanel>
            <GeneralSettings />
          </TabPanel>
          <TabPanel>
            <ProfileSettings />
          </TabPanel>
          <TabPanel>
            <CompanySettings />
          </TabPanel>
          <TabPanel>
            <NotificationSettings />
          </TabPanel>
          <TabPanel>
            <PrivacyAndSecurity />
          </TabPanel>
          <TabPanel>
            <Integrations />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
