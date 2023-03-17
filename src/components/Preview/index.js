import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { useModel } from "umi";
import { CANVAS_STYLE, COM_LIST } from "../../utils/contant";
import { getScale } from "../../utils/utils";
import Shape from "../Shape";
import styles from "./index.less";

const Preview = (props) => {
  const { visible } = props;
  const { realtimeList } = useModel("home");
  const previewRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (!visible) return;
    setScale(getScaleHandle());
  }, [visible]);

  const getScaleHandle = () => {
    const { clientHeight, clientWidth } = previewRef.current || {};
    return getScale(
      CANVAS_STYLE.width,
      CANVAS_STYLE.height,
      clientWidth,
      clientHeight
    );
  };

  const renderComponent = () => {
    return (
      <div
        style={{
          ...CANVAS_STYLE,
          position: "relative",
          transform: `scale(${scale})`,
          transformOrigin: "0% 0%",
        }}
      >
        {realtimeList.map((item, index) => {
          let Com = COM_LIST[item.type];
          return (
            <Shape key={item.id} style={item.style} isPreview>
              <Com {...item} visible />
            </Shape>
          );
        })}
      </div>
    );
  };

  return (
    <Modal
      title="预览"
      {...props}
      width={800}
      footer={null}
      forceRender
      className={styles["preview-modal"]}
    >
      <div ref={previewRef} style={{ width: "100%", height: "100%" }}>
        {scale && renderComponent()}
      </div>
    </Modal>
  );
};

export default Preview;
