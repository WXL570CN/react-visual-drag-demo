import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { useModel } from "umi";
import { CANVAS_STYLE, COM_LIST } from "../../utils/contant";
import { getScale } from "../../utils/utils";
import Shape from "../Shape";
import styles from './index.less';

const Preview = (props) => {
  const { realtimeList } = useModel("home");
  const previewRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!previewRef.current) return;
    setScale(getScaleHandle());
  }, [previewRef.current]);

  const getScaleHandle = () => {
    const { clientHeight, clientWidth } = previewRef.current || {};
    return getScale(
      CANVAS_STYLE.width,
      CANVAS_STYLE.height,
      clientWidth,
      clientHeight
    );
  };

  return (
    <Modal title='预览' {...props} width={800} footer={null} className={styles['preview-modal']}>
      <div ref={previewRef} style={{ width: "100%", height: "100%" }}>
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
                <Com {...item} />
              </Shape>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default Preview;
