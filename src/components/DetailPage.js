import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '35%',

  },
  media: {
    width: '20rem',
    height: '30em',
    alignItems: 'center'
  },
});

export default function MediaCard(props) {
  const product = props.location.product;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product?.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product?.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {product?.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {product?.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="secondary">
          Add to Cart
        </Button>

      </CardActions>
    </Card>
  );
}



















// import React from "react";

// // import { ProductContext } from "../context/ProductContext";

// // const DetailPage = ({ product }) => {

// //   const { products, addProduct } = React.useContext(ProductContext);


// const DetailPage = (props) => {
//   console.log(props.location.product);
//   const product = props.location.product;


//   return (
//     <div className="details">
//       <h1>Product Details</h1>
//       <div className="image-container">
//         <img src={product?.image} alt="" />
//       </div>
//       <div className="detail-container">
//         <p>{product?.title}</p>
//         <p>{product?.price}</p>
//         <p>{product?.category}</p>
//         <p>{product?.description}</p>
//         {/* <button onClick={addProduct}>Add to Chart</button> */}
//       </div>
//     </div>
//   );
// };

// export default DetailPage;
