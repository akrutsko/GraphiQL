import { NavLink } from 'react-router-dom';

type NavigationButtonProps = {
  to: string | undefined;
  value: string;
  func: (() => void) | undefined;
};

const NavigationButton = ({ to, value, func }: NavigationButtonProps) => {
  return to ? (
    <NavLink key={value} to={to}>
      {value}
    </NavLink>
  ) : (
    <button key={value} onClick={func}>
      {value}
    </button>
  );
};

export default NavigationButton;
