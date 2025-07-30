import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement(
//         "div",
//         { id: "child" },
//         [React.createElement("h1", {}, "this is H1 tag "),
//         React.createElement("h2", {}, "this is H2 tag ")
//         ]
//     ), React.createElement(
//         "div",
//         { id: "child2" },
//         [React.createElement("h1", {}, "this is H1 tag "),
//         React.createElement("h2", {}, "this is H2 tag ")
//         ]
//     )]
// )

// to avoid this mess we created a JSX that we use

// const heading = React.createElement(
//     "h1", { id: "heading" }, "hello i am react"

// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement("h1", { id: "heading" }, "hey its react")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// babel transpiles it to React.elemet => then in the Reactelement obj =>HTML(render)
// const jsxhead = (
//     <h1 id= "heading" >
//     hello we are in react
//     </h1>
//     );
// root.render(jsxhead);

//React Functional Component = just a normal js Function
// const kunal = (
//     <h1 className="head"id="Title" tabIndex="5">
//     hey i am Kunal
//     </h1>
// );
// const Title =()=>(
//     <h1 className="head"id="Title" tabIndex="5">
//     hey i am title
//     </h1>
// );

// const num = 1000;

// const HeadingCompo = ()=>(
//     <div id="container">
//     {kunal}
//     <Title />
//     <h2 id="Title">{num+1000}</h2>
//     <h1 className="headingCompo"id="HeadingCompo"> this is react functional compo </h1>
// </div>
// )

const Header = () => {
  return (
    <div className="Header">
      <div>
        <img src="#"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>about </li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restrocard = (props) => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/6/19977066/93f2b9fafb2362b5cf1e4a77db35528c.jpg?fit=around|300:273&crop=300:273;*,*"
        alt="image"
      />
      <h3>{props.Res_name}</h3>
      <h4> {props.cuisine} </h4>
      <h4>{props.star_rating}</h4>
      {/* <h4>19 minutes </h4> */}
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="Res-container">
        <Restrocard
          Res_name="Meghana food"
          cuisine="Biryani , pulav"
          star_rating="4.4"
        />
        <Restrocard
          Res_name="KFC"
          cuisine="Burger , chicken"
          star_rating="4.9"
        />
        <Restrocard
          Res_name="Pizza Palace"
          cuisine="Pizza, Italian"
          star_rating="4.2"
        />
        <Restrocard
          Res_name="Curry House"
          cuisine="Indian, Curry"
          star_rating="4.6"
        />
        <Restrocard
          Res_name="Dragon Wok"
          cuisine="Chinese, Asian"
          star_rating="4.3"
        />
        <Restrocard
          Res_name="Burger Barn"
          cuisine="Burger, Fast Food"
          star_rating="4.1"
        />
        <Restrocard
          Res_name="Taco Town"
          cuisine="Mexican, Tacos"
          star_rating="4.7"
        />
        <Restrocard
          Res_name="Sushi Zen"
          cuisine="Japanese, Sushi"
          star_rating="4.8"
        />
        <Restrocard
          Res_name="Grill Master"
          cuisine="BBQ, Steak"
          star_rating="4.4"
        />
        <Restrocard
          Res_name="Falafel Corner"
          cuisine="Middle Eastern, Veg"
          star_rating="4.5"
        />
        <Restrocard
          Res_name="Pasta Point"
          cuisine="Italian, Pasta"
          star_rating="4.3"
        />
        <Restrocard
          Res_name="Biryani Express"
          cuisine="Indian, Biryani"
          star_rating="4.6"
        />
        <Restrocard
          Res_name="Waffle World"
          cuisine="Desserts, Waffles"
          star_rating="4.2"
        />
        <Restrocard
          Res_name="Chopsticks"
          cuisine="Asian, Noodles"
          star_rating="4.1"
        />
        <Restrocard
          Res_name="Smoothie Shack"
          cuisine="Healthy, Juices"
          star_rating="4.9"
        />
        <Restrocard
          Res_name="Momo Magic"
          cuisine="Nepalese, Momos"
          star_rating="4.4"
        />
        <Restrocard
          Res_name="The Pancake Spot"
          cuisine="Breakfast, Pancakes"
          star_rating="4.5"
        />
        <Restrocard
          Res_name="Spice Route"
          cuisine="Thai, Spicy"
          star_rating="4.3"
        />
        <Restrocard
          Res_name="Tandoori Treats"
          cuisine="Indian, Tandoori"
          star_rating="4.7"
        />
        <Restrocard
          Res_name="Urban Bites"
          cuisine="Fusion, Fast Casual"
          star_rating="4.0"
        />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
