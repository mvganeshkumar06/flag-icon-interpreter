import React, { useState } from "react";
import './App.css';

const App = () => {

  const [flagName, setFlagName] = useState("");

  const updateFlagName = (flag) => {
    if (data[flag]) {
      setFlagName(data[flag]);
    }
    else {
      setFlagName("The given flag is not available in the list !");
      setTimeout(() => {
        setFlagName("Flag name appears here");
      }, 3000);
    }
  }

  const data = {
    "🇦🇷": "Argentina",
    "🇦🇺": "Australia",
    "🇧🇷": "Brazil",
    "🇨🇭": "Switzerland",
    "🇨🇳": "China",
    "🇩🇪": "Germany",
    "🇪🇸": "Spain",
    "🇫🇷": "France",
    "🇬🇧": "United Kingdom",
    "🇮🇳": "India",
    "🇮🇹": "Italy",
    "🇯🇵": "Japan",
    "🇳🇿": "New Zealand",
    "🇺🇸": "United States"
  }

  let dataArr = Object.keys(data);

  return (
    <>
      <div id="container">
        <p id="mainHead"> 🏳️ Flag Icon Interpreter</p>
        <input id="input" placeholder="Enter or click a flag icon to interpret" onChange={(event) => updateFlagName(event.target.value)}></input>
        <div id="flagName" >{flagName ? flagName : "Flag name appears here"}</div>
        <p id="outputHead">Here are the list of flags</p>
        <div id="output">
          {
            dataArr.map((item, index) => {
              return <div className="flag" key={index} onClick={(event) => updateFlagName(event.target.innerText)} alt="flag">{item}</div>;
            })
          }
        </div>
        <footer>
          <div id="socialFooter">
            <h4> Made with <img id="heartIcon" src="https://img.icons8.com/fluent/48/000000/like.png" alt="heart" /> by Ganesh Kumar</h4>
            <a
              href="https://mvganeshkumar.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/windows/64/000000/domain.png"
                alt="website"
              />
            </a>
            <a
              href="https://github.com/mvganeshkumar06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/fluent/48/000000/github.png"
                alt="github"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mvganeshkumar06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://twitter.com/mvganeshkumar06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/fluent/48/000000/twitter.png"
                alt="twitter"
              />
            </a>
            <a
              href="https://dev.to/mvganeshkumar06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="dev"
              />
            </a>
          </div>
          <a id="iconAttribution" href="https://icons8.com">Icons by Icons8</a>
        </footer>
      </div>
    </>
  );
}

export default App;
