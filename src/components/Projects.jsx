import { useEffect, useRef } from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiOpenInNew } from "@mdi/js";
import { Tooltip } from "antd";
import { observer } from "../utils/utils";
import { PROJECTDATA } from "../utils/constants";

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, PROJECTDATA.length);
    cardsRef.current.map((ref) => {
      observer.observe(ref);
    });
  }, []);

  return (
    <main>
      <h1>My Work</h1>
      <div className="m-container">
        {PROJECTDATA.map((project, index) => {
          return (
            <div
              className="cards"
              key={"project" + index}
              ref={(card) => (cardsRef.current[index] = card)}
            >
              <a href={project.website} target="_blank">
                <img src={project.img} alt={project.title} />
              </a>
              <div className="text">
                <div className="first-line">
                  <h3 className="project-name">{project.title}</h3>
                  <div className="links">
                    <a href={project.code} target="_blank">
                      <Tooltip title="Github Link" placement="topRight">
                        <Icon path={mdiGithub} size={1.2} className="svg" />
                      </Tooltip>
                    </a>
                    <a href={project.website} target="_blank">
                      <Tooltip title="Website Link" placement="topLeft">
                        <Icon path={mdiOpenInNew} size={1.2} className="svg" />
                      </Tooltip>
                    </a>
                  </div>
                </div>
                <p>{project.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
