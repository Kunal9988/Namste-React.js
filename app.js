// /* <div id ="parent">
//     <div id ="child">
//         <h1> hey i am grand child </h1>
//     </div>
// </div> */
// create this nested structure

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "this is H1 tag "),
        React.createElement("h2", {}, "this is H2 tag ")
        ]
    ), React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "this is H1 tag "),
        React.createElement("h2", {}, "this is H2 tag ")
        ]
    )]
)

// to avoid this mess we created a JSX that we use


const heading = React.createElement(
    "h1", { id: "heading" }, "hello i am react"

);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

