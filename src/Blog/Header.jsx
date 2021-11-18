import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

export default function Header(props) {
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ backgroundColor:  'primary.main', mt: -4}}      
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            underline="none"
            key={section.title}
            variant="h6"
            href={section.url}
            sx={{ mb: 2, pt: 2, pl: 5, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}