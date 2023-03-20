import { useRef, useState } from "react";
import { useDispatch } from "umi";
import styles from "./index.less";

const Text = (props) => {
  const { style, name } = props;
  const dispatch = useDispatch()

  const textRef = useRef(null);
  const [propValue, setPropValue] = useState(props.propValue);
  const [canEdit, setCanEdit] = useState("false");
  const handleDoubleClick = () => {
    setCanEdit("true");
  };

  const handleOnBlur = () => {
    setPropValue(textRef.current.innerHTML);
    dispatch({
      type: "drag/updateTextComponent",
      payload: textRef.current.innerHTML,
    });
    setCanEdit('false')
  };

  return (
    <div className={styles["text-box"]} style={style} title={name}>
      <div
        ref={textRef}
        className={`${styles["name"]} ${canEdit && styles["can-edit"]}`}
        contenteditable={canEdit}
        dangerouslySetInnerHTML={{ __html: propValue }}
        onDoubleClick={handleDoubleClick}
        onBlur={handleOnBlur}
      ></div>
    </div>
  );
};

export default Text;
