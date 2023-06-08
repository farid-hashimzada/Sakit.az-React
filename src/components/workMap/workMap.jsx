import React from "react";
import "../workMap/workMap.css";
import WorkMap1 from "../../img/workMap1.svg";
import WorkMap2 from "../../img/workMap2.svg";
import WorkMap3 from "../../img/workMap3.svg";
import WorkMap4 from "../../img/workMap4.png";
import WorkMap5 from "../../img/workMap5.svg";
import WorkMap6 from "../../img/workMap6.svg";
import { Button } from "../bam/button";

const WorkMap = () => {
  const imgs = [
    {
      id: 1,
      img: WorkMap1,
      content: "Bir vəzifəyə qərar veririk",
    },
    {
      id: 2,
      img: WorkMap2,
      content: "Biz düzgün həll təklif edirik",
    },
    {
      id: 3,
      img: WorkMap3,
      content:
        "Biz büdcəni müzakirə edirik və lazım gəldikdə düzəlişlər edirik.",
    },
    {
      id: 4,
      img: WorkMap4,
      content: "Quraşdırmanı həyata keçiririk. Biz işi çatdırırıq.",
    },
    {
      id: 5,
      img: WorkMap5,
      content:
        "Müqaviləni imzalayırıq, siz bunu xüsusi bir ərizə vasitəsilə onlayn edə bilərsiniz",
    },
    {
      id: 6,
      img: WorkMap6,
      content:
        "Açar təslim xidmət sifariş edildiyi təqdirdə biz obyektdə nəzarət ölçülərini həyata keçiririk.",
    },
  ];

  return (
    <>
      <div className="workMapBox">
        <div className="container">
          <div className="work-box-content">
            <h2>Biz necə işləyirik?</h2>
            <Button workText="Sifariş göndər" />
          </div>
          <div className="work-map">
            {imgs.map(({ img, id, content }) => (
              <div className="work-image">
                <p>{id}</p>
                <img src={img} />
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkMap;
