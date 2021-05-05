import React, { useState } from "react";
import BasicTextFields from "./Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./NewsLetter.css";
import { Typography } from "@material-ui/core";

function NewsLetter() {
  const [background, setBackground] = useState(
    "https://apollotran.com/demo/at_estilo_demo/themes/at_estilo/assets/img/modules/appagebuilder/images/bg-newletter-h3.jpg"
  );
  const [hover1, setHover1] = useState(false);
  const handleHover1 = () => {
    setHover1(!hover1);
  };
  const [hover2, setHover2] = useState(false);
  const handleHover2 = () => {
    setHover2(!hover2);
  };
  const [hover3, setHover3] = useState(false);
  const handleHover3 = () => {
    setHover3(!hover3);
  };
  const [hover4, setHover4] = useState(false);
  const handleHover4 = () => {
    setHover4(!hover4);
  };
  const [hover5, setHover5] = useState(false);
  const handleHover5 = () => {
    setHover5(!hover5);
  };

  return (
    <div className="container-fluid w-100 mt-3 newsletterdiv img-fluid">
      <div className="text-center">
        <Typography variant="h4" alignItems="center" className="mb-3 mt-2">
          Newsletter SignUp{" "}
        </Typography>
      </div>
      <BasicTextFields />
      <div className="logos text-center">
        <ul>
          <li
            className="p-1"
            onMouseOver={handleHover1}
            onMouseOut={handleHover1}
          >
            <a href="">
              {
                <FacebookIcon
                  style={{
                    fontSize: 30,
                    color: `${hover1 ? "black" : "grey"}`,
                  }}
                />
              }
            </a>
          </li>
          <li
            className="p-1"
            onMouseOver={handleHover2}
            onMouseOut={handleHover2}
          >
            <a href="">
              {
                <TwitterIcon
                  style={{
                    fontSize: 30,
                    color: `${hover2 ? "black" : "grey"}`,
                  }}
                />
              }
            </a>
          </li>
          <li
            className="p-1"
            onMouseOver={handleHover3}
            onMouseOut={handleHover3}
          >
            <a href="">
              {
                <YouTubeIcon
                  style={{
                    fontSize: 30,
                    color: `${hover3 ? "black" : "grey"}`,
                  }}
                />
              }
            </a>
          </li>
          <li
            className="p-1"
            onMouseOver={handleHover4}
            onMouseOut={handleHover4}
          >
            <a href="">
              {
                <PinterestIcon
                  style={{
                    fontSize: 30,
                    color: `${hover4 ? "black" : "grey"}`,
                  }}
                />
              }
            </a>
          </li>
          <li
            className="p-1"
            onMouseOver={handleHover5}
            onMouseOut={handleHover5}
          >
            <a href="">
              {
                <InstagramIcon
                  style={{
                    fontSize: 30,
                    color: `${hover5 ? "black" : "grey"}`,
                  }}
                />
              }
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewsLetter;
