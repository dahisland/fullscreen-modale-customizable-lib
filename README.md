# FULLSCREEN MODALE CUSTOMIZABLE LIBRARY

A simple React component fullscreen modale centered and easily customizable.

NPM package is available here : url.<br/>
Github repository is available here : https://github.com/dahisland/fullscreen-modale-customizable-lib.

## \* INSTALLATION

Simply use your terminal to run the command :

`npm install modale-fullscreen-customizable`

## \* USE COMPONENT

Import this component in your project by using at top of the react js file of your choice :

`import { ModaleFullscreen } from "modale-fullscreen-customizable";`

## \* HOW IT WORKS

By default, this modale only display an empty container with an icon used to close modale by using the function of your choice.

You can customize all the content by using these props :

### `eventOnClickIcon`

Props (function) to define the function called on click upon the modale close icon.
By default, icon on click has no function.

ex : `eventOnClickIcon={() => setModaleIsOpened(false)}`

### `modaleTitle`

Props (string) to add a title at your modale. The title will be displayed at top of the modale, to the left of the icon close.
By default, modale has no title.

ex : `modaleTitle={"WELL DONE !"}`

### `modaleIcon`

Props (string, img, svg) to personnalize the close icon. The icon is a span, so you can choose to change the text by simply using a string, or choose to add an <img>, or a <svg> element.
By default, this props has a string "X". If you don't want to display any text, you have to use this props with an empty string.

ex : `modaleIcon={""}`

### `modaleContent`

Props (HTML content, component, string) to add the content message displayed in the modale.
By default, this props is empty.

ex : `modaleContent={<p>This modale is awesome !</p>}`

### Props ids

Each HTML element can receive the id of your choice if you want to stylize each element.

- `idGlobaleContainer` (string)

  ex : `idGlobaleContainer={"id-of-your-choice-for-global-modale-container"}`

  Note: By default, the global container has a z-index to 999 to be sure that the fullscreen modale will be displayed ahead your others elements.

- `idInnerContainer` (string)

  ex : `idInnerContainer={"id-of-your-choice-for-modale-inner-container"}`

- `idModaleHeader` (string)

  ex : `idModaleHeader={"id-of-your-choice-for-container-header"}`

- `idModaleTitle` (string)

  ex : `idModaleTitle={"id-of-your-choice-for-modale-title"}`

- `idModaleIcon` (string)

  ex : `idModaleIcon={"id-of-your-choice-for-span-icon"}`

- `idModaleContent` (string)

  ex : `idModaleContent={"id-of-your-choice-for-div-content-modale"}`
