import emoji from "react-easy-emoji";

export const greetings = {
	name: "Pranav Bobde",
	title: "Hi, I'm Pranav Bobde",
	description:
		"I'm passionate Full Stack web developer having experience in building full stack applications with JavaScript / VueJs / Reactjs / Nodejs / Python / AWS and some other cool libraries and frameworks.",
	resumeLink:
		"https://drive.google.com/file/d/1SbxYzzMBHBMgDLfNYlyTcyfGtNvC8YlT/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Pranav-Bobde",
};

export const contact = {};

export const socialLinks = {
	// url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/pranav-bobde-b95010194",
	github: "https://github.com/Pranav-Bobde/",
	instagram: "https://www.instagram.com/bobdep31/",
	// facebook: "https://www.facebook.com/1hanzla100",
	twitter: "http://twitter.com/PranavBobde",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Aggressive learner & tech enthusiast who is always willing to learn and work across technologies and domains",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive multi-platform applications usgin VueJs (Quasar)"
				),
				// emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs with NodeJs & ExpressJs"
				),
				emoji(
					"⚡ Building GraphQL APIs with NodeJs"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Vuejs",
					fontAwesomeClassname: "logos:vue",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "vscode-icons:file-type-node",
				},
				{
					skillName: "GraphQL",
					fontAwesomeClassname: "vscode-icons:file-type-graphql",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "vscode-icons:file-type-git",
				},
				{
					skillName: "Unix",
					fontAwesomeClassname: "logos:ubuntu",
				},
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience of working with AWS, Heroku, Netlify, Vercel"
				),
				emoji(
					"⚡ Experience of DNS, Hosting & Domain Management (Hostinger, Cloudflare, Netlify)"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Vercel",
					fontAwesomeClassname: "logos:vercel",
				},
				{
					skillName: "Netlify",
					fontAwesomeClassname: "logos:netlify",
				},
				{
					skillName: "Cloudflare",
					fontAwesomeClassname: "logos:cloudflare",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "75",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

// export const educationInfo = [
// 	{
// 		schoolName: "Shri Ramdeobaba College Of Engineering And Management",
// 		subHeader: "Bachelors in Computer Science & Engineering",
// 		duration: "2019 - April 2023",
// 		desc: "Participated in the research of XXX and published 3 papers.",
// 		grade: "Grade A",
// 		descBullets: [
// 			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
// 		],
// 	},
// ];

export const experience = [
	{
		role: "Software Developer Intern",
		company: "Tesler",
		companylogo: "/img/icons/common/radius-logo.png",
		date: "Sept 2021 – Apr 2022",
		descBullets: [
			"Worked with the design team and senior software engineers and practiced agile methodologies to build customized software products for consumers.",
			"Analyzed source code to identify functionality issues.",
			"Contributed to deployments by resolving issues for optimal results.",
			"Debugged and resolved 35+ issues during the releasing phase & 60+ overall and helped in the successful release of Radius 1.0.",
			"Added Tally Integration (wrote aws lambdas) as the main feature with many other minor features.",
			"Assigned to integrate messaging service in a client’s project.",
			"Tech Stack: Quasar Framework, HTML, CSS, Vuejs, AWS, GraphQL."
		],	
	},
	{
		role: "Contributor (Open Source)",
		company: "Oppia",
		companylogo: "/img/icons/common/oppia-logo.png",
		date: "Apr 2021 – Sept 2021",
		descBullets: [
			"Learned some of the best practices, while first time working on a real-world large software systems codebase.",
			"Participated in weekly SCRUM meetings where current blockages and future tasks were discussed.",
			"Merged my very first PRs (Pull Requests)",
			"https://github.com/oppia/oppia-android/pull/3013",
			"https://github.com/oppia/oppia-android/pull/3630",
			"https://github.com/oppia/oppia-android/pull/3806"
		],
	},
];

export const projects = [
	{
		name: "medium-clone",
		desc: "Medium Clone built with Next.js (ISR), Tailwind CSS, and Firebase",
		github: "https://github.com/Pranav-Bobde/medium-clone",
		link: "https://blog.pranavbobde.tech/",
	},
	{
		name: "insta-clone",
		desc: "Instagram Clone built with Next.js, NextAuth, Recoil, Firebase v9 & Tailwind CSS",
		github: "https://github.com/Pranav-Bobde/instagram-clone",
	},
	{
		name: "gmail-clone",
		desc: "Gmail Clone built with React, React-Router, Redux & Firebase",
		github: "https://github.com/1hanzla100/django-react-forum",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Pranav Bobde",
	description:
		"A passionate Full Stack Web Developer",
	author: "Pranav Bobde",
	image: "",
	url: "http://pranavbobde.tech/",
	keywords: [
		"Pranav",
		"Bobde",
		"Pranav-Bobde",
		"Pranav Bobde",
		"Portfolio",
		"Pranav Portfolio ",
		"Pranav Bobde Portfolio ",
		"Pranav-Bobde Portfolio ",
		"Hanzla Tauqeer Portfolio",
	],
}
