const StateExample = () => {
  const [value, setValue] = useState(0);
  // const state = useState(0);
  // const [count, setCount] = state;
  // const setValue = state[1];
  const onClick = () => {
    setValue(value + 1);
    console.log(value + 1);
  };
  return (
    <>
      <div>
        <h2>Value: {value}</h2>
        <button onClick={onClick}>Click me!</button>
      </div>
    </>
  );
};

export default StateExample;
