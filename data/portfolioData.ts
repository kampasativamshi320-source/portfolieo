import { Skill, Project, Experience, Education, Certification } from "@/types";

export const PERSONAL_INFO = {
  name: "Kampasati Vamshi",
  shortName: "Vamshi",
  title: "Data Analyst & Machine Learning Engineer",
  subtitle: "Computer Science Undergraduate | Python & SQL Specialist | Full-Stack Enthusiast",
  location: "Hyderabad, India",
  email: "kampaasativamshi@gmail.com",
  phone: "+91 9014437124",
  linkedin: "https://linkedin.com/in/kampasati-vamshi",
  github: "https://github.com/kampasativamshi",
  summary:
    "Computer Science undergraduate with a strong passion for data analysis, machine learning, Python, SQL, and data visualization. Experienced in developing real-time computer vision models (YOLOv8 & LSTM), predictive analytics workflows, and enterprise data solutions. Quick learner with strong communication skills, an analytical mindset, and a commitment to transforming complex raw data into actionable business intelligence.",
  bioHighlights: [
    "Expertise in Python, SQL, Pandas, NumPy, and Matplotlib data pipelines.",
    "Built hybrid real-time computer vision & traffic forecasting system using YOLOv8 & LSTM.",
    "Completed Deloitte Data Analytics Job Simulation with high honors.",
    "Proven track record in data cleaning, exploratory data analysis, and predictive modeling.",
  ],
  stats: [
    { label: "Secondary School Score", value: "100%" },
    { label: "B.Tech Specialization", value: "CSE" },
    { label: "Key ML & CV Projects", value: "4+" },
    { label: "Certifications", value: "Deloitte+" },
  ],
  languages: ["English", "Telugu", "Hindi"],
};

export const SKILLS: Skill[] = [
  // Data & ML
  { name: "Python", category: "Data & ML", level: 92, proficiency: "Expert", iconName: "FileCode" },
  { name: "SQL", category: "Data & ML", level: 90, proficiency: "Expert", iconName: "Database" },
  { name: "Pandas", category: "Data & ML", level: 88, proficiency: "Advanced", iconName: "Table" },
  { name: "NumPy", category: "Data & ML", level: 85, proficiency: "Advanced", iconName: "Cpu" },
  { name: "Matplotlib / Visualization", category: "Data & ML", level: 88, proficiency: "Advanced", iconName: "BarChart3" },
  { name: "YOLOv8 & OpenCV", category: "Data & ML", level: 84, proficiency: "Advanced", iconName: "Eye" },
  { name: "TensorFlow & LSTM", category: "Data & ML", level: 80, proficiency: "Proficient", iconName: "Brain" },
  
  // Frontend
  { name: "HTML5 & CSS3", category: "Frontend", level: 92, proficiency: "Expert", iconName: "Code" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 88, proficiency: "Advanced", iconName: "FileSpreadsheet" },
  { name: "React.js", category: "Frontend", level: 85, proficiency: "Advanced", iconName: "Layers" },
  { name: "Next.js", category: "Frontend", level: 82, proficiency: "Proficient", iconName: "Globe" },
  { name: "Tailwind CSS", category: "Frontend", level: 90, proficiency: "Expert", iconName: "Palette" },
  
  // Backend & DB
  { name: "Node.js", category: "Backend & DB", level: 80, proficiency: "Proficient", iconName: "Server" },
  { name: "Express.js", category: "Backend & DB", level: 78, proficiency: "Proficient", iconName: "Workflow" },
  { name: "MySQL", category: "Backend & DB", level: 88, proficiency: "Advanced", iconName: "Database" },
  { name: "RDBMS Concepts", category: "Backend & DB", level: 90, proficiency: "Expert", iconName: "HardDrive" },
  
  // Tools & Others
  { name: "Git & GitHub", category: "Tools & Others", level: 90, proficiency: "Expert", iconName: "GitBranch" },
  { name: "VS Code", category: "Tools & Others", level: 95, proficiency: "Expert", iconName: "Terminal" },
  { name: "MS Excel", category: "Tools & Others", level: 88, proficiency: "Advanced", iconName: "Sheet" },
  { name: "Vercel & Deployment", category: "Tools & Others", level: 85, proficiency: "Advanced", iconName: "Cloud" },
  { name: "UML Architecture", category: "Tools & Others", level: 82, proficiency: "Proficient", iconName: "Box" },
];

