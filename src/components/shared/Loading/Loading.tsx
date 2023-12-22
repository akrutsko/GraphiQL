import { CircularProgress } from '@mui/material';

type LoadingProps = {
  marginTop: string;
};

const Loading = ({ marginTop }: LoadingProps) => {
  return (
    <CircularProgress
      color="secondary"
      sx={{
        margin: `${marginTop}px auto`,
      }}
    />
  );
};

export default Loading;
