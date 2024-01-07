import { CircularProgress } from '@mui/material';

type LoadingProps = {
  marginTopBottom: string;
  marginLeftRight?: string;
};

const LoaderSmall = ({ marginTopBottom, marginLeftRight }: LoadingProps) => {
  const newMargin = marginLeftRight ? `${marginLeftRight}px` : 'auto';

  return (
    <CircularProgress
      sx={{
        color: '#ff05ea',
        margin: `${marginTopBottom}px ${newMargin}`,
      }}
    />
  );
};

export default LoaderSmall;
