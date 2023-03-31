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
  image: string;
  date: string;
}
export interface DataState {
  id: string;
  hero: {
    title: string;
    subtitle: string;
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
      image: "../../../public/asessts/Fit_Score.png",
    },
    fourthSection: {},
    fifthSection: [
      {
        id: "1",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "../../../public/asessts/Johnsonville.png",
        date: "March 02, 2022",
      },
      {
        id: "2",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "../../../public/asessts/Johnsonville.png",
        date: "March 02, 2022",
      },
      {
        id: "3",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "../../../public/asessts/Johnsonville.png",
        date: "March 02, 2022",
      },
      {
        id: "4",
        title: "Johnsonville's Recruiter Handbook for Hyper Hiring",
        subtitle: "Customer Story. 6 min read",
        image: "../../../public/asessts/Johnsonville.png",
        date: "March 02, 2022",
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
