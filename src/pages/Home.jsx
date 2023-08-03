/* Home
 * landing page / home page
 */

/* -- imports -- */
import React, { useEffect } from "react";
import "../styles/home.css";

// Exported component
export default function Home() {
  // run on component mount - empty array as second parameter
  useEffect(() => {
    // apply styling to move navigation bar down and remove title
    let nav = document.getElementsByTagName("nav")[0];
    const previousStyles = getComputedStyle(nav);
    nav.style.height = "100vh";
    nav.style.paddingTop = "300px";
    nav.style.boxShadow = "none";
    nav.firstChild.style.display = "none";
    let ul = nav.children[1];
    const previousUl = getComputedStyle(ul);
    ul.style.width = "100%";
    ul.style.display = "flex";
    ul.style.justifyContent = "center";

    // define descriptions for nav links
    const descriptions = {
      theory: "Learn about how morse code works",
      history: "Discover how morse code came to be",
      practice: "Have some fun and improve your skills",
    };
    // add descriptions to each nav link and give them some styling
    for (let child of ul.children) {
      let p = document.createElement("p");
      let desc = child.firstChild;
      let key = desc.innerHTML.toLowerCase();
      let description = descriptions[key];
      let text = document.createTextNode(description);
      p.appendChild(text);
      child.firstChild.appendChild(p);
      child.style.margin = "25px 50px";
    }

    // runs on component unmount
    return () => {
      // reset styling of navbar to what it was before
      nav.style = previousStyles;
      nav.firstChild.style.display = "block";
      ul.style = previousUl;
      for (let child of ul.children) {
        child.firstChild.removeChild(child.firstChild.children[0]);
        child.style.margin = "25px 0 0 0";
      }
    };
  }, []);

  // return static HTML content
  return (
    <div>
      <div className="container top-container">
        <h1 className="main-title">dashing</h1>
        <h2 className="sub-title">Dial in your morse code skills</h2>
      </div>
    </div>
  );
}
