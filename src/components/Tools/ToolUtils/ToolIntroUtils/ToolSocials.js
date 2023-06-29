import Image from "next/image";
import styles from "@/styles/ToolCard/ToolIntro.module.css";

export default function ToolSocials({ tool }) {
	return (
		<div className="flex flex-col mt-5">
			<p className="text-sm font-medium">Find {tool.name} at:</p>
			<div className="flex items-center self-start mt-3 space-x-5 invert">
				{tool.instagram && (
					<a target="_blank" href={tool.instagram} rel="noreferrer">
						<Image
							className={"cursor-pointer " + styles["social-handle"]}
							width={24}
							height={24}
							src={"/socials/instagram.svg"}
							alt="instagaram favicon"
						/>
					</a>
				)}
				{tool.twitter && (
					<a target="_blank" href={tool.twitter} rel="noreferrer">
						<Image
							className={"cursor-pointer " + styles["social-handle"]}
							width={24}
							height={24}
							src={"/socials/twitter.svg"}
							alt="twitter favicon"
						/>
					</a>
				)}
				{tool.linkedin && (
					<a target="_blank" href={tool.linkedin} rel="noreferrer">
						<Image
							className={"cursor-pointer " + styles["social-handle"]}
							width={24}
							height={24}
							src={"/socials/linkedin.svg"}
							alt="linkedin favicon"
						/>
					</a>
				)}
				{tool.youtube && (
					<a target="_blank" href={tool.youtube} rel="noreferrer">
						<Image
							className={"cursor-pointer " + styles["social-handle"]}
							width={32}
							height={36}
							src={"/socials/youtube.svg"}
							alt="youtube favicon"
						/>
					</a>
				)}
			</div>
		</div>
	);
}
