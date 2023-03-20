import { connect } from "umi";
import styles from "./index.less";

const Upload = (props) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.includes("image")) {
      toast("只能插入图片");
      return;
    }

    const reader = new FileReader();
    reader.onload = (res) => {
      const fileResult = res.target.result;
      const img = new Image();
      img.onload = () => {
        props.onChange({
          url: fileResult,
          width: img.width,
          height: img.height,
        });
      };

      img.src = fileResult;
    };

    reader.readAsDataURL(file);
  };
  return (
    <label for="input" className={styles["insert"]}>
      插入图片
      <input id="input" type="file" hidden onChange={onChange} />
    </label>
  );
};

export default connect((state) => state.drag)(Upload);
