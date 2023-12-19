import { Box, Menu, MenuItem } from '@mui/material';
import { useState, type MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../../../../assets/icons/menu-icon.svg';
import type { HeaderButton } from '../../../../types';

import styles from './BurgerMenu.module.css';

type BurgerMenuProps = {
  buttons: HeaderButton[];
};

const BurgerMenu = ({ buttons }: BurgerMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <button className={styles.button} color="inherit" onClick={handleClick}>
        <img className={styles.image} src={menu} alt="burger menu" />
      </button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ display: { xs: 'flex', sm: 'none' } }}>
        {buttons.map(({ value, to, func }) => (
          <MenuItem key={to} onClick={handleClose}>
            <NavLink to={to} onClick={func}>
              {value}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
