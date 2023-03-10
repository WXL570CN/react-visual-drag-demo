// import { Link, Outlet } from 'umi';
// import styles from './index.less';

// export default function Layout() {
//   return (
//     <div className={styles.navs}>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </div>
//   );
// }
import { Outlet } from 'umi';

export default function Layout() {
  return <Outlet />;
}
