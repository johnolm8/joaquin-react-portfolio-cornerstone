import React from "react";
import ProfileCard from "../modules/ProfileCard";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      profile: {
        name: "Joaquin Olmos",
        current_loc: "Vancouver, BC",
        job_title: "Full Stack Software Engineer",
      },
    };
  }

  render() {
    const profile = this.state.profile;

    return (
      <section className="section" id={this.id}>
        <div className="section-heading has-text-centered">
          <h3 className="title">About me</h3>
        </div>
        <div className="container">
          {profile === null ? (
            "Loading..."
          ) : (
            <div className="columns is-multiline">
              <div className="column is-7-desktop">
                <article>
                  <p>
                    Welcome to my personal portfolio! I am a passionate web
                    designer and full-stack developer with expertise in crafting
                    beautiful and functional websites. With a strong foundation
                    in HTML, CSS, and JavaScript, I have the skills and
                    creativity to bring your digital visions to life. Whether
                    it's designing a visually stunning user interface,
                    optimizing code for seamless user experiences, or building
                    robust web applications, I'm committed to delivering
                    top-notch results. Explore my projects to see how I can turn
                    your ideas into stunning online realities.{" "}
                  </p>
                  <br />
                  <p>
                    My journey in the world of web design and full-stack
                    development has been a dynamic one. While my formal
                    experience might be relatively limited, my boundless
                    enthusiasm and energy for learning have been the driving
                    forces behind my growth. I've always believed that the best
                    way to excel in this ever-evolving field is to embrace
                    challenges and approach each project as an opportunity to
                    expand my skill set. Every project, whether it's designing a
                    captivating website or building a robust web application,
                    has been a chance for me to immerse myself in new
                    technologies and problem-solving. With each line of code I
                    write and each design I create, I'm fueled by an insatiable
                    curiosity and an unwavering commitment to honing my craft.
                  </p>
                </article>
              </div>
              <div className="column is-5-tablet">
                <ProfileCard {...profile} />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
