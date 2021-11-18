import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Main(props) {
  // const { posts, title } = props;
  const title = props.title;
  const posts = props.posts

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Box component="li" sx={{ mt: 1, typography: 'body1' }}>
          <Typography>
            Sample blog post
            April 1, 2020 by Olivier
            This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

            Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

            Heading
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

            Sub-heading
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

            Sub-heading
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Donec id elit non mi porta gravida at eget metus.
            Nulla vitae elit libero, a pharetra augue.
            Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

            Vestibulum id ligula porta felis euismod semper.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
          </Typography>
        </Box>
      ))}
    </Grid>
  );
}