import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

export default function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <CardActionArea component="a" href="#">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1 }}>
            <Box sx={{ mb: 2 }}>
              <WallpaperIcon />
            </Box>
            <Typography variant="h6">
              {post.title}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle1" alignCenter component="span" paragraph>
                {post.description}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Grid>
  );
}