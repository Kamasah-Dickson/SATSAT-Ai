import React from "react";
import logo from "@/public/satsat-logo.svg";
import Image from "next/image";
import signupImage from "@/public/signupImage.svg";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Country from "@/components/Countries";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "SATSAT-Ai Get started!",
};
const page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker pb-7 w-full min-h-screen items-center flex relative">
				<div className="green-blob w-96 h-96 top-[-40%] left-[20%] md:top-[-25%] md:left-[10%] animate-pulse"></div>

				<main className="grid grid-cols-1 lg:grid-cols-2 h-auto mt-20 items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
					<div className="flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto">
						<Image src={logo} alt="satsat-ai" height={150} width={150} />
						<p className="text-mid--yellow">
							Please fill your detail to create your account.
						</p>
						<div className="w-full mt-5 flex flex-col">
							<label
								className="mb-2 text-text-normal text-mid--yellow"
								htmlFor=""
							>
								Full Name
							</label>
							<input
								className="placeholder:text-grey-lightest/60 border border-white bg-transparent p-2 rounded-lg"
								type="text"
								placeholder="John Doe"
								value={""}
								name="username"
							/>
						</div>
						<div className="w-full flex flex-col">
							<label
								className="mb-2 text-text-normal text-mid--yellow"
								htmlFor=""
							>
								Email
							</label>
							<input
								className="placeholder:text-grey-lightest/60 border border-white bg-transparent p-2 rounded-lg"
								type="text"
								placeholder="johndoe@gmail.com"
								value={""}
								name="email"
							/>
						</div>
						<div className="w-full flex flex-col">
							<label
								className="mb-2 text-text-normal text-mid--yellow"
								htmlFor=""
							>
								Country
							</label>
							<Country />
						</div>
						<span className="text-white text-text-normal font-light text-right w-full">
							Already having an account?{" "}
							<Link
								className="font-medium text-normal text-mid--yellow"
								href="/signin"
							>
								signin
							</Link>
						</span>
						<button
							className="border mt-5 font-medium text-[17px] active:scale-[1.001] hover:text-darker transition-colors duration-200 hover:border-mid--yellow hover:bg-mid--yellow border-brand-green block w-full p-2 rounded-lg text-mid--yellow"
							type="button"
						>
							Signup
						</button>
						<div className="flex items-center justify-center w-full">
							<div className=" my-7 w-full h-[1px] gradient3"></div>

							<span className="text-grey-lightest">or</span>
							<div className=" my-7 w-full h-[1px] gradient4"></div>
						</div>
						<button
							className="mt-5 font-semibold text-[17px] transition-colors duration-20 bg-white w-full p-3 rounded-3xl text-darker hover:bg-transparent border flex items-center justify-center gap-3 hover:text-white active:scale-[1.01] hover:border-white"
							type="button"
						>
							Signup with Google
							<FcGoogle size={25} />
						</button>
					</div>
					<div className="rounded-[40px] hidden lg:flex overflow-clip">
						<Image
							className="object-cover"
							src={signupImage}
							layout="responsive"
							height={750}
							width={600}
							alt="signup"
							priority
						/>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
