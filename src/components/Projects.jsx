import { useEffect, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiGithub,
  mdiOpenInNew,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiReact,
  mdiTailwind,
  mdiGit,
} from "@mdi/js";
import { Tooltip, Tag } from "antd";
import { observer } from "../utils/utils";
import { PROJECTDATA } from "../utils/constants";

function TechTags({ tag }) {
  let tagIcon;

  switch (tag) {
    case "HTML5": {
      tagIcon = <Icon path={mdiLanguageHtml5} size={1} color="#e34c26" />;
      break;
    }
    case "CSS3": {
      tagIcon = <Icon path={mdiLanguageCss3} size={1} color="#264de4" />;
      break;
    }
    case "Js": {
      tagIcon = <Icon path={mdiLanguageJavascript} size={1} color="#f0db4f" />;
      break;
    }
    case "React": {
      tagIcon = <Icon path={mdiReact} size={1} color="#61dafb" />;
      break;
    }
    case "Tailwind": {
      tagIcon = <Icon path={mdiTailwind} size={1} color="#06B6D4" />;
      break;
    }
    case "Git": {
      tagIcon = <Icon path={mdiGit} size={1} color="#f34f29" />;
      break;
    }
    default: {
    }
  }
  return (
    <Tooltip title={tag} placement="bottom">
      <Tag color="#00000000">{tagIcon}</Tag>
    </Tooltip>
  );
}

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
                <div className="card-bottom">
                  <p>{project.desc}</p>
                  <div className="tech">
                    {project.tech.map((tag, i) => {
                      return <TechTags tag={tag} key={project.title + i} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
