// import React, { useState, useEffect, createRef } from 'react';
import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions,Chip } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';
// import PoolIcon from '@material-ui/icons/Pool';
// import LocalParkingIcon from '@material-ui/icons/LocalParking';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        // title={place.name}
        alt={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt={award.image.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button> */}
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;






// const PlaceDetails = ({ place, selected, refProp, onClick }) => {
//   useEffect(() => {
//     if (selected && refProp?.current) {
//       refProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [selected, refProp]);

//   const handleClick = () => {
//     onClick(place);
//   };

//   return (
//     <Card elevation={6} onClick={onClick}>
//       <CardMedia
//         style={{ height: 350 }}
//         image={place.main_photo_url || 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//         title={place.hotel_name_trans}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5">{place.hotel_name_trans}</Typography>

//         <Box display="flex" justifyContent="space-between" my={1}>
//           <Rating name="read-only" value={Number(place.review_score)} readOnly />
//           <Typography variant="subtitle1"> out of {place.review_nr} reviews </Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between" my={1}>
//           <Typography variant="subtitle1">Price</Typography>
//           <Typography variant="subtitle1">${Math.ceil(place.composite_price_breakdown.gross_amount_per_night.value)}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between" my={1}>
//           <Box display="flex" alignItems="center">
//             <PoolIcon color={place.has_swimming_pool ? 'primary' : 'disabled'} />
//             <Typography variant="subtitle1" ml={1}>
//               Swimming Pool: {place.has_swimming_pool ? 'Yes' : 'No'}
//             </Typography>
//           </Box>
//           <Box display="flex" alignItems="center">
//             <LocalParkingIcon color={place.has_free_parking ? 'primary' : 'disabled'} />
//             <Typography variant="subtitle1" ml={1}>
//               Parking: {place.has_free_parking ? 'Yes' : 'No'}
//             </Typography>
//           </Box>
//         </Box>
//         {place.checkout && (
//           <Typography variant="subtitle1" color="textSecondary" z>
//             Check-out: {place.checkout.until}
//           </Typography>
//         )}
//       </CardContent>
//       <CardActions>
//         <Button size="small" color="primary" fullWidth onClick={() => window.open(place.website, '_blank')}>
//           SEE AVAILABILITY
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default PlaceDetails;



