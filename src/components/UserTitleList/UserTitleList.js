import classes from './UserTitleList.module.css'
import UserList from '../UserList/UserList';
import { userlist } from '../../utils/constants/mock-data';

const UserTitleList = () => {
  return <div className={classes.box}>
      <div className={classes.containerTitle}>
        <p><b>№</b></p>
        <p className={classes.mediumBoxForFIO}><b>Ф.И.</b></p>
        <p className={classes.mediumBox}><b>Номер телефона</b></p>
        <p className={classes.mediumBox}><b>Почта</b></p>
        <p className={classes.mediumBox}><b>Количество книг</b></p>
      </div>
      <hr className={classes.line}/>
      <div className={classes.containerList}>
        <UserList userlist={userlist}/>
      </div>
  </div>;
};

export default UserTitleList;
