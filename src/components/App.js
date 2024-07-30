import React from "react";
import { format } from "date-fns";
// react and date-fns are both npm packages.App.js is pulling on specific cnontent foem these two packages.
// react and date-fns are being imported from node-modules folder which was created when we ran npm install.
import ExampleComponent from "./ExampleComponent";
// the import for ExampleComponent is slightly different as it is not being imported from a packagehere we are importing something compeletely different
// from within our project's file tree.
// by importing ./ExampleCompnent, we make <ExampleComponent /> avaiable for use in the App components return statement.
import TestComponent from "./TestComponent";
// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1> 
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
  // from the app function that format from the date-fns library is being used in the return statement
  // when we call format
}

export default App;
// with export by including the export line, we are allowing other files to import things from the for example this App.js
// you can have only one default export per file.
// there are different tupes of exports, named exports and default exports.
// Default exports- the line export defalut app denotes that our app function is the main thing we want to export from out app.js file
// you can have only one default export per file.
// when you look at index.js file, you can see tat he top of the file that we are importingapp form the app.js file in the src/components direnctory
// the (.js) deos not need to be included . this import statement is what we use to import somthing that is the default export of another file.
// import App from "./components/App";