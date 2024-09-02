import React, { useState, useEffect } from "react";
import Portfolio from "../components/elements/Portfolio";
import Header from "../components/layouts/Header";

const allData = [
  {
    id: 1,
    title: "Spotify Fellowship CRUD App",
    image: `${process.env.PUBLIC_URL}/images/Spotify.png`,
    link: "https://github.com/araf-rahman/TTP--PROJECT-V2",
    language: "Ruby, Sinatra, Postgress",
  },
  {
    id: 2,
    title: "CMP 420 Data Management App",
    image: `${process.env.PUBLIC_URL}/images/CMP420.png`,
    link:"https://github.com/araf-rahman/CMP420_PROJECT",
    language: "Rails, Postgress",
  },
  {
    id: 3,
    title: "FavLinks",
    image: `${process.env.PUBLIC_URL}/images/HW2.gif`,
    link: "https://github.com/araf-rahman/cmp464_react_Proj2",
    language: "React",
  },
  {
    id: 4,
    title: "Design Pad",
    image: `${process.env.PUBLIC_URL}/images/DesignPad.png`,
    link: "https://github.com/araf-rahman/design-pad",
    language: "React",
  },
  {
    id: 5,
    title: "Lacuna-School-Share",
    image: `${process.env.PUBLIC_URL}/images/LSS.png`,
    link: "https://github.com/araf-rahman/Lacuna-School-Share",
    language: "React and MongoDB",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount] = useState(6);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
     // eslint-disable-next-line
  }, []);

  return (
    <section id="works">
       <h2 className="pheader">Portfolio Projects</h2>
       <br />
      <div className="container">
         <Header light/>
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>  
      </div>
    </section>
  
  );
}
export default Works;
