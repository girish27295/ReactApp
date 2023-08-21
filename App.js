import React from "react";
import   ReactDOM   from "react-dom/client";

const parent= React.createElement("div",{ id: "parent" }, [
     React.createElement("div",{id: "child" }, [
      React.createElement("h1" , {}, "its  an namaste react course"),
      React.createElement("h2" , {}, "im an h2 tag")
     ]),
     React.createElement("div",{id: "child2" }, [
        React.createElement("h1" , {}, "im an h1 tag"),
        React.createElement("h2" , {}, "im an h2 tag")
     ]),
    ]);


const heading= React.createElement("h1",
{id: "heading" },
     "hello world from React");

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);