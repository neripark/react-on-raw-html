const reactTarget = document.querySelector("#react-target");

// const jsx = (<p>ほげほげ</p>);


const Text = (props) => {
  return (
    <p style={{color: props.textColor}}>{props.children}</p>
  );
};

const Component = () => {
  return (
    <Text textColor="#666">動作確認用テキスト</Text>
  );
}

ReactDOM.render(Component(), reactTarget);
