"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SubscribeButton = ({
	name,
	buttonType,
}: {
	name: string;
	buttonType: string;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams!);

	const handlePlan = () => {
		params.set("plan", buttonType);
		if (buttonType === "enterprise") {
			router.replace(`/contact?${params}`);
		} else {
			router.replace(`/signup?${params}`);
		}
	};

	return (
		<button
			onClick={handlePlan}
			type="button"
			className="w-full shadow-md button block text-center font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
		>
			{name}
		</button>
	);
};

export default SubscribeButton;
