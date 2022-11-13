import Third from "./Third.js";
function Second(props) {
  return (
    <>
      <Third itemFromSecond={props.item} />
    </>
  );
}

export default Second;
