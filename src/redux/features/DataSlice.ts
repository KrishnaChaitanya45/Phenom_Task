import { createSlice } from "@reduxjs/toolkit";
interface question {
  id: number;
  question: string;
  answer: string;
}
interface article {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  date: string;
}
export interface DataState {
  id: string;
  pageTitle: string;
  hero: {
    title: string;
    subtitle: string;
    image?: string;
  };
  quote: string;
  thirdSection: {
    title: string;
    questions: question[];
    image: string;
  };
  fourthSection: {};
  fifthSection: article[];
}

const initialState: DataState[] = [
  {
    id: "home",
    pageTitle: "Recruiters",
    hero: {
      title: "Phenom for Recruiters",
      subtitle:
        "Discover, engage and hire phenomenal people - with speed and velocity",
    },
    quote:
      "You need to focus on strategic initiatives, not repetitive, mundane tasks.",
    thirdSection: {
      title:
        "Discover eligible candidates and find the right fit for open roles.",
      questions: [
        {
          id: 1,
          question: "Find the Best Fit, Faster",
          answer:
            "Prioritize outreach to candidates that meet qualifications such as skills, title, experience, and location.",
        },
        {
          id: 2,
          question: "Identify the Best Candidates",
          answer:
            "Gain visibility into your career site traffic with comprehensive analytics. Begin engaging with potential candidates, even those who did not submit an application.",
        },
        {
          id: 3,
          question: "Build Meaningful Relationships",
          answer:
            "Nurture, engage, and convert talent with email and SMS communications that turn job seekers into applicants.",
        },
      ],
      image: "/asessts/Fit_Score.png",
    },
    fourthSection: {},
    fifthSection: [
      {
        id: "1",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "/asessts/recruiters/article_one.webp",
        date: "March 02, 2022",
      },
      {
        id: "2",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "/asessts/recruiters/article_two.webp",
        date: "March 02, 2022",
      },
      {
        id: "3",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "/asessts/recruiters/article_three.jpg",
        date: "March 02, 2022",
      },
      {
        id: "4",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "/asessts/recruiters/article_four.webp",
        date: "March 02, 2022",
      },
    ],
  },
  {
    id: "talent_marketers",
    pageTitle: "Talent Marketers",
    hero: {
      title: "Phenom for Talent Marketers",
      subtitle: "Win the hearts and minds of candidates — with relevance.",
      image: "/asessts/talent_marketing/hero.webp",
    },
    quote:
      "Time is of the essence for your next best hire — but how do you customize campaigns quickly?",
    thirdSection: {
      title: "Personalize experiences to better attract and inspire candidates",
      questions: [
        {
          id: 1,
          question: "Reach Job Seekers -  Wherever They Are",
          answer:
            "Drive impactful omnichannel campaigns to attract and engage job seekers.",
        },
        {
          id: 2,
          question: "Showcase Your Employer Brand",
          answer:
            "Build your reputation and attract the right talent with consistent and creative branding across the entire candidate experience.",
        },
        {
          id: 3,
          question: "Refine Your Recruiting Funnel",
          answer:
            "Convert job seekers into applicants and identify best-fit candidates.",
        },
        {
          id: 4,
          question: "Prove Your Impact",
          answer:
            "Consult rich analytics to understand and share your success with marketing campaigns and strategic hiring initiatives.",
        },
      ],
      image: "/asessts/talent_marketing/charts.png",
    },
    fourthSection: {},
    fifthSection: [
      {
        id: "1",
        title: "The Definitive Guide to Recruitment Marketing",
        subtitle: "Blog * 6 min read",
        image: "/asessts/talent_marketing/article_one.webp",
        date: "June 08, 2022",
      },
      {
        id: "2",
        title:
          "Talent Marketing 101: The Strategy You Need to Fill Roles Faster",
        subtitle: "Webinar. 6 min read",
        image: "/asessts/talent_marketing/article_two.jpg",
        date: "June 01, 2022",
      },
      {
        id: "3",
        title: "Designing a Distraction-Free Recruitment Marketing Strategy",
        subtitle: "Blog. 6 min read",
        image: "/asessts/talent_marketing/article_three.jpg",
        date: "April 22, 2022",
      },
      {
        id: "4",
        title:
          "How to Personalize Your Career Site: Advice from a Talent Marketer",
        subtitle: "Story. 6 min read",
        image: "/asessts/talent_marketing/article_four.jpg",
        date: "January 11, 2022",
      },
    ],
  },
  {
    id: "hiring_managers",
    pageTitle: "Hiring Managers",
    hero: {
      title: "Phenom for Hiring Marketers",
      subtitle: "Build high performance teams that scale — with insights.",
      image: "/asessts/hiring_managers/hero.webp",
    },
    quote:
      "You need top talent to join your team – fast. But bottlenecks are slowing things down.",
    thirdSection: {
      title: "Accelerate the process of connecting with best-fit candidates.",
      questions: [
        {
          id: 1,
          question: "Fill Open Roles Faster",
          answer:
            "Accelerate hiring with AI recommended candidates, automation for candidate screening and scheduling, and communication tools for real-time hiring team alignment.",
        },
        {
          id: 2,
          question: "Automatic Hiring Tasks",
          answer:
            "Hiring may be a top priority, but it's not your primary job. Automate time-intensive tasks so you can stay focused on your team.",
        },
        {
          id: 3,
          question: "Hire for Skills and Develop Your Team",
          answer:
            "Identify and hire best-fit candidates based on potential, experience, and skills with fit scoring and matching criteria. Discover and fill team skills gaps, while developing and retaining your best employees.",
        },
        {
          id: 4,
          question: "Collaborate with Hiring Team",
          answer:
            "Align on job descriptions, ideal candidate characteristics, must-have skills, and more to make stronger hiring decisions.",
        },
        {
          id: 5,
          question: "Access Anywhere",
          answer:
            "Hire on-the-go by identifying, screening, evaluating, and hiring candidates from desktop or mobile — anywhere, anytime.",
        },
      ],
      image: "/asessts/hiring_managers/charts.png",
    },
    fourthSection: {},
    fifthSection: [
      {
        id: "1",
        title: "How To Improve How Recruiters & Managers Hire Together",
        subtitle: "Blog * 6 min read",
        image: "/asessts/hiring_managers/article_one.jpg",
        date: "November 25, 2021",
      },
      {
        id: "2",
        title: "Confessions of a Hiring Manager",
        subtitle: "Webinar. 6 min read",
        image: "/asessts/hiring_managers/article_two.jpg",
        date: "April 02, 2020",
      },
      {
        id: "3",
        title: "Designing a Distraction-Free Recruitment Marketing Strategy",
        subtitle: "Blog. 6 min read",
        image: "/asessts/hiring_managers/article_three.jpg",
        date: "April 22, 2022",
      },
      {
        id: "4",
        title:
          "How to Personalize Your Career Site: Advice from a Talent Marketer",
        subtitle: "Story. 6 min read",
        image: "/asessts/hiring_managers/article_four.jpg",
        date: "January 11, 2022",
      },
    ],
  },
  {
    id: "talent_acquisition",
    pageTitle: "Talent Acquisition",
    hero: {
      title: `Phenom for

Talent

Acquisition

Leaders`,
      subtitle:
        "Boost the productivity of your recruiting team — with AI and automation.",
      image: "/asessts/talent_acquisition/hero.webp",
    },
    quote:
      "Tedious sourcing, screening, and scheduling tasks limit your team's ability to execute.",
    thirdSection: {
      title:
        "Bolster your talent pipeline with speed, efficiency, and intelligence.",
      questions: [
        {
          id: 1,
          question: "Identify and Prioritize Top Skills",
          answer:
            "Eliminate the time-consuming, manual process of parsing profiles and resumes to pinpoint hiring hopefuls. Using AI-powered candidate matching, identify and prioritize the top skills required of candidates to fill jobs faster.",
        },
        {
          id: 2,
          question: "Automate Visibility into Best-fit Candidates",
          answer:
            "Hiring may be a top priority, but it's not your primary job. Automate time-intensive tasks so you can stay focused on your team.",
        },
        {
          id: 3,
          question: "Hire for Skills and Develop Your Team",
          answer:
            "Identify and hire best-fit candidates based on potential, experience, and skills with fit scoring and matching criteria. Discover and fill team skills gaps, while developing and retaining your best employees.",
        },
        {
          id: 4,
          question: "Collaborate with Hiring Team",
          answer:
            "Align on job descriptions, ideal candidate characteristics, must-have skills, and more to make stronger hiring decisions.",
        },
        {
          id: 5,
          question: "Access Anywhere",
          answer:
            "Hire on-the-go by identifying, screening, evaluating, and hiring candidates from desktop or mobile — anywhere, anytime.",
        },
      ],
      image: "/asessts/talent_acquisition/charts.png",
    },
    fourthSection: {},
    fifthSection: [
      {
        id: "1",
        title: "How To Improve How Recruiters & Managers Hire Together",
        subtitle: "Blog * 6 min read",
        image: "/asessts/talent_acquisition/article_one.jpg",
        date: "November 25, 2021",
      },
      {
        id: "2",
        title: "Confessions of a Hiring Manager",
        subtitle: "Webinar. 6 min read",
        image: "/asessts/talent_acquisition/article_two.jpg",
        date: "April 02, 2020",
      },
      {
        id: "3",
        title: "Designing a Distraction-Free Recruitment Marketing Strategy",
        subtitle: "Blog. 6 min read",
        image: "/asessts/talent_acquisition/article_three.jpg",
        date: "April 22, 2022",
      },
      {
        id: "4",
        title:
          "How to Personalize Your Career Site: Advice from a Talent Marketer",
        subtitle: "Story. 6 min read",
        image: "/asessts/talent_acquisition/article_four.webp",
        date: "January 11, 2022",
      },
    ],
  },
  {
    id: "talent_management",
    pageTitle: "Talent Management",
    hero: {
      title: `Phenom for 

Talent

Management`,
      subtitle:
        "Facilitate productive and purposeful career paths — with precision.",
      image: "/asessts/talent_management/hero.webp",
    },
    quote:
      "You're racing to engage, evolve, and retain your people as turnover reaches unprecedented rates.",
    thirdSection: {
      title:
        "Empower your employees to grow, fill critical skill gaps, and feel connected.",
      questions: [
        {
          id: 1,
          question: "Know Your Team Better",
          answer:
            "Eliminate the time-consuming, manual process of parsing profiles and resumes to pinpoint hiring hopefuls. Using AI-powered candidate matching, identify and prioritize the top skills required of candidates to fill jobs faster.",
        },
        {
          id: 2,
          question: "Empower Your Employees",
          answer:
            "Hiring may be a top priority, but it's not your primary job. Automate time-intensive tasks so you can stay focused on your team.",
        },
        {
          id: 3,
          question: "Develop and Retain Top Talent",
          answer:
            "Identify and hire best-fit candidates based on potential, experience, and skills with fit scoring and matching criteria. Discover and fill team skills gaps, while developing and retaining your best employees.",
        },
        {
          id: 4,
          question: "Grow Your Talent Network",
          answer:
            "Align on job descriptions, ideal candidate characteristics, must-have skills, and more to make stronger hiring decisions.",
        },
      ],
      image: "/asessts/talent_management/charts.png",
    },
    fourthSection: {},
    fifthSection: [
      {
        id: "1",
        title: "How To Improve How Recruiters & Managers Hire Together",
        subtitle: "Blog * 6 min read",
        image: "/asessts/talent_management/article_one.png",
        date: "November 25, 2021",
      },
      {
        id: "2",
        title: "Confessions of a Hiring Manager",
        subtitle: "Webinar. 6 min read",
        image: "/asessts/talent_management/article_two.jpg",
        date: "April 02, 2020",
      },
      {
        id: "3",
        title: "Designing a Distraction-Free Recruitment Marketing Strategy",
        subtitle: "Blog. 6 min read",
        image: "/asessts/talent_management/article_three.jpg",
        date: "April 22, 2022",
      },
      {
        id: "4",
        title:
          "How to Personalize Your Career Site: Advice from a Talent Marketer",
        subtitle: "Story. 6 min read",
        image: "/asessts/talent_management/article_four.webp",
        date: "January 11, 2022",
      },
    ],
  },
];
export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});
export default DataSlice.reducer;
