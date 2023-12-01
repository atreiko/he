import React, { DOMAttributes } from 'react';
import cn from 'classnames';
import { IconType, iconTypes } from './IconType';

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
}

const styles = '';

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <div className={cn(styles, className)} {...rest}>
      {getIcon(type)}
    </div>
  )
};
