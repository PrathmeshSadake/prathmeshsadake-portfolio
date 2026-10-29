import type { ProjectPreview } from "./projects";
import type { Tone } from "./site";

export interface FreelanceProject {
  title: string;
  /** Illustrated window in the card's coloured frame. */
  preview: ProjectPreview;
  tone: Tone;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  link: string;
  linkDisplay: string;
  role: string;
  responsibilities: string[];
  features: string[];
  impact: string[];
}

export const getFreelanceProjects = function (): FreelanceProject[] {
  return [
    {
      title: "Hirrings",
      preview: "ranking",
      tone: "blue",
      shortDescription: "AI-Powered Recruitment Platform",
      fullDescription:
        "Hirrings is an AI-driven hiring platform that helps companies match candidates to open roles and manage their hiring pipeline at scale. I built the platform end-to-end, from frontend UX to backend workflow automation and integrations.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "OpenAI API",
        "Tailwind CSS",
      ],
      link: "https://hirrings.com",
      linkDisplay: "hirrings.com",
      role: "Full-Stack Developer",
      responsibilities: [
        "Led full-stack development of the marketing site and core product experience, starting from a blank repo.",
        "Designed and implemented the data models for jobs, candidates, applications, and AI matches.",
        "Integrated AI services to power intelligent candidate–job matching and skill analysis.",
        "Built automated application tracking flows so recruiters can receive pre-screened applicants directly in their inbox.",
        "Implemented responsive, SEO-friendly pages for employer branding and candidate acquisition.",
      ],
      features: [
        "AI-powered candidate matching that ranks and recommends the best-fit applicants for each role based on skills, experience, and preferences.",
        "Intelligent skill analysis that evaluates applicant profiles and surfaces the most relevant capabilities for a given JD.",
        "Automated application tracking with dashboards and email workflows to streamline screening and follow-ups.",
        "Free job posting flow where employers can publish roles and receive candidates without manual intervention.",
        "High-conversion landing pages showcasing 500K+ openings, 128+ active MNC jobs, and trusted employers.",
      ],
      impact: [
        "Enabled Hirrings to position itself as an AI hiring copilot for both candidates and recruiters, not just another job board.",
        "Reduced manual screening time for HR teams by automating matching, skill analysis, and tracking updates.",
      ],
    },
    {
      title: "FindU",
      preview: "interview",
      tone: "green",
      shortDescription: "AI Medical Interview Prep Platform",
      fullDescription:
        "FindU is an AI-powered platform that helps future healthcare professionals ace medical school and specialty interviews using realistic simulations and feedback. I led the end-to-end implementation of the product experience.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "OpenAI API",
        "AWS",
      ],
      link: "https://findu.io",
      linkDisplay: "findu.io",
      role: "Full-Stack Developer",
      responsibilities: [
        "Built the core interview simulator UI and user dashboard for students to schedule and review AI interviews.",
        "Implemented flows for AI mock interviews, resume analysis, numeracy tests, and progress tracking.",
        "Set up token-based usage and plan logic (free and premium) to support both individual users and institutions.",
      ],
      features: [
        "AI interview simulator supporting multiple formats (MMI, panel, etc.) with specialty-specific questions and scenarios.",
        "Real-time analysis of performance with metrics on communication, confidence, and interview structure.",
        "Instant feedback loops that provide detailed, actionable suggestions after each session.",
        "Progress tracking dashboards so students can monitor improvement over time and identify weak areas.",
        "Onboarding and pricing flows including free tokens, upgrade via organization coupon, and premium feature unlocks.",
      ],
      impact: [
        "Enabled thousands of healthcare applicants to access realistic interview practice 24/7 with measurable performance gains.",
        "Helped institutions offer scalable, AI-driven coaching without adding internal interview coaches.",
      ],
    },
    {
      title: "Talkerz",
      preview: "score",
      tone: "amber",
      shortDescription: "AI English Speaking & Reading Coach",
      fullDescription:
        "Talkerz is an AI-powered learning platform that combines reading comprehension with real-time speaking practice to improve English skills. I developed the full web experience and integrated the AI voice and analytics stack.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Speech APIs",
        "OpenAI API",
        "PostgreSQL",
      ],
      link: "https://www.talkerz.net",
      linkDisplay: "talkerz.net",
      role: "Full-Stack Developer",
      responsibilities: [
        "Implemented the three-step learning flow: choose passage, read and understand, then start AI voice interview.",
        "Integrated AI speech and NLP services to evaluate fluency, pronunciation, grammar, and vocabulary.",
        "Built analytics dashboards and progress reports for learners, accessible across devices.",
        "Ensured a mobile-responsive, low-latency UI so learners can practice on the go.",
      ],
      features: [
        "Interactive reading library with diverse passages across technology, health, and other domains.",
        "AI interviewer that conducts voice conversations, adapts to the learner's level, and asks comprehension-focused questions.",
        "Real-time feedback on speech, including fluency scores, pronunciation hints, and grammar suggestions.",
        "Detailed analytics and progress tracking so users can see improvements over time and target weak skills.",
        "Multi-device, responsive experience with no-credit-card onboarding for frictionless adoption.",
      ],
      impact: [
        "Helped Talkerz grow to 10K+ active learners, 100K+ completed AI interviews, and a 4.9 average rating.",
        "Significantly improved users' speaking confidence and pronunciation through continuous, AI-driven feedback.",
      ],
    },
    {
      title: "Jag My Chef",
      preview: "booking",
      tone: "coral",
      shortDescription: "Online Culinary Service Platform",
      fullDescription:
        "Jag My Chef is a digital platform that connects users with culinary services (such as personal chefs, curated menus, or food experiences) through a modern web presence. I handled the full implementation of the marketing and booking experience.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
      link: "https://jagmychef.com",
      linkDisplay: "jagmychef.com",
      role: "Full-Stack Developer",
      responsibilities: [
        "Built a high-conversion, responsive marketing website to showcase services and brand story.",
        "Implemented booking/contact flows for leads to request services and packages.",
        "Optimized performance and SEO for local and global discoverability.",
      ],
      features: [
        "Clear, visual presentation of chef services, offerings, and differentiators.",
        "Simple inquiry/booking journey to reduce friction from discovery to lead capture.",
        "Mobile-first layout suited for users browsing on phones and tablets.",
      ],
      impact: [
        "Helped the brand translate an offline culinary offering into a credible online presence.",
        "Increased inbound leads by making it easy for visitors to understand services and get in touch.",
      ],
    },
    {
      title: "BayGuard Fire Protection",
      preview: "quote",
      tone: "blue",
      shortDescription: "Safety Services Website",
      fullDescription:
        "BayGuard Fire Protection is a fire protection and safety services company that needed a professional web presence to build trust and generate leads. I developed the entire site from scratch, focusing on clarity, compliance, and conversions.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
      link: "https://bayguardfireprotection.com",
      linkDisplay: "bayguardfireprotection.com",
      role: "Full-Stack Developer",
      responsibilities: [
        "Designed and implemented the frontend with a clear information hierarchy around services, certifications, and contact.",
        "Built forms and contact flows for quote requests, inspections, and support.",
        "Ensured performance, accessibility, and responsive design best practices.",
      ],
      features: [
        "Service pages clearly describing fire protection solutions, inspections, and maintenance offerings.",
        "Prominent trust signals (certifications, experience, testimonials) to reassure commercial customers.",
        "Simple inquiry and quote request forms with routing to the right internal team.",
      ],
      impact: [
        "Provided BayGuard with a credible online presence in a trust-sensitive, regulated industry.",
        "Improved the company's ability to capture and qualify inbound leads through the website.",
      ],
    },
  ];
};
