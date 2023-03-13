const Picture = (props) => {
  const { propValue, style } = props;
  return (
    <div style={style}>
      <img
        draggable={false}
        src={propValue}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Picture;
