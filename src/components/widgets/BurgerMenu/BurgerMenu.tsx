import { Box, Menu, MenuItem } from '@mui/material';
import { useState, type MouseEvent, useEffect } from 'react';

import type { HeaderButton } from '../../../types';
import { SCREEN_WIDTH } from '../../../constants';
import NavigationButton from '../../shared/NavigationButton/NavigationButton';
import menu from '../../../assets/icons/menu-icon.svg';

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

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= SCREEN_WIDTH) {
        handleClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <button className={styles.button} color="inherit" onClick={handleClick} aria-controls={open ? 'burger-menu' : undefined}>
        <img className={styles.image} src={menu} alt="burger menu" />
      </button>
      <Menu
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        id="burger-menu"
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {buttons.map(({ value, to, func }) => (
          <MenuItem key={value} onClick={handleClose}>
            <NavigationButton value={value} to={to} func={func} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
