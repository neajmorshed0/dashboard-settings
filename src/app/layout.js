import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import {
  RiCalendarLine,
  RiCommandLine,
  RiEqualizerLine,
  RiFileCloudLine,
  RiFoldersLine,
  RiGroupLine,
  RiLayoutGridLine,
  RiStarSmileLine,
  RiTimerLine,
} from "@remixicon/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synergy",
  description: "HR Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="h-screen lg:flex">
            <aside className="lg:flex flex-col w-[272px] hidden   border-r border-bgray">
              <div className="flex flex-col flex-1">
                <div className="flex gap-3 p-6 item s-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-violet-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46445 8.46448L4.92893 4.92896M4.92893 19.0711L8.46448 15.5355M15.5355 15.5355L19.0711 19.071M19.0711 4.92891L15.5355 8.46445M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium leading-5 text-dgray">
                      Synergy
                    </h4>
                    <p className="text-xs leading-4 text-pgray">
                      HR Management
                    </p>
                  </div>
                </div>
                <div className="px-5">
                  <div className="py-5 border-t border-bgray">
                    <span className="p-1 text-xs font-medium uppercase text-mgray">
                      Main
                    </span>
                    <ul className="mt-2 space-y-1 ">
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiLayoutGridLine size={20} />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiCalendarLine size={20} />
                          Calendar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiTimerLine size={20} />
                          Time Off
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiFoldersLine size={20} />
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiGroupLine size={20} />
                          Teams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiEqualizerLine size={20} />
                          Integrations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiStarSmileLine size={20} />
                          Benefits
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          href=""
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition rounded-lg hover:bg-weak-50 text-pgray"
                        >
                          <RiFileCloudLine size={20} />
                          Documents
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Favs */}
                  <div className="">
                    <span className="p-1 text-xs font-medium uppercase text-mgray">
                      Favs
                    </span>
                    <ul className="mt-2 space-y-1 ">
                      <li className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition text-pgray">
                        <span className="inline-flex items-center justify-center w-5 h-5">
                          <span className="w-3 h-3 border-2 border-white rounded-full bg-violet-500 shadow-custom-xs"></span>
                        </span>
                        Loom Mobile App
                        <span className="inline-flex items-center gap-1 py-1 px-1.5 ml-auto text-xs font-medium border rounded border-bgray text-mgray">
                          <RiCommandLine size={20} />1
                        </span>
                      </li>{" "}
                      <li className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition text-pgray">
                        <span className="inline-flex items-center justify-center w-5 h-5">
                          <span className="w-3 h-3 bg-red-500 border-2 border-white rounded-full shadow-custom-xs"></span>
                        </span>
                        Monday Redesign
                        <span className="inline-flex items-center gap-1 py-1 px-1.5 ml-auto text-xs font-medium border rounded border-bgray text-mgray">
                          <RiCommandLine size={20} />1
                        </span>
                      </li>{" "}
                      <li className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition text-pgray">
                        <span className="inline-flex items-center justify-center w-5 h-5">
                          <span className="w-3 h-3 bg-pink-500 border-2 border-white rounded-full shadow-custom-xs"></span>
                        </span>
                        Udemy Courses
                        <span className="inline-flex items-center gap-1 py-1 px-1.5 ml-auto text-xs font-medium border rounded border-bgray text-mgray">
                          <RiCommandLine size={20} />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex-1 px-4 lg:px-8">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
