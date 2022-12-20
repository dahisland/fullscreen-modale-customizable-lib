import React from "react";
import "./modale-fullscreen.css";

const ModaleFullscreen = (props) => {
  return (
    <div className="modale-global-container" id={props.idGlobalContainer}>
      <div className={"modale-inner-container"} id={props.idInnerContainer}>
        <div className={"modale-header"} id={props.idModaleHeader}>
          <p className="modale-title" id={props.idModaleTitle}>
            {props.modaleTitle}
          </p>
          <span
            className={"modale-icon"}
            id={props.idModaleIcon}
            onClick={props.eventOnClickIcon}
          >
            {props.modaleIcon ? props.modaleIcon : "X"}
          </span>
        </div>
        <div className="modale-content" id={props.idModaleContent}>
          {props.modaleContent}
        </div>
      </div>
    </div>
  );
};

export default ModaleFullscreen;
