import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faRoute } from '@fortawesome/free-solid-svg-icons';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* <Typography variant="h5" className={classes.title}>
          Travel planner
        </Typography> */}

        <Typography variant="h5" className={classes.title}>
          <div className="logo flex">
            <FontAwesomeIcon icon={faRoute} />
            <span>Travel Planner</span>
          </div>
        </Typography>

        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


// ////////addded on search and workinh as required

// import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
// import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import useStyles from './styles.js';

// const Header = ({ onPlaceChanged, onLoad, onSearch }) => {
//   const classes = useStyles();

//   return (
//     <AppBar position="static">
//       <Toolbar className={classes.toolbar}>
//         <Typography variant="h5" className={classes.title}>
//           Travel planner
//         </Typography>
//         <Box display="flex">
//           <Typography variant="h6" className={classes.title}>
//             Explore new places
//           </Typography>
//           <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput,
//                 }}
//               />
//             </div>
//           </Autocomplete>
//           <Button variant="contained" color="primary" onClick={onSearch}>
//             Search
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };



// import React from "react";
// import useStyles from './styles.js';

// const Header = () => {
//   const classes = useStyles();

//   return (
//     <header className={classes.header}>
//       <h1 className={classes.logo}>Travel Planner</h1>
//     </header>
//   );
// };

// export default Header;