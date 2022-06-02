import React, { Fragment } from "react";
import Faq from "react-faq-component";

export default function FAQ() {
  return (
    <div className="px-10 white-glassmorphism">
      <Fragment>
    <Faq
      data={data}
      styles={{
        bgColor: "transparent",
        titleTextColor: "#fc9803",
        titleTextSize:"50px",
        rowTitleColor: "#bdd8de",
        rowTitleTextSize: "extraLarge",
        rowContentColor: "#d8eff2",
        rowContentPaddingRight: "0",
        rowContentTextSize: "16px",
        rowContentPaddingTop: "10px",
        rowContentPaddingBottom: "10px",
        rowContentPaddingLeft: "50px",
        rowContentPaddingRight: "150px",
        arrowColor: "white"
      }}
      config={{
        animate: true
      }}
    />
  </Fragment></div>
    
  );
}


const data = {
  title: "FAQ",
  rows: [
    {
      title: "How to register? Is it free?",
      content: "Just Click on register button on the top of this page to register into GamerDays2.0 .Yes, registering into GamerDays2.0 is absolutely free."
    },
    {
      title: "What is maximum number of games I can register for?",
      content:
        "No limit, you can register for as many as games you want to participate in."
    },
    {
      title: "What is team limit for Bgmi or valorant?",
      content:
        "It's maximum 4 members for bgmi and 5 members for valorant respectively."
    },
    {
      title: "Why would I participate in this event?What is the package version",
      content: "You'll win exciting prizes and goodies along with a thrilling gameplay experience with fellow gamers from diffrent colleges."
    },
    {
      title: "Want more questions?",
      content: "Feel free to drop your questions at discord server."
    }
  ]
};