import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import "./NotFound.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="PageNotFound">
        <ErrorIcon />
        <Typography>Page Not Found</Typography>
        <Link to="/">Jangam Pickles</Link>
      
    </div>
  )
};

export default NotFound;
