import { useEffect, useRef, useState } from "react";
import styles from "./index.less";

const Tri = (props) => {
  const {
    style: { width, height, borderColor, backgroundColor },
  } = props;

  const star = useRef(null);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    drawTriangle(width, height);
  }, [width, height]);

  const drawTriangle = (width, height) => {
    // 三角形三个坐标点的比例集合
    const _points = [
      [0.5, 0.05],
      [1, 0.95],
      [0, 0.95],
  ]

    const coordinatePoints = _points.map(
      (point) => width * point[0] + " " + height * point[1]
    );
    setPoints(coordinatePoints.toString());
  };
  return (
    <div className={styles["svg-triangle-container"]}>
      <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
        <polygon
          ref={star}
          points={points}
          stroke={borderColor}
          fill={backgroundColor}
          stroke-width="1"
        />
      </svg>
    </div>
  );
};

export default Tri;
