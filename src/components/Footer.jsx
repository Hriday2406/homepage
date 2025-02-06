import { useEffect, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiPhone,
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiFileAccount,
} from "@mdi/js";
import { Tooltip } from "antd";
import { observer } from "../utils/utils";

export default function Footer() {
  const dp2Ref = useRef(null);

  useEffect(() => {
    observer.observe(dp2Ref.current);
  }, []);

  return (
    <footer>
      <div className="f-container">
        <div className="f-left">
          <h1>Contact Me</h1>
          <p>
            Please get in touch if you think our work could be mutually
            beneficial!
          </p>
          <div className="phone">
            <Icon path={mdiPhone} size={1} className="svg" />
            <p>+91 9958026543</p>
          </div>
          <div className="email">
            <Icon path={mdiEmail} size={1} className="svg" />
            <p>hriday2602@gmail.com</p>
          </div>
          <div className="socials">
            <Tooltip title="My Github" placement="bottomRight">
              <a href="https://github.com/Hriday2406" target="_blank">
                <Icon path={mdiGithub} size={1.5} className="svg" />
              </a>
            </Tooltip>
            <Tooltip title="My LinkedIn" placement="bottom">
              <a
                href="https://www.linkedin.com/in/hriday-budhiraja/"
                target="_blank"
              >
                <Icon path={mdiLinkedin} size={1.5} className="svg" />
              </a>
            </Tooltip>
            <Tooltip title="My Resume" placement="bottomLeft">
              <a href="https://bit.ly/hriday2406-resume" target="_blank">
                <Icon path={mdiFileAccount} size={1.5} className="svg" />
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="f-right">
          <img
            className="img2"
            id="img2"
            src="/dp2.webp"
            alt="My Image"
            ref={dp2Ref}
          />
        </div>
      </div>
    </footer>
  );
}
