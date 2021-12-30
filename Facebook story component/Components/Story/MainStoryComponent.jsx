import React from "react";
import CreateStoryComponent from "./CreateStoryComponent";
import IndividualStoriesComponent from "./IndividualStoriesComponent";
import styles from "../Story/Styles/Story.module.css";

function StoryComponent() {
  return (
    <div>
      <div className={styles.container}>
        <CreateStoryComponent />
        <IndividualStoriesComponent />
        <IndividualStoriesComponent />
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="100px"
          viewBox="0 0 24 24"
          width="100px"
          fill="#ffffff"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,5.52,4.48,10,10,10S22,17.52,22,12z M12,13l-4,0v-2l4,0V8l4,4l-4,4V13z" />
          </g>
        </svg>
        {/* <IndividualStoriesComponent />
        <IndividualStoriesComponent />
        <IndividualStoriesComponent /> */}
       
      </div>
    </div>
  );
}

export default StoryComponent;
