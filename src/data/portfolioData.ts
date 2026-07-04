export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  status: "Ongoing" | "Completed" | "In Development" | "Coming Soon";
  githubUrl?: string;
  isComingSoon?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export const profile: Profile = {
  name: "Gaurav",
  role: "Computer Science Engineering Student",
  email: "gaurav20282.becse24@chitkara.edu.in",
  phone: "+91 8288823345",
  github: "https://github.com/gauravu82274927",
  linkedin: "https://linkedin.com/in/gaurav-khatri-6a596a2a8/",
  resumeUrl: "#" // Will download a custom generated dynamic PDF or show modal
};

export const education: Education = {
  school: "Chitkara University, Punjab",
  degree: "Bachelor of Engineering — Computer Science Engineering",
  duration: "2024 – 2028",
  cgpa: "8.94"
};

export const aboutContent = {
  bio: [
    "I'm a Computer Science student who enjoys solving problems and building applications that are practical, scalable, and user-friendly.",
    "I have experience with backend development and I'm currently specializing in native iOS development using Swift and UIKit.",
    "I'm passionate about learning new technologies and creating software that makes a real impact."
  ],
  currentFocus: [
    "Native iOS Development",
    "Swift & UIKit",
    "Backend Development",
    "Problem Solving",
    "Offline-first Applications"
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Swift", "Java", "JavaScript", "Python", "C", "C++"]
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    category: "Mobile (iOS)",
    skills: ["Swift", "UIKit", "Xcode"]
  },
  {
    category: "Currently Learning",
    skills: ["SwiftUI", "Core Data", "MVVM", "REST APIs", "Apple Human Interface Guidelines"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Xcode"]
  }
];

export const projects: Project[] = [
  {
    id: "gyansetu",
    title: "GyanSetu",
    description: "Offline-first education platform designed to improve learning accessibility in rural areas with unreliable internet connectivity.",
    features: [
      "Offline-first architecture",
      "IndexedDB local storage",
      "Local file management",
      "Backend services sync",
      "Responsive navigation & adaptive layouts"
    ],
    status: "Ongoing",
    githubUrl: "https://github.com/gauravu82274927"
  },
  {
    id: "foodly",
    title: "Foodly",
    description: "Responsive food ordering website built using modern frontend technologies.",
    features: [
      "Responsive fluid layouts",
      "Interactive checkout & cart UX",
      "Supercharged page loading speed",
      "Modern sleek card layouts"
    ],
    status: "Completed",
    githubUrl: "https://github.com/gauravu82274927"
  },
  {
    id: "native-ios-apps",
    title: "Native iOS Apps",
    description: "Currently building native iOS applications using Swift, UIKit, and Xcode through my iOS specialization.",
    features: [
      "Swift & UIKit core foundations",
      "Auto Layout & programmatic UI",
      "Standard design systems matching Apple HIG",
      "Local persistence with iOS sandboxing"
    ],
    status: "Coming Soon",
    isComingSoon: true
  }
];

export const achievements: Achievement[] = [
  {
    title: "Solved 60+ DSA problems on LeetCode",
    description: "Consistently sharpening problem-solving skills, focusing on arrays, strings, and fundamental data structures."
  },
  {
    title: "HP Power Lab 2.0 Hackathon Participant",
    description: "Collaborated in an intensive hackathon environment, building hardware-adjacent or responsive software solutions."
  },
  {
    title: "Star Programmer",
    description: "Awarded for exceptional coding discipline, accuracy, and quick turnaround in competitive programming events."
  },
  {
    title: "Level 3 Conqueror — Ninja Slayground 2.0",
    description: "Mastered algorithmic challenges and timed problem sprints under competitive, high-pressure environments."
  }
];

export const certifications: Certification[] = [
  { name: "Cloud Computing" },
  { name: "Cybersecurity" },
  { name: "Agile Development" }
];
