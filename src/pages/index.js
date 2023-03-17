import DragComList from '../components/DragComList';
import Editor from '../components/Editor';
import RealtimeComList from '../components/RealtimeComList';
import Toolbar from '../components/ToolBar';
import styles from './index.less';
import { useModel, useDispatch, useSelector } from 'umi';
import { useRef } from 'react';
import { DRAG_COM_LIST } from '../utils/contant';
import generateID, { deepCopy } from '../utils/utils';

export default function HomePage(props) {
  const dispatch = useDispatch(); // 获取dispatch
  const { isClickComponent } = useSelector((s) => s.drag); // 获取所有model的状态
  // const {
  //   addRealtimeList,
  //   isClickComponent,
  //   crearCurComponent,
  //   setIsClickComponent,
  // } = useModel('home');
  const editorRef = useRef(null);
  // 处理鼠标拖拽移入
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  // 处理鼠标拖拽松开
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const comType = JSON.parse(e.dataTransfer.getData('comType'));
    const rectInfo = editorRef.current.editorClient;
    if (comType) {
      const component =
        deepCopy(DRAG_COM_LIST.find((item) => item.type === comType)) || {};
      component.id = generateID();
      component.style.top = e.clientY - rectInfo.y;
      component.style.left = e.clientX - rectInfo.x;
      dispatch({
        type: 'drag/addRealtimeList',
        payload: component,
      });
    }
  };
  // 处理鼠标按下
  const handleMouseDown = (e) => {
    e.stopPropagation();
    dispatch({
      type: 'drag/setIsClickComponent',
      payload: false,
    });
  };
  // 处理鼠标抬起
  const handleMouseUp = () => {
    if (!isClickComponent) {
      dispatch({
        type: 'drag/setCurComponent',
      });
    }
  };
  return (
    <div className={styles['home']}>
      <Toolbar />
      <main className="flex_start_center">
        {/* 左侧组件列表 */}
        <section className={styles['left']}>
          <DragComList />
          <RealtimeComList />
        </section>
        {/* 中间画布 */}
        <section className={styles['center']}>
          <div
            className={styles['content']}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <Editor ref={editorRef} />
          </div>
        </section>
        {/* 右侧属性列表 */}
        <section className={styles['right']}></section>
      </main>
      {isPreview && (
        <Preview
          visible={isPreview}
          onCancel={() => {
            setIsPreview(false);
          }}
        />
      )}
    </div>
  );
}