export const PROJECTS: Project[] = [
  {
    id: "realtime-vehicle-detection",
    title: "Realtime Vehicle Detection & Tracking Framework",
    subtitle: "Hybrid Computer Vision & LSTM Traffic Forecasting Architecture",
    description:
      "Developed a hybrid traffic management system integrating YOLOv8 for real-time vehicle detection and LSTM neural networks for traffic flow prediction, providing adaptive navigation and emergency response routing.",
    longDescription:
      "This framework addresses urban traffic congestion by capturing live video feeds, applying YOLOv8 deep learning algorithms for multi-class vehicle detection, and passing real-time count sequences into an LSTM network for predictive congestion forecasting. Features custom Python evaluation modules using TensorFlow, OpenCV, NumPy, and Pandas.",
    category: "AI & ML",
    image: "/images/projects/vehicle-detection.jpg",
    technologies: ["YOLOv8", "LSTM", "Python", "TensorFlow", "OpenCV", "NumPy", "UML"],
    highlights: [
      "Integrated YOLOv8 for 95%+ precision real-time vehicle detection across multi-lane highways.",
      "Engineered LSTM neural network module for dynamic traffic congestion forecasting up to 30 minutes in advance.",
      "Implemented high-performance Python data pipelines processing large-scale video stream frames efficiently.",
      "Architected system using UML sequence and component diagrams for modular software deployment.",
    ],
    githubUrl: "https://github.com/kampasativamshi/realtime-vehicle-detection",
    liveUrl: "https://vehicle-tracking-ai.vercel.app",
    featured: true,
  },
  {
    id: "predictive-data-analytics-dashboard",
    title: "Predictive Data Analytics & Insights Engine",
    subtitle: "Automated Data Cleaning, SQL Query Optimization & Business Intelligence",
    description:
      "A comprehensive data analysis dashboard leveraging Python, SQL, and interactive web visualizations to process raw enterprise datasets into actionable predictive charts and key performance metrics.",
    longDescription:
      "Built to streamline data exploration, automated data cleaning, and statistical hypothesis testing. Queries structured MySQL databases, executes Pandas data transformations, and renders real-time interactive charts with React and Tailwind CSS.",
    category: "Data Analytics",
    image: "/images/projects/data-analytics.jpg",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "React", "Next.js"],
    highlights: [
      "Automated complex ETL operations reducing raw data cleaning and normalization time by 60%.",
      "Wrote complex MySQL analytical queries utilizing Window Functions, CTEs, and indexed aggregations.",
      "Designed dynamic dark-themed dashboard UI for interactive data exploration.",
    ],
    githubUrl: "https://github.com/kampasativamshi/data-analytics-dashboard",
    liveUrl: "https://data-insights-engine.vercel.app",
    featured: true,
  },
  {
    id: "deloitte-analytics-simulation",
    title: "Deloitte Data Analytics Case Solution",
    subtitle: "Enterprise Data Cleansing, Forecasting & Strategic Reporting",
    description:
      "Comprehensive data analytics solution created during Deloitte's job simulation, focusing on dataset hygiene, strategic business storytelling, and exploratory data visualization.",
    longDescription:
      "Simulated real-world corporate consulting scenario. Cleaned unstructured data, performed exploratory data analysis (EDA), and delivered strategic recommendations based on quantitative trends and predictive indicators.",
    category: "Data Analytics",
    image: "/images/projects/deloitte-analytics.jpg",
    technologies: ["Python", "SQL", "Excel", "Data Cleaning", "Matplotlib", "Data Visualization"],
    highlights: [
      "Evaluated high-volume corporate dataset for anomalies, missing values, and variance distribution.",
      "Generated executive summary dashboards illustrating growth opportunities and operational bottlenecks.",
      "Awarded official Deloitte Data Analytics Job Simulation Certification.",
    ],
    githubUrl: "https://github.com/kampasativamshi/deloitte-data-simulation",
    liveUrl: "https://deloitte-analytics-case.vercel.app",
    featured: true,
  },
  {
    id: "smart-traffic-emergency-dispatch",
    title: "Smart Urban Mobility & Emergency Corridor",
    subtitle: "Full-Stack Web Portal & Geographic Signal Controller",
    description:
      "Full-stack web application designed for municipal traffic authorities to monitor congestion hotspots and dynamically clear green corridors for emergency medical vehicles.",
    longDescription:
      "Built with React, Next.js, Node.js, Express, and MySQL. Provides real-time dashboard alerts, map plotting, and automated route adjustments to minimize emergency vehicle response times.",
    category: "Full Stack",
    image: "/images/projects/emergency-traffic.jpg",
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    highlights: [
      "Built RESTful API backend using Express.js and MySQL for real-time sensor node registration.",
      "Designed high-tech glassmorphism web console with responsive mobile controller view.",
      "Optimized database index structures for sub-10ms query latency during peak load simulation.",
    ],
    githubUrl: "https://github.com/kampasativamshi/smart-mobility-portal",
    liveUrl: "https://smart-mobility-dispatch.vercel.app",
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "deloitte-simulation",
    company: "Deloitte",
    role: "Data Analytics Job Simulation Participant",
    location: "Virtual / Remote",
    duration: "2024",
    type: "Virtual Simulation",
    responsibilities: [
      "Executed data cleaning and preparation workflows on complex corporate datasets using Python and Excel.",
      "Designed data visualization charts to communicate strategic business insights and key performance metrics.",
      "Applied analytical frameworks to model customer trends, revenue optimization, and risk metrics.",
      "Drafted comprehensive analytical summaries tailored for executive decision-makers.",
    ],
    technologies: ["Python", "SQL", "Excel", "Data Cleaning", "Data Visualization"],
  },
  {
    id: "cse-research-lead",
    company: "Gurunanak Institute of Technology",
    role: "AI & Computer Vision Project Lead",
    location: "Hyderabad, India",
    duration: "2023 - Present",
    type: "Project Lead",
    responsibilities: [
      "Led team in architecture design, data collection, and algorithm implementation for real-time vehicle tracking.",
      "Integrated YOLOv8 object detection with LSTM neural networks to predict urban traffic flow.",
      "Designed comprehensive UML class, sequence, and system architecture diagrams.",
      "Tested system scalability and throughput across high-resolution highway video streams.",
    ],
    technologies: ["YOLOv8", "LSTM", "TensorFlow", "OpenCV", "Python", "MySQL"],
  },
];

