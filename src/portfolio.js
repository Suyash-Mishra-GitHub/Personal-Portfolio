/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Suyash's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Suyash Mishra Portfolio",
    type: "website",
    url: "http://SuyashMishra.com/",
  },
};

//Home Page
const greeting = {
  title: "Suyash Mishra",
  logo_name: "SuyashMishra",
  nickname: "JR. WEB DEVELOPER",
  subTitle:
    "Innovative builder of robust solutions that merge social and technical systems for real change.",
  resumeLink:
    "https://drive.google.com/file/d/17r9LD8HpxBcUxHQc-pRd5Ns6qZx1SMk8/view",
  portfolio_repository: "https://github.com/Suyash-Mishra-GitHub/Portfolio-Website",
  githubProfile: "https://github.com/Suyash-Mishra-GitHub",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/suyash-mishra",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/Suyash-Mishra-4b125021b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:suyashmishra06@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100052655829717",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/autophile_pranee?igsh=MTVxMjRoMGlhNXdieA==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Technology",
      fileName: "FrontendTechImg",
      skills: [
        "⚡ HTML, CSS, Bootstrap",
        "⚡ JavaScript, jQuery, ECMAScript, AJAX",
        "⚡ React.js",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563D7C",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Backend Technology",
      fileName: "BackendTechImg",
      skills: [
        "⚡ PHP",
        "⚡ Laravel (Framework)",
        "⚡ Node.js (Basic)",
        "⚡ Express JS (Basic)",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos-php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Databases",
      fileName: "DatabasesImg",
      skills: [
        "⚡ MSSQL",
        "⚡ MySQLi",
        "⚡ MongoDB (Basic)",
        "⚡ Firebase (Basic)",
      ],
      softwareSkills: [
        {
          skillName: "MSSQL",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Version Control & Tools",
      fileName: "VersionControlImg",
      skills: [
        "⚡ Git, GitHub",
        "⚡ SDLC (Software Development Life Cycle)",
        "⚡ Postman",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F1502F",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Polytechnic",
      iconifyClassname: "simple-icons:school",
      style: {
        color: "#D5A6A8", 
      },
      profileLink: "https://yourpolytechnicwebsite.com", 
    },
    {
      siteName: "Intermediate",
      iconifyClassname: "simple-icons:school",
      style: {
        color: "#7B92AB", 
      },
      profileLink: "https://yourintermediatecollegewebsite.com",
    },
    {
      siteName: "High School",
      iconifyClassname: "simple-icons:school",
      style: {
        color: "#4A90E2", 
      },
      profileLink: "https://yourhighschoolwebsite.com", 
    },
    {
      siteName: "B.Tech",
      iconifyClassname: "simple-icons:school",
      style: {
        color: "#9B59B6", 
      },
      profileLink: "https://yourbtechcollegewebsite.com",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Khwaja Moinuddin Chishti Language University Lucknow, Uttar-Pradesh",
      subtitle: "Master of Computer Applications (MCA)",
      logo_path: "kmclu_logo2.png",
      alt_name: "kmclu LKO",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Proficient in PHP with a strong understanding of object-oriented programming principles. Developed several applications using Laravel as the framework.",
        "⚡ Experienced in Laravel for building RESTful APIs and MVC applications. Familiar with Laravel features like Eloquent ORM, Blade templating engine, and Laravel Mix for asset compilation",
        "⚡ Skilled in using MySQL and PostgreSQL. Designed and optimized database schemas for web applications to enhance performance and data integrity.",
      ],
      website_link: "https://kmclu.ac.in/",
    },
    {
      title: "Gyanodaya Degree Collage Lucknow, Uttar Pradesh",
      subtitle: "Bachelor of Computer Applications (BCA)",
      logo_path: "gyanodaya_logo2.png",
      alt_name: "Gyanodaya degree college",
      duration: "2018 - 2021",
      descriptions: [
        "⚡  Completed coursework in Operating Systems, Computer Networks, Web Design, Software Engineering, Database Management Systems, Data Structures, and Algorithms.",
        "⚡ Developed a dynamic web application using PHP and Laravel, implementing features such as user authentication, data management, and RESTful APIs, resulting in a seamless user experience.",
        "⚡ Managed database operations using MySQL, ensuring efficient data storage, retrieval, and security for web applications.",
      ],
      website_link: "https://gyanodayadegreecollege.in/"
    },    
  ],
};
const certifications = {
  certifications: [
    {
      title: "ECMAScript",
      subtitle: "7Search PPC - Premium Advertising & Monetization Platform · Lucknow, Uttar Pradesh, India · Hybrid",
      icon_name: "js", // Example using FontAwesome
      certificate_link: "https://example.com/certification/7search-ecmascript",
      alt_name: "7Search PPC",
      color_code: "#123456",
      skills: ["JavaScript", "ECMAScript"]
    },
    {
      title: "Express.js",
      subtitle: "Logelite Pvt. Ltd. · Mahanagar - Lucknow · On-site",
      icon_name: "node-js", // Example using FontAwesome
      certificate_link: "https://example.com/certification/logelite-expressjs",
      alt_name: "Logelite Pvt. Ltd.",
      color_code: "#654321",
      skills: ["Express.js", "Node.js"]
    },
    {
      title: "Microsoft SQL Server",
      subtitle: "Diston Infotech Pvt Ltd · Dehradun, Uttarakhand, India",
      icon_name: "microsoft", // Example using FontAwesome
      certificate_link: "https://example.com/certification/diston-mssqlserver",
      alt_name: "Diston Infotech Pvt Ltd",
      color_code: "#987654",
      skills: ["Microsoft SQL Server", "SQL"]
    },
    {
      title: "React.js",
      subtitle: "7Search PPC - Premium Advertising & Monetization Platform · Lucknow, Uttar Pradesh, India · Hybrid",
      icon_name: "react", // Example using FontAwesome
      certificate_link: "https://example.com/certification/7search-reactjs",
      alt_name: "7Search PPC",
      color_code: "#123456",
      skills: ["React.js", "JavaScript"]
    },
    {
      title: "Laravel",
      subtitle: "Logelite Pvt. Ltd. · Mahanagar - Lucknow · On-site",
      icon_name: "laravel", // Example using FontAwesome
      certificate_link: "https://example.com/certification/logelite-laravel",
      alt_name: "Logelite Pvt. Ltd.",
      color_code: "#654321",
      skills: ["Laravel", "PHP"]
    },
    {
      title: "MySQLi",
      subtitle: "Diston Infotech Pvt Ltd · Dehradun, Uttarakhand, India",
      icon_name: "sql", // Example using FontAwesome
      certificate_link: "https://example.com/certification/diston-mysqli",
      alt_name: "Diston Infotech Pvt Ltd",
      color_code: "#987654",
      skills: ["MySQLi", "SQL"]
    },
    {
      title: "Vanilla JavaScript",
      subtitle: "Diston · Dehradun, Uttarakhand, India",
      icon_name: "js", // Example using FontAwesome
      certificate_link: "https://example.com/certification/Diston-vanilla-js",
      alt_name: "Diston",
      color_code: "#ABCDEF",
      skills: ["Vanilla JavaScript", "JavaScript"]
    },
    {
      title: "JavaScript",
      subtitle: "7Search PPC - Premium Advertising & Monetization Platform · Lucknow, Uttar Pradesh, India · Hybrid",
      icon_name: "js", // Example using FontAwesome
      certificate_link: "https://example.com/certification/7search-javascript",
      alt_name: "7Search PPC",
      color_code: "#123456",
      skills: ["JavaScript"]
    },
    {
      title: "CSS",
      subtitle: "Logelite Pvt. Ltd. · Mahanagar - Lucknow · On-site",
      icon_name: "css3", // Example using FontAwesome
      certificate_link: "https://example.com/certification/logelite-css",
      alt_name: "Logelite Pvt. Ltd.",
      color_code: "#654321",
      skills: ["CSS", "Web Development"]
    },
    {
      title: "SQL",
      subtitle: "Diston Infotech Pvt Ltd · Dehradun, Uttarakhand, India",
      icon_name: "sql", // Example using FontAwesome
      certificate_link: "https://example.com/certification/diston-sql",
      alt_name: "Diston Infotech Pvt Ltd",
      color_code: "#987654",
      skills: ["SQL"]
    },
    {
      title: "HTML5",
      subtitle: "Diston · Dehradun, Uttarakhand, India",
      icon_name: "html5", // Example using FontAwesome
      certificate_link: "https://example.com/certification/Diston-html5",
      alt_name: "Diston",
      color_code: "#ABCDEF",
      skills: ["HTML5"]
    },
    {
      title: "Node.js",
      subtitle: "Logelite Pvt. Ltd. · Mahanagar - Lucknow · On-site",
      icon_name: "node-js", // Example using FontAwesome
      certificate_link: "https://example.com/certification/logelite-nodejs",
      alt_name: "Logelite Pvt. Ltd.",
      color_code: "#654321",
      skills: ["Node.js"]
    },
    {
      title: "Core PHP",
      subtitle: "Diston Infotech Pvt Ltd · Dehradun, Uttarakhand, India",
      icon_name: "php", // Example using FontAwesome
      certificate_link: "https://example.com/certification/diston-core-php",
      alt_name: "Diston Infotech Pvt Ltd",
      color_code: "#987654",
      skills: ["Core PHP", "PHP"]
    },
    {
      title: "PHP",
      subtitle: "Diston · Dehradun, Uttarakhand, India",
      icon_name: "php", // Example using FontAwesome
      certificate_link: "https://example.com/certification/Diston-php",
      alt_name: "Diston",
      color_code: "#ABCDEF",
      skills: ["PHP"]
    },
    {
      title: "MySQL",
      subtitle: "Diston Infotech Pvt Ltd · Dehradun, Uttarakhand, India",
      icon_name: "sql", // Example using FontAwesome
      certificate_link: "https://example.com/certification/diston-mysql",
      alt_name: "Diston Infotech Pvt Ltd",
      color_code: "#987654",
      skills: ["MySQL"]
    },
    {
      title: "MongoDB",
      subtitle: "Logelite Pvt. Ltd. · Mahanagar - Lucknow · On-site",
      icon_name: "mongodb", // Example using FontAwesome
      certificate_link: "https://example.com/certification/logelite-mongodb",
      alt_name: "Logelite Pvt. Ltd.",
      color_code: "#654321",
      skills: ["MongoDB"]
    }
  ]
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Experience, Internship and Trainings",
  description:
    "I have accumulated diverse experience across startups and established companies, specializing in roles such as Designer and Software Architect. My background includes extensive training in full stack development, with hands-on experience using cutting-edge technologies. I am also actively involved in open-source communities and enjoy organizing tech events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      work: true,
      experiences: [
        {
          title: "Jr. Web Developer",
          company: "Logelite Pvt. Ltd.",
          company_url: "https://www.logelite.com",
          logo_path: "logelite.jpeg",
          duration: "March 2024 - Present",
          location: "Mahanagar, Lucknow",
          description:
            "Currently working as a Junior Web Developer at Logelite Pvt. Ltd. My role involves enhancing web applications, focusing on optimizing performance and developing new features. Working with modern technologies such as React and Laravel.",
          color: "#000000",
        },
        {
          title: "Jr. Web Developer",
          company: "7SearchPPC - Premium Advertising & Monetization",
          company_url: "https://www.7searchppc.com/",
          logo_path: "7search.jpeg",
          duration: "March 2024 - Present",
          location: "Mahanagar, Lucknow",
          description:
            "Currently working as a Junior Web Developer at Logelite Pvt. Ltd. My role involves enhancing web applications, focusing on optimizing performance and developing new features. Working with modern technologies such as React and Laravel.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Diston Infotech PVT LTD",
          company_url: "https://www.distoninstitute.com/",
          logo_path: "icon2.png",
          duration: "Aug 2023 - Feb 2024",
          location: "Dehradun, Uttarakhand",
          description:
            "Contributed to the development of scalable web applications and improved existing systems. Focused on implementing new features, optimizing performance, and enhancing user experiences using modern technologies. Gained hands-on experience in both frontend and backend development, working with frameworks and tools such as React, Laravel, and MySQL.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Apprenticeship and Trainings",
    //   experiences: [
    //     {
    //       title: "Full Stack Apprenticeship Program",
    //       company: "Diston Infotech Pvt Ltd",
    //       company_url: "https://www.diston.in/",
    //       logo_path: "icon1.png",
    //       duration: "Aug 2023 - March 2024",
    //       location: "Lucknow",
    //       description:
    //         "Completed an 8-month apprenticeship program with Diston Infotech Pvt Ltd, receiving comprehensive training in full stack development. The program included two intensive 2-month training sessions focusing on Python with Django and Android development with Java.",
    //       color: "#FF5722",
    //     },
    //     {
    //       title: "Full Stack Training - Android with Java",
    //       company: "Diston Infotech Pvt Ltd",
    //       company_url: "https://www.diston.in/",
    //       logo_path: "icon1.png",
    //       duration: "July 2022 - Sep 2022",
    //       location: "Lucknow",
    //       description:
    //         "Completed a 2-month training program in Android development using Java, covering mobile application development and UI/UX design.",
    //       color: "#FF5722",
    //     },
    //     {
    //       title: "Full Stack Training - Python with Django",
    //       company: "Diston Infotech Pvt Ltd",
    //       company_url: "https://www.diston.in/",
    //       logo_path: "icon1.png",
    //       duration: "July 2021 - Sep 2021",
    //       location: "Lucknow",
    //       description:
    //         "Underwent a 2-month intensive training in Python and Django, focusing on backend development and web application design.",
    //       color: "#FF5722",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I specialize in developing and deploying web applications utilizing modern frameworks and cloud infrastructure. My projects harness a variety of cutting-edge technologies, with an emphasis on building robust and scalable solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "On Local Server",
  description: "These  Projects are setup locally not on server",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "chat-application",
      name: "Chat Application",
      createdAt: "2024-09-01T00:00:00Z",
      description: "Developed using Java.",
      url: "https://github.com/yourusername/chat-application", // Update with actual URL
    },
    {
      id: "tracker-extension",
      name: "Tracker Extension for Chrome",
      createdAt: "2024-09-01T00:00:00Z",
      description: "Created using PHP.",
      url: "https://github.com/yourusername/tracker-extension", // Update with actual URL
    },
    {
      id: "games",
      name: "Games",
      createdAt: "2024-09-01T00:00:00Z",
      description: "Developed two or more games using JavaScript.",
      url: "https://github.com/yourusername/games", // Update with actual URL
    },
    {
      id: "task-management-system",
      name: "Task Management System",
      createdAt: "2024-09-01T00:00:00Z",
      description: "Developed using Core PHP, Bootstrap, and MySQL.",
      url: "https://github.com/yourusername/task-management-system", // Update with actual URL
    },
    {
      id: "news-portal",
      name: "News Portal",
      createdAt: "2024-09-01T00:00:00Z",
      description:
        "Created using MySQL, Laravel, and Bootstrap. Also developed a version using Core PHP.",
      url: "https://github.com/yourusername/news-portal", // Update with actual URL
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh3.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Laravel, Php and Open-source Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "New Atal Vihar Colony , Daudnagar , Faizullahganj, Lucknow",
    locality: "Lucknow",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "226020",
    streetAddress: "Daudnagar , Faizullahganj",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.co.in/maps/place/New+Atal+Vihar+Colony+,+Daudnagar+,+Faizullahganj,+Lucknow/@26.9088457,80.9015202,17z/data=!4m14!1m7!3m6!1s0x3999573ff487f6ff:0x2c5d0dbc75804941!2sNew+Atal+Vihar+Colony+,+Daudnagar+,+Faizullahganj,+Lucknow!8m2!3d26.9088409!4d80.9040951!16s%2Fg%2F11swbxzrmx!3m5!1s0x3999573ff487f6ff:0x2c5d0dbc75804941!8m2!3d26.9088409!4d80.9040951!16s%2Fg%2F11swbxzrmx?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
