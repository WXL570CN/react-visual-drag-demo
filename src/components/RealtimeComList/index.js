import { useModel, useDispatch, useSelector, connect } from 'umi';
import styles from './index.less';

const RealtimeComList = (props) => {
  console.log('『props』', props)
  const { realtimeList } = props;
  // const { realtimeList, moveUpComponent, moveDownComponent, deleteComponent } =
  //   useModel("home");
  const dispatch = useDispatch(); // 获取dispatch
  // const { realtimeList } = useSelector((s) => s.drag); // 获取所有model的状态
  console.log('『realtimeList』', realtimeList);
  return (
    <div className={styles['real-time-component-list']}>
      {realtimeList.map((item, index) => {
        return (
          <div key={index} className={`flex_start_center ${styles['list']}`}>
            <i className={`iconfont ${item.icon}`}></i>
            <span className={styles['name']}>{item.label}</span>
            <div className={styles['icon-container']}>
              <i
                className="iconfont icon-drag-up"
                onClick={() => {
                  // moveUpComponent(index);
                  dispatch({
                    type: 'drag/moveUpComponent',
                    payload: index,
                  });
                }}
              ></i>
              <i
                className="iconfont icon-drag-down"
                onClick={() => {
                  // moveDownComponent(index);
                  dispatch({
                    type: 'drag/moveDownComponent',
                    payload: index,
                  });
                }}
              ></i>
              <i
                className="iconfont icon-drag-delete"
                onClick={() => {
                  // deleteComponent(item.id);
                  dispatch({
                    type: 'drag/deleteComponent',
                    payload: item.id,
                  });
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect((s) => ({
  ...s.drag,
}))(RealtimeComList);
