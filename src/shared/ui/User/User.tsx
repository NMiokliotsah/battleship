import React from 'react';
import cn from 'classnames';

import style from './User.module.scss';

interface IUSer {
  name: string,
  styles: string,
}

function User({ name, styles }: IUSer) {
  return <div className={cn(style.user, styles)}>
    <h1>00</h1>
    <p>{name}</p>
  </div>
}

export default React.memo(User);
