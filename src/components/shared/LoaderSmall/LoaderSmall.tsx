import { CircularProgress } from '@mui/material';

type LoadingProps = {
  marginTopBottom: string;
  marginLeftRight?: string;
};

const LoaderSmall = ({ marginTopBottom, marginLeftRight }: LoadingProps) => {
  const newMargin = marginLeftRight ? `${marginLeftRight}px` : 'auto';

  return (
    <CircularProgress
      color="secondary"
      sx={{
        margin: `${marginTopBottom}px ${newMargin}`,
      }}
    />
  );
};

export default LoaderSmall;
