import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let crickiter = [
  { name: "Babr-Azam", country: "Pakistan", code: "p" },
  { name: "Virat-Koli", country: "India", code: "i" },
  { name: "Ab-Diviliar", country: "SouthAfrika", code: "s" },
  { name: "Smith", country: "Australia", code: "a" },
  { name: "Imad-Waseem", country: "Pakistan", code: "p" },
  { name: "Rohet-Sharma", country: "India", code: "i" },
  { name: "De-Cock", country: "SouthAfrika", code: "s" },
  { name: "Maxwel", country: "Australia", code: "a" },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Crikiter Name with Country</h1>
      {crickiter.map((crickiter) => {
        return (
          <ul>
            <li
              className="myli"
              style={{
                background:
                  crickiter.code === "p"
                    ? "green"
                    : crickiter.code === "i"
                    ? "blue"
                    : crickiter.code === "s"
                    ? "rgb(12, 100, 12)"
                    : crickiter.code === "a"
                    ? "rgb(130, 141, 23)"
                    : null,
                    color:'white'
              }}
            >
              {crickiter.name} <span>{crickiter.country}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
