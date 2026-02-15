import { useEffect, useRef } from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiFileAccount } from "@mdi/js";
import { Tooltip } from "antd";
import { observer } from "../utils/utils";
import { Link } from "react-router-dom";

export default function Hero() {
  const dpRef = useRef(null);

  useEffect(() => {
    observer.observe(dpRef.current);
  }, []);

  return (
    <header>
      <div className="h-left">
        <img id="img1" src="/dp.webp" alt="DP" ref={dpRef} />
      </div>
      <div className="h-right">
        <h1>About Me</h1>
        <div className="about-text">
          <p>
            Hey! I&aposm Hriday Budhiraja, a passionate web developer
            specializing in creating clean, modern websites with seamless user
            experiences. With a keen eye for design and strong technical skills,
            I craft digital solutions that combine functionality and aesthetic
            appeal.
          </p>
          <p>
            My journey began during college when I discovered a love for coding.
            Since then, I&aposve honed my skills through numerous projects,
            constantly exploring new technologies. What drives me is the
            challenge of translating complex requirements into elegant,
            user-friendly applications.
          </p>
          <p>
            When I&aposm not coding, you can find me gaming or listening to
            music. I&aposm excited to contribute my skills to innovative
            projects that make a positive impact.
          </p>
        </div>
        <div className="h-links">
          <Tooltip title="My Github" placement="topRight">
            <a href="https://github.com/Hriday2406" target="_blank">
              <Icon path={mdiGithub} size={1.5} className="svg" />
            </a>
          </Tooltip>
          <Tooltip title="My LinkedIn">
            <a
              href="https://www.linkedin.com/in/hriday-budhiraja/"
              target="_blank"
            >
              <Icon path={mdiLinkedin} size={1.5} className="svg" />
            </a>
          </Tooltip>
          <Tooltip title="My Resume" placement="topLeft">
            {/* <a href="https://bit.ly/hriday2406-resume" target="_blank">
              <Icon path={mdiFileAccount} size={1.5} className="svg" />
            </a> */}
            <Link to="/resume">
              <Icon path={mdiFileAccount} size={1.5} className="svg" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
