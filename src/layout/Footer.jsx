import React from "react";

export default (props) => (
  <footer className="footer">
    <div className="container">
      <p className="has-text-centered">
        <strong>Joaquin's Personal Portfolio</strong>
      </p>
      <div
        className="columns is-centered is-vcentered"
        style={{ marginTop: "1.6em" }}
      >
        <div className="column is-narrow has-text-centered">
          <p>Made with React</p>
          <br />
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="60"
              alt="Made with React"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            />
          </a>
          <br />
          <br />
          <p>and love ❤️</p>
        </div>
      </div>
    </div>
  </footer>
);
