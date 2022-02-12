import React from 'react';
import * as svg from './svg';
import Icon from '@ant-design/icons';

const CustomIcon = ({ name, className, style, css, onClick }) => {
  return (
    <Icon
      component={svg[name]}
      className={className}
      style={style}
      css={css}
      onClick={onClick}
    />
  );
}

export default CustomIcon;

