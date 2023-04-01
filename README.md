

## Code Documentation

### home.tsx
 
 This file contains the recruiters page, it imports several components from the @/components directory. 
 The statement `use client` above the main code implies that this component serves as the client-side and enables the utilization of React hooks..
 
 The `components` used in this project implies each and every section of a single page, the `components` inlcudes:
 
 `Banner`  - This component is used to display the banner image and some text, which describes about an event to be conducted
 
 `AccordianAndGraph`  - This component displays an accordion-style list of questions and answers, with a graph on the side.
 
 `CarouseusalContainer`  - This component contains the recruiters data with images in the form of a carousal
 
 `Footer`  - A component that displays the footer of the page, which contains links used to navigate through the page and information about the page
 
 `Hero`   - A component that displays the main hero section of a page which contains a buttton, some text and an image of an Employer
 
 `MultiCardContainer` - A component which displays the grid of cards, there cards represents different projects of the company

 `Navbar`  - A component which displays the navigation bar at the top of the page, this navbar contains the mega menu which contains different links and data which are used to navigate through the page. The Navbar changes its background color to white when we scroll the page, and by scrolling down the page, Nav bar gets disappeared, and again by scrolling up the page, Navbar gets visible. The Navbar sticks to the top of the page.
 
 `PhenomInAction` - This component is used to display a button which is used to connect with the company by booking a demo.
 
  `Quote` - This component is used to display the quotes which implies different roles in the company.

  `Resources` - This component is used to display the blogs of the company based on the recruiter
  
  
## [id].tsx

This file is used to display the page for the individual recruiter. This page uses the same compoents which are used in the home.tsx file.

- Each and every component recieves props based on the pathname
- The data for all the pages are stored in a central store using the redux toolkit for the state management.
- The data for each and every page is fetched from the central store using the `useSelector` hook.
- There is a single reducer named `data` which stores the whole data for all the pages as its intial state


## Authentication

The Authentication is implemented using the `Next Auth`, by using the google OAuth provider which comes by default in the Next Auth librabry
The `session` is used to store the login information. 

## Dashboard

The Dashboard section contains two graphs, Bar Graph and Doughnut Graph. These Graphs are implemented using the `chart.js` library. The data used for the graphs are stored in the `Data.tsx`, for now iam using the dummy data and the graphs can be customized by editing this `Data.tsx file`.

