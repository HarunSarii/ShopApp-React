import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" style={{ color: "white" }}>
            SHOP-PAGE
          </a>
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
              //   onClick={() => SignOut()}
            >
              Checkout
            </button>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon
                  className="dropbtn"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </StyledBadge>
            </IconButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
