import React from 'react';
import { node, string, func } from 'prop-types';
import { StyledButton, StyledLinkButton } from './button.styles';

import IconBag from '../../../assets/images/icons/shopping-bag.svg';
import IconCart from '../../../assets/images/icons/shopping-cart.svg';
import IconPlus from '../../../assets/images/icons/plus.svg';
import IconUser from '../../../assets/images/icons/user.svg';
import IconX from '../../../assets/images/icons/x.svg';

const icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const Button = ({ children, href, onClick, variant, icon }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon} />}
        {children}
      </StyledButton>
    );
  return (
    <StyledLinkButton href={href} variant={variant}>
      {icon && <ButtonIcon name={icon} />}
      {children}
    </StyledLinkButton>
  );
};

const ButtonIcon = ({ name }) => {
  if (icons[name] === undefined) return null;
  const Icon = icons[name];
  return (
    <span className='button__icon'>
      <Icon />
    </span>
  );
};

ButtonIcon.propTypes = {
  name: string.isRequired,
};

Button.proptypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
  icon: string,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
