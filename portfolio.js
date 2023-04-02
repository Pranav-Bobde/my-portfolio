import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Pranav Bobde',
  title: "Hi, I'm Pranav Bobde",
  description:
    "I'm passionate Full Stack web developer having experience in building full stack applications with JavaScript / VueJs / Reactjs / Nodejs / Python / AWS and some other cool libraries and frameworks.",
  resumeLink:
    'https://drive.google.com/file/d/1lKHJCmNb9V_lj_NL7w1NJyR9G7Pqc_eP/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'Pranav-Bobde',
};

export const contact = {};

export const socialLinks = {
  // url: "https://1hanzla100.github.io/",
  linkedin: 'https://www.linkedin.com/in/pranav-bobde-b95010194',
  github: 'https://github.com/Pranav-Bobde/',
  // instagram: "https://www.instagram.com/bobdep31/",
  // facebook: "https://www.facebook.com/1hanzla100",
  twitter: 'http://twitter.com/PranavBobde',
};

export const skillsSection = {
  title: 'Skills',
  subTitle:
    'Aggressive learner & tech enthusiast who is always willing to learn and work across technologies and domains',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        '⚡ Expertise in building responsive, multi-platform applications using Vue.js and Quasar Framework for seamless user experiences across devices.',
        '⚡ Proficient in designing and implementing RESTful APIs with Node.js and Express.js to facilitate seamless data communication between frontend and backend systems.',
        '⚡ Proficient in building and deploying serverless backend services using the AWS Serverless Application Model (SAM) CLI, resulting in cost-effective, scalable, and resilient web applications that automatically manage the underlying infrastructure resources.',
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Vuejs',
          fontAwesomeClassname: 'logos:vue',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassname: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassname: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Git',
          fontAwesomeClassname: 'vscode-icons:file-type-git',
        },
        {
          skillName: 'Unix',
          fontAwesomeClassname: 'logos:ubuntu',
        },
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        '⚡ Hands-on experience working with various cloud service providers such as AWS, Heroku, Netlify, and Vercel for deploying, scaling, and managing web applications.',
        '⚡ Proficient in DNS, Hosting & Domain Management through platforms like Hostinger, Cloudflare, and Netlify, ensuring reliable website performance and accessibility.',
        '⚡ Experienced in configuring and maintaining CI/CD pipelines using tools such as Jenkins/Gitlab-CI to streamline web application deployment and updates.',
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'logos:docker-icon',
        },
        {
          skillName: 'Vercel',
          fontAwesomeClassname: 'logos:vercel',
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassname: 'logos:netlify',
        },
        {
          skillName: 'Cloudflare',
          fontAwesomeClassname: 'logos:cloudflare',
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
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '75',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
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
    role: 'Full Stack Developer Intern',
    company: 'KoffeeLaDo Pvt. Ltd.',
    companylogo: '/img/icons/common/kld.png',
    date: 'Jan 2023 – June 2022',
    descBullets: [
      'Develeoped end-to-end web applications using cutting-edge technologies like Quasar, Vue.js, TypeScript, Tanstack Query, and Zod, ensuring adherence to modern application development practices.',
      'Collaborated in translating Figma designs and wire-frames into responsive, user-friendly front-end interfaces to improve user experience.',
      'Developed and deployed multiple back-end services using AWS SAM Template, which includes AWS Lambda, API Gateway, CloudWatch, and Node.js through AWS CloudFormation.',
      'Implemented robust API token authentication using AWS Authorizers, safeguarding API Gateway routes and ensuring secure data access.',
      'Created CI/CD pipelines for all micro-services front-end application via Jenkins, streamlining application deployment and updates.',
      'Added PWA - Push Notifications feature via service worker web-push, enhancing application functionality and user engagement.',
      'Developed a coins-back service by creating a cron-job utilizing AWS EventBridge and AWS Lambda.',
      'Integrated WhatsApp Login flow using Meta’s WhatsApp for Business API’s and Webhooks, providing users with an effortless authentication process.',
      'Helped devise Business Requirements Document (BRD) and Solutions Architecture Documents for Pilot and POC apps, aligning project goals with stakeholder expectations.',
      'Facilitated successful completion of POC app from concept to launch by working closely with cross-functional teams and driving project progress.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Tesler',
    companylogo: '/img/icons/common/radius-logo.png',
    date: 'Sept 2021 – Apr 2022',
    descBullets: [
      'Collaborated with design teams and senior software engineers in an agile environment to develop customized software products.',
      'Meticulously analyzed source code to identify and address functionality issues, ensuring improved software performance and reliability.',
      'Actively contributed to deployment processes by pinpointing and resolving concerns, optimizing results and facilitating seamless software operations.',
      'Proactively debugged and resolved over 60 issues, including 35+ during the release phase, playing a vital role in the successful launch of Radius 1.0.',
      'Enhanced software capabilities by adding Tally Integration as a primary feature, developing AWS Lambdas, and implementing numerous minor features.',
      'Demonstrated adaptability by working on a critical side project focused on integrating a messaging service into a client’s existing system, resulting in increased client satisfaction.',
      'Utilized a diverse tech stack, including Quasar Framework, HTML, CSS, Vue.js, AWS, and GraphQL, to solve complex problems and deliver high-quality software products.',
    ],
  },
  {
    role: 'Contributor (Open Source)',
    company: 'Oppia',
    companylogo: '/img/icons/common/oppia-logo.png',
    date: 'Apr 2021 – Sept 2021',
    descBullets: [
      'Acquired experience in best practices and industry standards while working on a large-scale, real-world software system codebase',
      'Actively participated in weekly SCRUM meetings, discussing current roadblocks and planned tasks to ensure smooth project progress and effective teamwork.',
      'Gained experience in using version control by successfully merging multiple Pull Requests (PRs) on the Oppia-Android GitHub repository, showcasing collaboration and contribution to open-source projects:',
      'https://github.com/oppia/oppia-android/pull/3013',
      ' https://github.com/oppia/oppia-android/pull/3630',
      'https://github.com/oppia/oppia-android/pull/3806',
    ],
  },
];

export const projects = [
  {
    name: 'todo-menubar-app',
    desc: 'Todo Menubar app build using Quasar, Vue.js and Electron',
    github: 'https://github.com/Pranav-Bobde/todo-menubar',
    link: '',
  },
  {
    name: 'medium-clone',
    desc: 'Medium Clone built with Next.js (ISR), Tailwind CSS, and Firebase',
    github: 'https://github.com/Pranav-Bobde/medium-clone',
    link: 'https://blog.pranavbobde.tech/',
  },
  {
    name: 'insta-clone',
    desc: 'Instagram Clone built with Next.js, NextAuth, Recoil, Firebase v9 & Tailwind CSS',
    github: 'https://github.com/Pranav-Bobde/instagram-clone',
  },
  {
    name: 'gmail-clone',
    desc: 'Gmail Clone built with React, React-Router, Redux & Firebase',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
];

export const feedbacks = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Pranav Bobde',
  description: 'A passionate Full Stack Web Developer',
  author: 'Pranav Bobde',
  image: '',
  url: 'http://pranavbobde.tech/',
  keywords: [
    'Pranav',
    'Bobde',
    'Pranav-Bobde',
    'Pranav Bobde',
    'Portfolio',
    'Pranav Portfolio ',
    'Pranav Bobde Portfolio ',
    'Pranav-Bobde Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};
