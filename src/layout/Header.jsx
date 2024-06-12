import React from "react";
import { smoothScroll } from "../App";

const heroStyle = {
  background:
    "linear-gradient(45deg, #ff9a9e 0%, #fecfef 30%, #fed6e3 70%, #f6d365 100%)",
  color: "white",
};

export default (props) => (
  <section className="hero is-fullheight" id="home" style={heroStyle}>
    <div className="hero-body">
      <div className="container has-text-centered">
        {props.greeting && (
          <p className="title has-text-weight-light">{props.greeting}</p>
        )}
        <h1 className="title is-1 has-text-weight-bold">{props.title}</h1>
        <h2 className="subtitle is-3 has-text-weight-light">
          {props.subtitle}
        </h2>
        <a
          onClick={smoothScroll}
          className="button is-link is-rounded is-large"
          href="#about"
          style={{
            backgroundColor: "#ff6f61",
            borderColor: "#ff6f61",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff3e30")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          Know more about me
        </a>
      </div>
    </div>
  </section>
);
