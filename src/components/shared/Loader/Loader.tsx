import { CircularProgress, Backdrop } from '@mui/material';

type LoaderProps = {
  open: boolean;
};

const Loader = ({ open }: LoaderProps) => {
  return (
    <Backdrop sx={{ backgroundColor: 'fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="secondary" size="80px" />
    </Backdrop>
  );
};

export default Loader;
