import { CircularProgress } from '@mui/material';

type LoadingProps = {
  marginTop: string;
};

const LoaderSmall = ({ marginTop }: LoadingProps) => {
  return (
    <CircularProgress
      color="secondary"
      sx={{
        margin: `${marginTop}px auto`,
      }}
    />
  );
};

export default LoaderSmall;
