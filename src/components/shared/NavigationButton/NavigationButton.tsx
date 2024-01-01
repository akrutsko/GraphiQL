import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

type NavigationButtonProps = {
  to: string | undefined;
  value: string;
  func: (() => void) | undefined;
};

const NavigationButton = ({ to, value, func }: NavigationButtonProps) => {
  const location = useLocation();

  if (location.pathname === to) {
    return null;
  }

  return to ? (
    <NavLink key={value} to={to}>
      {value}
    </NavLink>
  ) : (
    <Button key={value} onClick={func}>
      {value}
    </Button>
  );
};

export default NavigationButton;
