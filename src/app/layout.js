import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  RiCalendarLine,
  RiCommandLine,
  RiEqualizerLine,
  RiFileCloudLine,
  RiFlashlightLine,
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
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 14.5347H21.4703L28.857 10.2693L27.3922 7.73067L20.0045 11.996L24.2684 4.60867L21.7306 3.14333L17.4658 10.5288V2H14.5342V10.5297L10.2694 3.14333L7.73062 4.60867L11.9945 11.9941L4.60873 7.73067L3.14295 10.2693L10.5297 14.5347H2V17.4663H10.5288L3.14295 21.7316L4.6078 24.2703L11.9955 20.0049L7.73062 27.3923L10.2684 28.8576L14.5342 21.4712V30H17.4658V21.2883L21.809 28.8109L24.1891 27.4371L19.845 19.9125L27.3903 24.2693L28.8561 21.7307L21.4703 17.4653H29.9991V14.5347H30ZM16 19.9853C15.4767 19.9854 14.9585 19.8823 14.475 19.6821C13.9915 19.4818 13.5522 19.1882 13.1821 18.8181C12.812 18.448 12.5184 18.0086 12.3181 17.525C12.1178 17.0414 12.0147 16.523 12.0146 15.9995C12.0145 15.476 12.1175 14.9577 12.3178 14.474C12.518 13.9904 12.8114 13.5509 13.1814 13.1807C13.5514 12.8105 13.9907 12.5168 14.4741 12.3164C14.9576 12.116 15.4758 12.0129 15.9991 12.0128C17.0559 12.0127 18.0696 12.4325 18.817 13.18C19.5644 13.9275 19.9843 14.9414 19.9845 15.9986C19.9846 17.0558 19.5649 18.0698 18.8176 18.8175C18.0704 19.5651 17.0569 19.9852 16 19.9853Z"
                        fill="currentColor"
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
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
