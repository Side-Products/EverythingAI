import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import logo from "../../public/logo.png";
import HamburgerMenu from "./HamburgerMenu";
import { ToolContext } from "@/store/ToolContextProvider";
import { motion } from "framer-motion";

const Navbar = ({ setAuthModalOpen }) => {
  const { data: session, status } = useSession();

  let truncatedName;
  if (session && session.user && session.user.name) {
    truncatedName = session.user.name ?? "";
    if (session.user.name && session.user.name.length > 10) {
      truncatedName = truncatedName.substring(0, 8) + "...";
    }
  }

  let avatarUrl = session && session.user && session.user.image;

  let truncatedEmail;
  if (session && session.user && session.user.email) {
    truncatedEmail = session.user.email.substring(0, 16) + "...";
  }

  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const { setFilteredTools } = useContext(ToolContext);

  return (
    <div className="flex justify-center w-screen">
      <div
        className={"w-full fixed z-40 max-w-[1920px] bg-gradient-tertiary-r"}
      >
        <motion.div
          className="sm:p-[18px] p-[28px] group w-full flex items-center justify-center text-center text-sm text-light-400 bg-gradient-tertiary-r"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div className="absolute w-full">
            Featured on 🔥{" "}
            <Link
              className="underline"
              href="https://markets.financialcontent.com/wss/article/zexprwire-2023-8-11-empowering-businesses-and-individuals-alike-everything-ai-is-the-ultimate-solution-for-ai-tool-discovery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wall Street Select
            </Link>
            ,{" "}
            <Link
              className="underline"
              href="https://dailytribune.us/empowering-businesses-and-individuals-alike-everything-ai-is-the-ultimate-solution-for-ai-tool-discovery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daily Tribune
            </Link>
            ,{" "}
            <Link
              className="underline"
              href="https://www.thedailynewsjournal.us/empowering-businesses-and-individuals-alike-everything-ai-is-the-ultimate-solution-for-ai-tool-discovery"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Daily News Journal
            </Link>{" "}
            and 150+ Publications
          </motion.div>
        </motion.div>

        <nav
          className={
            "navbar min-h-[60px] sm:block flex py-2 duration-500 ease-in mx-auto border-[0.5px] border-gray-300 rounded-t-3xl"
          }
        >
          <div className="flex flex-wrap items-center justify-between w-full py-2 pr-16 pl-7 sm:pl-9 lg:px-16">
            <Link href="/">
              <span className="flex">
                <Image
                  src={logo}
                  alt="everythingai logo"
                  width="150"
                  className="rounded-full"
                />
              </span>
            </Link>

            <div className="flex gap-x-6">
              {/* Internal links */}
              <div className="hidden lg:block">
                <ul className="flex flex-row items-center font-medium md:text-sm md:space-x-2 xl:space-x-1 md:mt-0 sm:text-sm">
                  <li
                    className="relative block group search-li"
                    onMouseEnter={() => {
                      document.getElementById("search-input").focus();
                    }}
                    onMouseLeave={() => {
                      document.getElementById("search-input").blur();
                    }}
                  >
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const queryParams = {
                          search: searchText,
                        };
                        // Merge the new query parameters with the existing ones
                        const updatedQuery = {
                          ...router.query,
                          ...queryParams,
                        };
                        // Convert the updated query object to a search string
                        const search = new URLSearchParams(
                          updatedQuery
                        ).toString();
                        // Push the updated search string to the router
                        router.push(`/tools?${search}`, undefined, {
                          shallow: true,
                        });
                        const { data } = await axios.get(`/api/tools`, {
                          params: updatedQuery,
                        });
                        setFilteredTools(data?.tools);
                      }}
                      className="search-box"
                    >
                      <input
                        className="search-text"
                        id="search-input"
                        type="text"
                        placeholder="Search tools"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                      />
                      <span className="search-btn">
                        <i className="fas fa-search"></i>
                      </span>
                    </form>
                  </li>
                  <li
                    className={
                      "font-medium block py-2 px-4 text-dark-100 hover:text-dark-200 hover:bg-gray-200 rounded-lg transition duration-300 " +
                      (router.pathname.startsWith("/tools")
                        ? "text-dark-800 bg-gray-200"
                        : "")
                    }
                  >
                    <Link href="/tools">Tools</Link>
                  </li>

                  <li
                    className={
                      "font-medium hidden xl:block py-2 px-4 text-dark-100 hover:text-dark-200 hover:bg-gray-200 rounded-lg transition duration-300 " +
                      (router.pathname == "/categories"
                        ? "text-dark-800 bg-gray-200"
                        : "")
                    }
                  >
                    <Link href="/categories">Categories</Link>
                  </li>

                  <li
                    className={
                      "font-medium block py-2 px-4 text-dark-100 hover:text-dark-200 hover:bg-gray-200 rounded-lg transition duration-300 " +
                      (router.pathname == "/collections"
                        ? "text-dark-800 bg-gray-200"
                        : "")
                    }
                  >
                    <Link href="/collections">Collections</Link>
                  </li>

                  <li
                    className={
                      "font-medium hidden xl:block py-2 px-4 text-dark-100 hover:text-dark-200 hover:bg-gray-200 rounded-lg transition duration-300 " +
                      (router.pathname == "/get-featured"
                        ? "text-dark-800 bg-gray-200"
                        : "")
                    }
                  >
                    <Link href="https://everything-ai.notion.site/everything-ai/Everything-AI-Sponsorship-and-Promotions-e20dededcfc94f70b3b9a791a19406ad">
                      Get Featured
                    </Link>
                  </li>

                  <li
                    className={
                      "font-medium hidden py-2 px-4 text-dark-100 hover:text-dark-200 hover:bg-gray-200 rounded-lg transition duration-300 " +
                      (router.pathname == "/blog"
                        ? "text-dark-800 bg-gray-200"
                        : "")
                    }
                  >
                    <Link
                      href="https://blog.everythingai.club"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="relative flex gap-x-4">
                {session && session.user && session.user.email ? (
                  <Link
                    href="/submit-tool"
                    className="items-center justify-center hidden px-10 py-2 text-sm font-semibold transition duration-300 rounded-full cursor-pointer sm:flex bg-primary-500 hover:bg-primary-600 text-light-100 hover:text-light-100"
                  >
                    Submit Tool
                  </Link>
                ) : (
                  <div
                    onClick={() => {
                      setAuthModalOpen(true);
                    }}
                    className="items-center justify-center hidden px-10 py-2 text-sm font-semibold transition duration-300 rounded-full cursor-pointer sm:flex bg-primary-500 hover:bg-primary-600 text-light-100"
                  >
                    Submit Tool
                  </div>
                )}

                <div className="hidden md:block">
                  <ul className="flex flex-row items-center text-sm font-medium md:space-x-8 lg:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
                    {/* Dropdown Menu */}
                    <li className="hidden md:block">
                      <ul className="relative group dropdown">
                        <a
                          className="flex items-center dropdown-toggle hidden-arrow"
                          id="dropdownMenuButton2"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {status === "authenticated" ? (
                            <div className="flex items-center justify-center px-4 py-2 text-sm rounded-full bg-[#e9e9e9]">
                              <span className="mr-3">{truncatedName}</span>
                              {avatarUrl ? (
                                <Image
                                  src={avatarUrl}
                                  alt="avatar"
                                  width="24"
                                  height="24"
                                  className="rounded-full"
                                />
                              ) : (
                                <Image
                                  src={"/default_avatar.jpg"}
                                  alt="avatar"
                                  width="24"
                                  height="24"
                                  className="rounded-full"
                                />
                              )}
                            </div>
                          ) : (
                            <div
                              onClick={() => setAuthModalOpen(true)}
                              className="flex items-center justify-center px-10 py-2 text-sm font-semibold rounded-full bg-[#e9e9e9] hover:bg-light-400 transition duration-300"
                            >
                              Sign In
                            </div>
                          )}
                        </a>

                        {status === "authenticated" && (
                          <ul
                            className="absolute right-0 left-auto z-10 hidden text-sm font-medium float-left m-0 text-left list-none border-none rounded-xl shadow-lg dropdown-menu min-w-[250px] bg-[#e9e9e9] backdrop-blur-[24px] backdrop-brightness-105
											bg-clip-padding group-hover:block"
                            aria-labelledby="dropdownMenuButton2"
                          >
                            {status === "authenticated" && (
                              <li>
                                <div className="flex flex-col px-4 py-3 rounded-t-xl">
                                  <div className="flex items-center justify-between w-full bg-transparent rounded-t-xl dropdown-item whitespace-nowrap active:bg-transparent active:text-dark-900">
                                    <div>
                                      <p>Email</p>
                                      <p>{truncatedEmail}</p>
                                    </div>
                                    {avatarUrl ? (
                                      <Image
                                        src={avatarUrl}
                                        alt={"avatar"}
                                        width={40}
                                        height={40}
                                        className="rounded-lg"
                                      />
                                    ) : (
                                      <Image
                                        src={"/default_avatar.jpg"}
                                        alt="avatar"
                                        width="40"
                                        height="40"
                                        className="rounded-lg"
                                      />
                                    )}
                                  </div>
                                </div>
                              </li>
                            )}

                            {status === "authenticated" && (
                              <li>
                                <Link href={`/dashboard`} passHref={true}>
                                  <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap bg-[#e9e9e9] hover:bg-light-400">
                                    Dashboard
                                  </div>
                                </Link>
                              </li>
                            )}

                            {status === "authenticated" &&
                              session.user &&
                              session.user.role == "admin" && (
                                <>
                                  <li>
                                    <div className="block w-full px-4 pt-3 pb-2 text-center bg-transparent border-t border-zinc-300 dropdown-item whitespace-nowrap text-light-700">
                                      Admin Routes
                                    </div>
                                  </li>

                                  <li>
                                    <Link href={`/admin/users`} passHref={true}>
                                      <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-light-400">
                                        All Users
                                      </div>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/admin/categories`}
                                      passHref={true}
                                    >
                                      <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-light-400">
                                        All Categories
                                      </div>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href={`/admin/tools`} passHref={true}>
                                      <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-light-400">
                                        All Tools
                                      </div>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/admin/collections`}
                                      passHref={true}
                                    >
                                      <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-light-400">
                                        All Collections
                                      </div>
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      href={`/admin/contact`}
                                      passHref={true}
                                    >
                                      <div className="block w-full px-4 py-2 bg-transparent cursor-pointer dropdown-item whitespace-nowrap hover:bg-light-400">
                                        All Contact Messages
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              )}

                            {/* Logout Button */}
                            <li>
                              {status === "authenticated" ? (
                                <button
                                  className="w-full px-4 pt-2 pb-3 font-medium transition-all bg-transparent cursor-pointer rounded-b-xl border-light-300 hover:bg-error-400/20"
                                  onClick={() => {
                                    signOut();
                                    localStorage.removeItem("selectedTeam");
                                  }}
                                >
                                  Sign out
                                </button>
                              ) : (
                                <span></span>
                              )}
                            </li>
                          </ul>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hamburger Menu */}
              <HamburgerMenu
                avatarUrl={session && session.user && session.user.image}
                truncatedName={session && session.user && session.user.name}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