export const EDUCATIONS: Education[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology - Computer Science & Engineering",
    institution: "Gurunanak Institute of Technology",
    location: "Hyderabad, Telangana",
    year: "2022 - 2026",
    percentageOrGpa: "Pursuing (Final Year)",
    details:
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Software Engineering, Machine Learning, and Computer Networks.",
  },
  {
    id: "intermediate-mpc",
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    institution: "Sri Chaitanya Junior College",
    location: "Khammam, Telangana",
    year: "2020 - 2022",
    percentageOrGpa: "84.2%",
    details:
      "Rigorous pre-university academic focus on Higher Mathematics, Calculus, Applied Physics, and Analytical Chemistry.",
  },
  {
    id: "secondary-school",
    degree: "Secondary School Education (Class X)",
    institution: "Resonance Info School",
    location: "Telangana, India",
    year: "2019 - 2020",
    percentageOrGpa: "100%",
    details:
      "Achieved 100% perfect academic score. Recognized for overall academic excellence and logical reasoning competitions.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "deloitte-analytics-cert",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "2024",
    description:
      "Demonstrated practical expertise in data analysis, data cleaning, strategic visualization, and decision reporting.",
    skills: ["Data Analysis", "Data Cleaning", "Business Intelligence", "Python"],
    icon: "Award",
  },
  {
    id: "python-data-science-cert",
    title: "Python for Data Science & Analytics",
    issuer: "Technical Training & Certification",
    year: "2023",
    description:
      "Comprehensive mastery of Python programming, NumPy matrix operations, Pandas dataframes, and Matplotlib plotting.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    icon: "Code2",
  },
  {
    id: "sql-rdbms-mastery",
    title: "Relational Database & MySQL Mastery",
    issuer: "Database Engineering Program",
    year: "2023",
    description:
      "In-depth focus on relational schema design, ER modeling, SQL queries, joins, indexes, and normalization.",
    skills: ["MySQL", "SQL", "RDBMS", "Database Optimization"],
    icon: "Database",
  },
];
