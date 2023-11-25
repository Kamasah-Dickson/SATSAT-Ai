import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LogoutIcon from "@mui/icons-material/Logout";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Logo from "@/public/satsat-logo.svg";
import { IDashboardSidebarData } from "@/interface";
import PageWithSubPath from "./PageWithSubPath";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PaidIcon from "@mui/icons-material/Paid";
import CategoryIcon from "@mui/icons-material/Category";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const DashboardSidebarWithData = ({
	pathname,
	setHideSidebar,
}: {
	pathname: string;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
	const dashboardSidebarData: IDashboardSidebarData[] = [
		{
			icon: <DashboardIcon fontSize="medium" />,
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			path: "/dashboard/transactions",
			icon: <PaidIcon fontSize="medium" />,
			name: "Transactions",
			subPaths: [
				{
					path: "/dashboard/transactions/categories",
					name: "Categories",
					icon: <CategoryIcon fontSize="medium" />,
				},
				{
					path: "/dashboard/transactions/budget",
					name: "Budget",
					icon: <PriceCheckIcon fontSize="medium" />,
				},
			],
		},
		{
			path: "/dashboard/upload",
			icon: <UploadFileIcon fontSize="medium" />,
			name: "Upload",
		},
		{
			icon: <ChatIcon fontSize="medium" />,
			name: "Chat",
			path: "/dashboard/chat",
		},
		{
			icon: <ReceiptLongIcon fontSize="medium" />,
			name: "Receipts",
			path: "/dashboard/receipts",
		},
		{
			icon: <TextSnippetIcon fontSize="medium" />,
			name: "Invoice",
			path: "/dashboard/invoice",
		},

		{
			icon: <SettingsSuggestIcon fontSize="medium" />,
			name: "Settings",
			path: "/dashboard/settings",
		},
	];

	return (
		<>
			<ul className=" justify-between min-h-screen flex w-full sticky top-0 items-center md:items-start flex-col gap-2 ">
				<li className="w-full hidden lg:block">
					<Link href={"/"} className="lg:flex">
						<Image
							className="mx-auto w-fit pt-4"
							src={Logo}
							height={110}
							width={110}
							alt="SATSAT-Ai"
						/>
					</Link>
				</li>
				<li
					tabIndex={0}
					onClick={() => setHideSidebar(true)}
					className="md:ml-6 focus:bg-brand-green mx-auto md:mx-full cursor-pointer my-5 md:my-0 hover:bg-brand-green w-fit p-1 rounded-md"
				>
					<TbLayoutSidebarRightExpand color="white" size={25} />
				</li>
				<ul className="w-full flex flex-col gap-2">
					{dashboardSidebarData.map((routes: IDashboardSidebarData) => {
						if (routes.subPaths) {
							return (
								<PageWithSubPath
									key={routes.name}
									routeWithSubpath={routes}
									pathname={pathname}
								/>
							);
						}
						return (
							<li key={routes.name}>
								<Link
									href={routes.path!}
									className={`${
										pathname === routes.path
											? " bg-mid--yellow md:bg-transparent icon rounded-md shadow-md md:shadow-none text-mid--yellow md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow"
											: "text-white"
									} text-text-normal md:pl-6 w-fit mx-auto md:mx-full rounded-md md:rounded-none justify-center md:justify-start md:w-full flex   cursor-pointer p-2 items-center gap-3 hover:bg-white/10 relative`}
								>
									<div className="flex items-center gap-3">
										{routes.icon}
										<p className="hidden md:flex">{routes.name}</p>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
				<li className="flex flex-col mx-3 md:mt-4 gap-7">
					<div className="md:mt-7 active:scale-[1.01] select-none flex flex-col cursor-pointer gap-3 gradient-upgrade rounded-3xl p-5 shadow-md">
						<RocketLaunchIcon fontSize="large" color={"primary"} />
						<h3 className="my-0 hidden md:flex font-medium text-text-normal">
							UPGRADE PLAN
						</h3>
						<p className="hidden md:flex text-[13px] font-normal">
							Upgrade your current plan and enjoy amazing features
						</p>
					</div>
					<div className="bg-white/10 w-fit mb-3 md:w-full mx-auto hover:bg-brand-green-darker cursor-pointer active:scale-[1.01] p-3 rounded-md flex items-center gap-3">
						<LogoutIcon fontSize="medium" color={"primary"} />
						<p className="hidden md:flex">Logout</p>
					</div>
				</li>
			</ul>
		</>
	);
};
export default DashboardSidebarWithData;
