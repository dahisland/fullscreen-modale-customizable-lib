import { ModaleFullscreen } from "./lib";
import { useState } from "react";
import "./App.css";

function App() {
  const [modaleIsOpened, setModaleIsOpened] = useState(false);
  return (
    <div className="test-library-component-container">
      <h1> FULLSCREEN MODALE CUSTOMIZABLE LIBRARY</h1>
      <p>This is a complete usage's example of this fullscreen modale.</p>
      <button onClick={() => setModaleIsOpened(true)}>Open modale</button>
      {modaleIsOpened ? (
        <ModaleFullscreen
          // This props need to receive the function you want to use to close the modale on click icon
          eventOnClickIcon={() => setModaleIsOpened(false)}
          // If you want to give a title of your modale, you can use this props
          modaleTitle={"WELL DONE !"}
          // Icon container is a span. You can personnalize it by changing text
          // or delete default text by simply give to this props an empty string.
          // You can also add img, svg, or simply use a background-img
          modaleIcon={"Close"}
          // This props can receive a component or HTML content of your choice
          modaleContent={<p>This modale is awesome !</p>}
          // Each element can be fully stylized by simply give it an id with these props
          idGlobaleContainer={"id-of-your-choice-for-global-modale-container"}
          idInnerContainer={"id-of-your-choice-for-modale-inner-container"}
          idModaleHeader={"id-of-your-choice-for-container-header"}
          idModaleTitle={"id-of-your-choice-for-modale-title"}
          idModaleIcon={"id-of-your-choice-for-span-icon"}
          idModaleContent={"id-of-your-choice-for-div-content-modale"}
        />
      ) : null}
    </div>
  );
}

export default App;
