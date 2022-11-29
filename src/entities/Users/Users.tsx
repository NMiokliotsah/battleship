import User from "../../shared/ui/User";

import style from './Users.module.scss';

function Users() {
  return <div className={style.users}>
    <User styles={style.firstUser} name='player 1'/>
    <User styles={style.secondUser} name='player 2'/>
  </div>
}

export default Users;
