import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  utbildning,
  arbetserfarenhet,
  kompetens,
  språkkunskaper,
  sammanfattning,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [ data, setData] = useState([]);
  const list = [
    {
      id: "Utbildning",
      title: "Utbildning",
    },
    {
      id: "Arbetserfarenhet",
      title: "Arbetserfarenhet",
    },
    {
      id: "Kompetens",
      title: "Kompetens",
    },
    {
      id: "Språkkunskaper",
      title: "Språkkunskaper",
    },
    {
      id: "Sammanfattning",
      title: "Sammanfattning",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Utbildning":
        setData(utbildning);
        break;
      case "Arbetserfarenhet":
        setData(arbetserfarenhet);
        break;
      case "Kompetens":
        setData(kompetens);
        break;
      case "Språkkunskaper":
        setData(språkkunskaper);
        break;
      case "Sammanfattning":
        setData(sammanfattning);
        break;
      default:
        setData(utbildning);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div>
            <h1>{d.title}</h1>
            <p>{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
