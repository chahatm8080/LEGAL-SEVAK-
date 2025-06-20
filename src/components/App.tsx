// App.tsx

import { useState } from "react";
import Navbar from "./Navbar";
// import InfoCard from "./InfoCard";
// import LawyerDetails from "./LawyerDetails";
// import { Typography } from "@mui/material";
// import EmptyImage from "../assets/EmptyImage.png";
import HomePage from "./HomePage";
import Footer from "./Footer";
import LawyerSearchPage from "./LawyerSearchPage";
import LawyerDetails from "./LawyerDetails";
// import Rohan from "./TransalateButton";

function App() {
  const [current_page, setCurrentPage] = useState("home");
  var cp = current_page;
  var cpp = cp;
  var cp = cpp;
  // const handleCardClick = () => {
  //   if (current_page === "detailed_view") {
  //     setCurrentPage("initial_view");
  //   } else {
  //     setCurrentPage("detailed_view");
  //   }
  // };

  const lawyerInfo = {
    name: "Rohit Sinha",
    contact: "+91 935-395-8508",
    specialization: "Criminal Defense",
    location: "Banagalore, Karnataka",
    experience: "10+ Years",
    price: "$100",
    rating: "4.5",
    description:
      "A Criminal Defense Attorney is a legal professional with specialized expertise in defending individuals or entities accused of criminal activities. These dedicated advocates play a crucial role in upholding the principles of justice, ensuring fair trials, and safeguarding the rights of their clients within the criminal justice system.",
  };
  if (current_page == 'home') {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <HomePage></HomePage>
        <Footer></Footer>
      </>
    );
  } else if (current_page == 'search') {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <LawyerSearchPage setCurrentPage={setCurrentPage} current_page={current_page}></LawyerSearchPage>
        <Footer></Footer>
      </>
    );
  } else if (current_page == 'detailed_view') {
    return <>
      <Navbar setCurrentPage={setCurrentPage} />
      <LawyerDetails current_page={current_page} setCurrentPage={setCurrentPage} details={lawyerInfo}></LawyerDetails>
      <Footer></Footer>
    </>
  } else {
    return (
      <>
      <Navbar setCurrentPage={setCurrentPage}></Navbar>
      <h1>{current_page}</h1>
      <Footer></Footer>
      </>
    )
  }
  
 

}
//import { useState } from "react";
// import Navbar from "./Navbar";
// import InfoCard from "./InfoCard";
// import { Typography } from "@mui/material";
// import EmptyImage from "../assets/EmptyImage.png";
// import Calendar from './Calender.tsx';

// import ContactUs from "./ContactUs.tsx";
// import LawyerSearchPage from "./LawyerSearchPage.tsx";
// import HomePage from "./HomePage.tsx";
//import "./App.css";

// function App() {


//   return <HomePage></HomePage>
// }

export default App;
