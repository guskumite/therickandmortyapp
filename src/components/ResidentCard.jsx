import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ResidentCard = ({ key, residentUrl }) => {
  //It is necessary to write the logic for asking data to the API of every card received in residentUrl
  const [residentInfo, setResidentInfo] = useState(null);

  // Tailwind color styles depending on the data fetched from residentInfo
  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="backimg2">
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 p-2">
          <div
            className={`h-[10px] aspect-square rounded-full ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section>
        <h3>{residentInfo?.name}</h3>
        <ul className="mt-4 mb-4">
          <li>Species: {residentInfo?.species}</li>
          <li>
            Origin: {residentInfo?.origin.name}{" "}
            <a href={residentInfo?.origin.url}>Origin</a>
          </li>
          <li>Times appear: {residentInfo?.episode.length} </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
