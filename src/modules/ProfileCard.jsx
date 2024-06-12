import React from "react";
import { smoothScroll } from "../App";

export default (profile) => (
  <div className="box">
    <table className="table is-fullwidth">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{profile.name}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{profile.current_loc}</td>
        </tr>
        <tr>
          <th>Current Job</th>
          <td>
            {profile.job_title}{" "}
            <a
              href={profile.emp_site}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </td>
        </tr>
        <tr>
          <th>Favorite Frameworks</th>
          <td>HTML, CSS, JS, React</td>
        </tr>
      </tbody>
    </table>
    <div className="buttons is-centered">
      <a
        onClick={smoothScroll}
        className="button is-primary is-rounded button-special"
        href="#contact"
      >
        Contact Me
      </a>
    </div>
  </div>
);
