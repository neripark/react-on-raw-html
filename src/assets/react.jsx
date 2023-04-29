const Text = (props) => <p style={{ color: props.textColor }}>{props.children}</p>;

const Button = () => {
  React.useEffect(() => {
    document.addEventListener("click", () => {
      console.log("document");
    });
    document.body.addEventListener("click", () => {
      console.log("body");
    });
  }, []);

  const onClick = (e) => {
    e.stopPropagation();
    console.log("clicked!");
  };

  return <button onClick={onClick}>click!</button>;
}

const Component = () => {
  return (
    <div>
      <Text textColor="#666">event delegate のテスト</Text>
      <Button />
    </div>
  );
}

// ___________________________________________________________________
//
const reactTarget = document.querySelector("#react-target");
const root = ReactDOM.createRoot(reactTarget);
root.render(<Component />);
console.log("React version::", React.version);
