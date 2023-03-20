import { Button, Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { connect } from "umi";
import { CANVAS_STYLE, COM_LIST } from "../../utils/contant";
import { getScale } from "../../utils/utils";
import { toPng } from "html-to-image";
import Shape from "../Shape";
import styles from "./index.less";

const Preview = (props) => {
  const { open, isScreenshot, realtimeList } = props;
  const previewRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (!open) return;
    setScale(getScaleHandle());
  }, [open]);

  const htmlToImage = () => {
    console.log("==");
    toPng(previewRef.current)
      .then((dataUrl) => {
        console.log("『dataUrl』", dataUrl);
        const a = document.createElement("a");
        a.setAttribute("download", "screenshot");
        a.href = dataUrl;
        a.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      })
      .finally(() => {
        props.onCancel();
      });
  };

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
      footer={isScreenshot ? <Button onClick={htmlToImage}>截图</Button> : null}
      forceRender
      className={styles["preview-modal"]}
    >
      <div ref={previewRef} style={{ width: "100%", height: "100%" }}>
        {scale && renderComponent()}
      </div>
    </Modal>
  );
};

export default connect((state) => state.drag)(Preview);
