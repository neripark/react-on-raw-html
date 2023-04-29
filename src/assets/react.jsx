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
    // todo: Fragment を Babelが認識しないのでdiv。原因を調べる
    <div>
      <h1>React リーディング</h1>
      <div>
        <Text textColor="#666">event delegate のテスト</Text>
        <Button />
      </div>
    </div>
  );
}

// ___________________________________________________________________
//
const reactTarget = document.querySelector("#react-target");
const root = ReactDOM.createRoot(reactTarget);
root.render(<Component />);
console.log("React version::", React.version);
