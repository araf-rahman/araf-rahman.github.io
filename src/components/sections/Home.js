import React from "react";
import Typed from "react-typed";

function Home(props) {
  
  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src={`${process.env.PUBLIC_URL}/images/araf-rahman.png`} alt="arafrahman.com" className="mb-4" />
          <h1 className="mb-2 mt-0">Araf Rahman</h1>
          <p>
            I'm{" "}
            <Typed
              strings={[
                "skip ",
                "an experienced QA Engineer",
                "a complex problem solver",
                "always up for a challenge",
                "a DIY project enthusiast",
                "a lifelong learner",]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
