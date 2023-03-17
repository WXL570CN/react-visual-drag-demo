import styles from './index.less';

const Table = (props) => {
  const { propValue, style } = props;
  return (
    <table className={styles['table']}>
      <tbody>
        {propValue.data.map((item, index) => (
          <tr
            key={index}
            className={`${propValue.stripe && index % 2 && styles['stripe']} ${
              propValue.thBold && index === 0 && styles['bold']
            }`}
          >
            {item.map((e, i) => (
              <td key={i}>{e}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
