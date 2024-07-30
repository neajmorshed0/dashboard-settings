import Label from "@/components/Forms/Label";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-wrap space-x-4 sm:space-x-6 border-y border-bgray">
        <button className="py-3.5 text-sm text-dgray font-medium border-b-2 border-violet-500">
          General Settings
        </button>{" "}
        <button className="py-3.5 text-sm text-pgray font-medium">
          Profile Settings
        </button>{" "}
        <button className="py-3.5 text-sm text-pgray font-medium">
          Company Settings
        </button>{" "}
        <button className="py-3.5 text-sm text-pgray font-medium">
          Notification Settings
        </button>{" "}
        <button className="py-3.5 text-sm text-pgray font-medium">
          Privacy & Security
        </button>{" "}
        <button className="py-3.5 text-sm text-pgray font-medium">
          Integrations
        </button>
      </nav>
      <div className="max-w-3xl py-8">
        <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row xl:gap-36">
          <div>
            <div className="p-2.5 rounded-2xl border border-bgray shadow-custom-xs sm:w-[258px]">
              <span className="block mb-2 text-xs font-medium leading-4 uppercase text-mgray">
                Select Menu
              </span>
              <div className="space-y-2">
                <button className="flex items-center w-full gap-2 p-2 text-sm font-medium rounded-lg text-dgray bg-weak-50">
                  <svg
                    className="w-5 h-5 text-violet-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Regional Preferences
                  <span className="inline-flex items-center justify-center w-5 h-5 ml-auto bg-white rounded-full">
                    <svg
                      className="w-4 h-4 text-pgray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <button className="flex items-center w-full gap-2 p-2 text-sm font-medium bg-transparent rounded-lg text-pgray">
                  <svg
                    className="w-5 h-5 text-pgray"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Theme Options
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
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
                    <div className="flex items-center gap-2">
                      <Label title="Timezone" variant="asterisk" />
                      <svg
                        className="w-5 h-5 text-weak-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
                  </div>{" "}
                  <div>
                    <div className="flex items-center gap-2">
                      <Label title="Time Format" variant="optional" />
                      <svg
                        className="w-5 h-5 text-weak-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
                    <div className="flex items-center gap-2">
                      <Label title="Date Format" variant="optional" />
                      <svg
                        className="w-5 h-5 text-weak-100"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
                  <button className="bg-white shadow-custom-xs border border-bgray rounded-custom px-7 py-2.5  text-sm font-medium w-full inline-block text-center text-pgray transition hover:border-violet-500 hover:text-violet-500">
                    Discard
                  </button>
                  <button className="bg-violet-500 hover:bg-violet-600 rounded-custom px-7 py-2.5 border border-violet-500 hover:border-violet-600 text-sm font-medium w-full inline-block text-center text-white hover:b transition ">
                    Apply Changes
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
