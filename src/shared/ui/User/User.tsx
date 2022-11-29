import cn from 'classnames';
import style from './User.module.scss';

function User({ name, styles }) {
  return <div className={cn(style.user, styles)}>
    <h1>00</h1>
    <p>{name}</p>
  </div>
}

export default User;
