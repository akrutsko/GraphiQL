import type { TooltipProps } from '@mui/material';
import { styled, Tooltip, tooltipClasses } from '@mui/material';
import React, { useState } from 'react';

interface HtmlTooltipProps extends TooltipProps {
  children: React.ReactElement;
}

const HtmlTooltip = styled(({ className, children, ...props }: HtmlTooltipProps) => {
  const [open, setOpen] = useState(false);

  const openWithDelay = () => {
    setTimeout(() => setOpen(true), 500);
  };

  return (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      open={open}
      onMouseEnter={openWithDelay}
      onMouseLeave={() => setOpen(false)}
    >
      {React.cloneElement(children, { onMouseDown: () => setOpen(false) })}
    </Tooltip>
  );
})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontFamily: 'Inconsolata, monospace',
    backgroundColor: theme.palette.secondary.main,
    color: 'inherit',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px',
    borderRadius: 0,
  },
}));

export default HtmlTooltip;
