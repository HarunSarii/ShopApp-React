import React, { useContext } from "react";
import { useHistory } from "react-router-dom";


import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuIcon from '@material-ui/icons/Menu';
import { ProductContext } from "../context/ProductContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(4, 0, 2),
    flexGrow: 1,
    maxWidth: 752,
    minWidth: 700,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
}));
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Navbar = ({ product }) => {
  const { products, addProduct } = React.useContext(ProductContext);
  // const { product } = useContext(ProductContext);

  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const history = useHistory();
  const checkOut = () => {
    history.push({
      pathname: "/cartPage",
      product: product,
    });
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" style={{ color: "white" }}>
            SHOP-PAGE
          </a>
          <MenuIcon
          //  onClick={sidebarToggle}
             style={{marginLeft: "1rem", marginBottom : '1rem'}} />
          <div className="buttons">
          
            <button type="button" class="ms-2 btn btn-outline-light">
              Today's Deals
            </button>
            <button type="button" class="ms-2 btn btn-outline-light">
              Login
            </button>
            <button type="button" class="ms-2 btn btn-outline-light">
              Register
            </button>
            <button
              type="button"
              class="ms-2 btn btn-outline-light"
              onClick={checkOut}
            >
              Checkout
            </button>

            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={products?.length ? products.length : 0}
                color="secondary"
              >
                <ShoppingCartIcon
                  className="dropbtn"
                  style={{ width: "3rem", height: "3rem" }}
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                />
              </StyledBadge>
            </IconButton>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <div className={classes.root}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                      Items in your cart
                    </Typography>
                    <div className={classes.demo}>
                      <List dense={dense}>
                        {products.length ? (products?.map((product) => {
                          return (
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <img src={product.image} style={{ width: "3rem", height: "3rem" }} />
                              
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={product.title}
                                secondary={product.price}
                              />
                            </ListItem>
                          );
                        })) : (<p>You don't have any item in your cart!</p>)}
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Popover>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
