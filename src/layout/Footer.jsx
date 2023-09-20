import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { useSession } from "next-auth/react";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { twitter_url, linkedin_url } from "@/config/constants";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";

const Footer = () => {
  const { data: session } = useSession();
  const { setAuthModalOpen } = useContext(AuthModalContext);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1920px] pt-12 pb-12 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-20 bg-light-100 border-t border-t-light-400">
        <div className="flex items-center justify-between w-full">
          <Image src={logo} alt="logo" width="150" />
          <p className="text-base font-medium font-primary sm:text-lg text-gradient-primary-tr">
            EverythingAI
          </p>
        </div>

        <div className="grid flex-wrap justify-between w-full grid-cols-1 py-8 mt-5 border-t-2 border-gray-100 sm:grid-cols-2 gap-y-10 md:gap-y-0 md:flex font-primary">
          <div className=" items-center flex flex-col space-y-2">
            <p className="font-semibold text">Need help with your AI Stack?</p>
            <Link href="/contact">
              <Button
                rounded={true}
                hasWFull={false}
                classes="font-semibold w-fit text-sm md:text-lg px-8 py-2 md:px-12 md:py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-semibold text">Quick Links</p>
            <ul className="space-y-2">
              <li className="text-dark-200 hover:text-primary-500">
                <Link href="/tools">All Tools</Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link href="/categories">Categories</Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                {session && session.user ? (
                  <Link href="/dashboard">Dashboard</Link>
                ) : (
                  <span onClick={() => setAuthModalOpen(true)}>Dashboard</span>
                )}
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-semibold text">Blogs</p>
            <ul className="space-y-2">
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="https://everythingai.club/collections/for-creators-influencers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tools for Creators
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="https://everythingai.club/collections/for-saas-entrepreneurs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAAS Tools
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="https://blog.everythingai.club/ai-in-marketing-definitive-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI In Marketing
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="https://blog.everythingai.club/top-free-ai-tools/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Top Free Tools
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="https://blog.everythingai.club/ai-tools-for-productivity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tools For Productivity
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="https://everythingai.club/collections/auto-generating-social-media-ads-with-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tools For Creating Ads
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-semibold text">Support</p>
            <ul className="space-y-2">
              <li className="text-dark-200 hover:text-primary-500">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="text-dark-400 font-bold hover:text-primary-500">
                <Link href="https://everythingai.substack.com/" target="_blank">
                  Join The Newsletter
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Tooltip
                  message={"Coming Soon"}
                  labelText={"Join the Community"}
                />
                {/* <Link href="/join-community">Join the Community</Link> */}
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-semibold text">General</p>
            <ul className="space-y-2">
              {/* <li className="text-dark-200 hover:text-primary-500">
								<Link href="/#faq">FAQ</Link>
							</li> */}
              <li className="text-dark-200 hover:text-primary-500">
                <Link href="https://blog.everythingai.club">Top blogs</Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link href="https://everything-ai.notion.site/everything-ai/Everything-AI-Sponsorship-and-Promotions-e20dededcfc94f70b3b9a791a19406ad">
                  Get Featured
                </Link>
              </li>
              <li className="text-dark-200 hover:text-primary-500">
                <Link
                  href="/offerings.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Our Offerings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-3 mb-4 space-y-5 sm:flex-row sm:justify-between sm:items-center sm:space-y-2 sm:mb-0">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-center sm:text-left">
              See what&apos;s new on
            </p>
            <div className="flex justify-center sm:justify-start gap-x-6">
              <a
                href={twitter_url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-center connect_link"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href={linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-center connect_link"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="grid justify-between grid-cols-2 gap-2 gap-x-10 md:gap-x-8 md:pt-6 lg:gap-0 lg:flex lg:space-x-6 xl:space-x-28 font-primary">
            <li className="text-xs list-none text-neutral-400">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-xs list-none text-neutral-400">
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li className="hidden text-xs list-none text-neutral-400 sm:block">
              <Link href="/contact">Contact Us</Link>
            </li>
          </div>
        </div>

        <p className="max-w-sm mx-auto mt-4 text-xs text-center font-primary text-neutral-400 sm:text-left sm:mx-0">
          ©️Everything AI 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
