import React from 'react';
import { node, string, func } from 'prop-types';
import { StyledButton, StyledLinkButton } from './button.styles';

import IconBag from '../../../assets/images/icons/shopping-bag.svg';
import IconCart from '../../../assets/images/icons/shopping-cart.svg';
import IconPlus from '../../../assets/images/icons/plus.svg';
import IconUser from '../../../assets/images/icons/user.svg';
import IconX from '../../../assets/images/icons/x.svg';

const Button = ({ children, href, onClick, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLinkButton href={href} variant={variant}>
      {children}
    </StyledLinkButton>
  );
};

Button.proptypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
