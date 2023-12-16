import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

import styles from './DeveloperCard.module.css';

interface DeveloperCardProps {
  image: string;
  title: string;
  text: string;
}

const DeveloperCard = ({ image, title, text }: DeveloperCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className={styles.card}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DeveloperCard;
