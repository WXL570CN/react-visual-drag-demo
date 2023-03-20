import { useEffect, useRef, useState } from "react";
import styles from "./index.less";

const Star = (props) => {
  const {
    style: { width, height, borderColor, backgroundColor },
  } = props;

  const star = useRef(null);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    drawPolygon(width, height);
  }, [width, height]);

  const drawPolygon = (width, height) => {
    // 五角星十个坐标点的比例集合
    const _points = [
      [0.5, 0],
      [0.625, 0.375],
      [1, 0.375],
      [0.75, 0.625],
      [0.875, 1],
      [0.5, 0.75],
      [0.125, 1],
      [0.25, 0.625],
      [0, 0.375],
      [0.375, 0.375],
    ];

    const coordinatePoints = _points.map(
      (point) => width * point[0] + " " + height * point[1]
    );
    setPoints(coordinatePoints.toString());
  };
  return (
    <div className={styles["svg-star-container"]}>
      <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
        <polygon
          ref={star}
          points={points}
          stroke={borderColor}
          fill={backgroundColor}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default Star;
