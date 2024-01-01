import { useState, cloneElement, type PropsWithChildren } from 'react';
import { styled, Tooltip, tooltipClasses, type TooltipProps } from '@mui/material';

const HtmlTooltip = styled(({ className, children, ...props }: PropsWithChildren<TooltipProps>) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cloneElement(children, { onMouseDown: () => setOpen(false) })}
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
