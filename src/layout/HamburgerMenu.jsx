import { useContext } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icon.png";
import { AuthModalContext } from "@/store/AuthModalContextProvider";
import { twitter_url, linkedin_url } from "@/config/constants";

export default function HamburgerMenu({ avatarUrl, truncatedName }) {
	const { data: session, status } = useSession();
	const { setAuthModalOpen } = useContext(AuthModalContext);
	const router = useRouter();

	const closeNavbar = () => {
		document.getElementById("hamburgerToggler").click();
	};

	return (
		<div className="flex flex-wrap pl-0 mb-0 ml-2 list-reset lg:hidden">
			<div id="menuToggle">
				<input type="checkbox" className="toggler" id="hamburgerToggler" />
				<div className="hamburger">
					<div></div>
				</div>

				<div id="menu">
					<div className="hamburger_container">
						<div className="menu_box">
							<div className="flex flex-col">
								<div className="flex justify-center w-full px-4 md:mx-1/6 md:w-1/5 offset-0 sm:block logo_div_anim">
									<Link href={"/"} passHref={true}>
										<span href="#" onClick={closeNavbar} className="flex">
											<Image src={logo} alt="logo" width="60" className="rounded-full" />
										</span>
									</Link>
								</div>
								<div className="flex items-center self-center justify-between w-full px-4 mt-4 space-x-6 xs:w-2/3 md:w-2/5 sm:w-3/5 create_left_anim sm:self-end">
									<div className="w-full quick_hamburger_nav_div">
										{status === "authenticated" ? (
											<>
												<div
													onClick={() => {
														router.push("/dashboard");
														closeNavbar();
													}}
													className="flex items-center justify-center px-4 py-2 text-sm text-white rounded-full cursor-pointer quick_hamburger_nav bg-search-200"
												>
													<span className="mr-4">{truncatedName}</span>
													{avatarUrl ? <Image src={avatarUrl} alt="avatar" width="24" height="24" className="rounded-full" /> : null}
												</div>
												<button
													className="w-full px-4 py-2 mt-2 font-medium transition-all duration-300 rounded-full cursor-pointer bg-error-600/30 hover:bg-error-600/50"
													onClick={() => {
														signOut();
														localStorage.removeItem("selectedTeam");
													}}
												>
													Sign out
												</button>
											</>
										) : (
											<div
												onClick={() => {
													closeNavbar();
													setAuthModalOpen(true);
												}}
												className="flex items-center justify-center px-6 py-2 text-base font-semibold text-white rounded-full quick_hamburger_nav bg-search-200"
											>
												Sign up / Login
											</div>
										)}
									</div>
								</div>
							</div>

							<div className="justify-center hamburger_menu">
								<div className="flex flex-wrap justify-center">
									<div className="w-full px-2 lg:w-full md:w-4/5 offset-0 md:mt-0">
										<div className="flex flex-wrap justify-center">
											<div className="w-1/2 px-2 text-center md:w-1/4">
												<div className="flex flex-wrap justify-center mt-5 ham_menu_heading sm:mt-0">Quick Links</div>
												<div className="flex flex-wrap justify-center mt-4 ham_menu_hover_effect_row md:mt-8">
													<Link href={"/tools"} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
														<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
															All Tools
														</span>
													</Link>
												</div>
												<div className="flex flex-wrap justify-center ham_menu_hover_effect_row md:mt-8">
													<Link href={"/submit-tool"} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
														<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
															Submit Tool
														</span>
													</Link>
												</div>
											</div>

											<div className="w-1/2 px-4 text-center md:w-1/4">
												<div className="flex flex-wrap justify-center mt-5 ham_menu_heading sm:mt-0">Account</div>
												<div className="flex flex-wrap justify-center mt-4 ham_menu_hover_effect_row md:mt-8">
													{status === "authenticated" ? (
														<Link href={`/dashboard`} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																Dashboard
															</span>
														</Link>
													) : (
														<span
															className="text-center ham_menu_link ham_menu_hover_effect"
															onClick={() => {
																closeNavbar();
																setAuthModalOpen(true);
															}}
														>
															Profile
														</span>
													)}
												</div>
											</div>

											<div className="w-1/2 px-1 mt-4 text-center md:w-1/4 md:mt-0">
												<div className="flex flex-wrap justify-center mt-5 ham_menu_heading sm:mt-0">Support</div>

												<div className="flex flex-wrap justify-center mt-4 md:mt-8 ham_menu_hover_effect_row">
													<Link href={"/contact"} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
														<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
															Contact Us
														</span>
													</Link>
												</div>
												<div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
													<Link href={"/report-a-bug"} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
														<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
															Report a Bug
														</span>
													</Link>
												</div>
												<div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
													<Link
														href={"/request-a-feature"}
														className="text-center ham_menu_link ham_menu_hover_effect"
														passHref={true}
													>
														<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
															Request Feature
														</span>
													</Link>
												</div>
											</div>

											<div className="w-1/2 px-2 mt-4 text-center md:w-1/4 md:mt-0">
												<div className="flex flex-wrap justify-center mt-5 ham_menu_heading sm:mt-0">General</div>
												<div className="flex flex-wrap justify-center mt-4 ham_menu_hover_effect_row md:mt-8">
													<Link href={"/#faq"} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
														<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
															FAQ
														</span>
													</Link>
												</div>
											</div>

											{status === "authenticated" && session.user && session.user.role == "admin" && (
												<div className="w-10/12 px-4 mt-4 text-center md:w-1/2 md:mt-8">
													<div className="flex flex-wrap justify-center mt-5 ham_menu_heading sm:mt-0">Admin Routes</div>

													{/* <div className="flex flex-wrap justify-center mt-4 md:mt-8 ham_menu_hover_effect_row">
														<Link
															href={`/admin/subscriptions`}
															className="text-center ham_menu_link ham_menu_hover_effect"
															passHref={true}
														>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Subscriptions
															</span>
														</Link>
													</div> */}

													<div className="flex flex-wrap justify-center mt-4 ham_menu_hover_effect_row">
														<Link href={`/admin/users`} className="text-center ham_menu_link ham_menu_hover_effect" passHref={true}>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Users
															</span>
														</Link>
													</div>

													<div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
														<Link
															href={`/admin/categories`}
															className="text-center ham_menu_link ham_menu_hover_effect"
															passHref={true}
														>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Categories
															</span>
														</Link>
													</div>

													<div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
														<Link
															href={`/admin/tools`}
															className="text-center ham_menu_link ham_menu_hover_effect"
															passHref={true}
														>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Tools
															</span>
														</Link>
													</div>

													<div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
														<Link
															href={`/admin/collections`}
															className="text-center ham_menu_link ham_menu_hover_effect"
															passHref={true}
														>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Collection
															</span>
														</Link>
													</div>

													<div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
														<Link
															href={`/admin/contact`}
															className="text-center ham_menu_link ham_menu_hover_effect"
															passHref={true}
														>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Contact Messages
															</span>
														</Link>
													</div>

													{/* <div className="flex flex-wrap justify-center ham_menu_hover_effect_row">
														<Link
															href={`/admin/contact-us-messages`}
															className="text-center ham_menu_link ham_menu_hover_effect"
															passHref={true}
														>
															<span className="text-white hover:text-primary-400" onClick={closeNavbar}>
																All Contact Us Messages
															</span>
														</Link>
													</div> */}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-wrap ">
								<div className="w-full px-4 mt-8 mb-4 md:mx-1/5 horizontal_line_to_right"></div>
							</div>

							<div className="flex flex-wrap justify-center pb-10 mb-5 harmburger_menu_connect">
								<div className="w-full px-4 mt-5 ham_menu_connect_links_md offset-0 md:mt-0">
									<div className="flex flex-wrap justify-center">
										<div className="text-center ham_menu_heading ham_menu_connect_heading">See what&apos;s new on</div>
									</div>
									<div className="grid grid-cols-2 gap-0 px-10 mt-5 sm:flex sm:flex-wrap sm:justify-center">
										<a
											href={twitter_url}
											target="_blank"
											rel="noopener noreferrer"
											className="relative flex-1 flex-grow max-w-full p-0 px-4 text-center connect_link"
										>
											<i className="fab fa-twitter fa-lg"></i>
										</a>
										<a
											href={linkedin_url}
											target="_blank"
											rel="noopener noreferrer"
											className="relative flex-1 flex-grow max-w-full p-0 px-4 text-center connect_link"
										>
											<i className="fab fa-linkedin fa-lg"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
