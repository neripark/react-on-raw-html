const test = () => {
  console.log("app init.");
}
test();

// ___________________________________________________________________
//
const target = document.querySelector("#root");
const element = React.createElement(
  "p", {}, "Hello, React."
);

ReactDOM.render(element, target);
