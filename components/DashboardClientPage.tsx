"use client";

import DonutChart from "@/components/DoughnutChart";
import IncomeTable from "@/components/IncomeTable";
import LineChart from "@/components/LineChart";
import PieCharts from "@/components/PieCharts";
import StatementSelector from "@/components/StatementSelector";
import { AppContext } from "@/context/AppContext";
import { ItransactionsData } from "@/interface";
import { useContext } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const DashboardClientPage = () => {
	const { hideSidebar, setShowNotification, setShowMoreOptions } =
		useContext(AppContext);

	const data = [
		{ id: 0, value: 10, label: "series A" },
		{ id: 1, value: 15, label: "series B" },
		{ id: 2, value: 20, label: "series C" },
	];

	const data2 = [
		{ id: 0, value: 10, label: "series A" },
		{ id: 1, value: 15, label: "series B" },
		{ id: 2, value: 20, label: "series C" },
		{ id: 3, value: 26, label: "series D" },
		{ id: 4, value: 30, label: "series E" },
		{ id: 5, value: 50, label: "series F" },
	];

	const transactionsData: ItransactionsData[] = [
		{
			id: "debit_Transaction",
			data: [
				{
					percentage: "62%",
					name: "Debit",
					color: "#29a173",
				},
				{
					percentage: "31%",
					name: "E-Levy",
					color: "#174634",
				},
				{
					percentage: "11%",
					name: "Fees",
					color: "#c18e3b",
				},
			],
		},
		{
			id: "credit_Transaction",
			data: [
				{
					percentage: "22%",
					name: "Credits",
					color: "navy",
				},
				{
					percentage: "31%",
					name: "E-Levy",
					color: "crimson",
				},
				{
					percentage: "11%",
					name: "Fees",
					color: "indigo",
				},
			],
		},
		{
			id: "top_Transaction",
			data: [
				{
					percentage: "73%",
					name: "Transactions",
					color: "gold",
				},
				{
					percentage: "11%",
					name: "E-Levy",
					color: "gold",
				},
				{
					percentage: "61%",
					color: "gold",
					name: "Fees",
				},
			],
		},
	];

	const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs("2020-04-17"));
	const [toDate, setToDate] = useState<Dayjs | null>(dayjs("2023-07-27"));

	// console.log(dayjs(fromDate).format("YYYY-MM-DD"));

	return (
		<div
			onClick={() => (setShowNotification(false), setShowMoreOptions(false))}
			className="min-h-screen text-white sm:px-3 my-max z-10 "
		>
			<div className="flex flex-col lg:flex-nowrap justify-between flex-wrap sm:flex-row items-center gap-5 py-3">
				<div className="flex items-center gap-3">
					<h1 className="text-[35px] w-fit md:text-[45px] m-0 text-center lg:text-left ">
						Dashboard
					</h1>
				</div>
				{/* statement and date selector */}
				<StatementSelector
					fromDate={fromDate}
					toDate={toDate}
					setFromDate={setFromDate}
					setToDate={setToDate}
				/>
			</div>
			<div
				className={`grid grid-cols-1 ${
					hideSidebar ? "sm:grid-cols-2" : "sm:grid-cols-1"
				} lg:grid-cols-3 gap-5 mt-7`}
			>
				<PieCharts
					data={data}
					endAngle={180}
					title="Total Debits "
					transactionsData={transactionsData[0]}
					colors={["#29a173", "#174634", "#c18e3b"]}
					hideSidebar={hideSidebar}
				/>
				<PieCharts
					data={data}
					endAngle={180}
					title="Top Credits "
					transactionsData={transactionsData[1]}
					colors={["navy", "crimson", "indigo"]}
					hideSidebar={hideSidebar}
				/>
				<PieCharts
					transactionsData={transactionsData[2]}
					data={data2}
					endAngle={360}
					colors={[
						"#29a173",
						"#174634",
						"#c18e3b",
						"navy",
						"crimson",
						"indigo",
					]}
					title="Top Debits"
					hideSidebar={hideSidebar}
				/>
			</div>
			<div className="my-7 bg-white/10 p-2 sm:p-5 grid grid-cols-1 items-center lg:grid-cols-2 w-full justify-between gap-7 rounded-2xl">
				<DonutChart />
				<div className="">
					<h3 className="text-text-24 sm:text-[35px] text-white font-bold text-center">
						Top 5 Income Sources
					</h3>
					<div className="overflow-x-auto w-full">
						<IncomeTable />
					</div>
				</div>
			</div>
			<LineChart />
		</div>
	);
};

export default DashboardClientPage;
