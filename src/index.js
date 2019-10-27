/* const element = document.createElement('h1');
element.innerText = 'Hello, Platzi';

const container =  document.getElementById('app');

container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";

//import BadgeNew from "./pages/BadgeNew";
//import Badges from "./pages/Badges";
import App from "./components/App";

//const element = <h1>Hello, Platzi!</h1>;

// React.createElement('tipo', 'atributos', 'hijos');

//const jsx = <h1>Hello, Platzi</h1>;
//const element = React.createElement("a", { href: "https://platzi.com" }, "Ir");
//const name = "Jorge";
//const element = React.createElement("h1", {}, `Hola, soy ${name}`);
//const jsx = <h1>Hola soy, {name}</h1>;

/* const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Richard"),
  React.createElement("p", {}, "Soy ingeniero de la web")
);
 */
const container = document.getElementById("app");

// ReactDom.render(_que, _donde);
//ReactDOM.render(jsx, container);
ReactDOM.render(<App />, container);

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */
