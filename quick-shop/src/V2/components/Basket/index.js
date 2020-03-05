import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

import useStyles from './styles';
import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../selectors';
import BasketTable from './BasketTable';

const Basket = ({ phones, totalBasketPrice }) => {
  const classes = useStyles();

  const emptyCart = (
    <Typography variant="h4">
      Your shopping cart is empty.
    </Typography>
  );

  const totalPrice = (
    <div className={classes.totalPrice}>
      <b>Total:</b>${totalBasketPrice}
    </div>
  );

  const additionalActions = (
    <Fragment>
      <Button
        fullWidth
        startIcon={<DeleteForeverOutlinedIcon />}
        className={classes.cleanBasket}
      >
        Clean basket
      </Button>
      <Button
        fullWidth
        startIcon={<MailOutlineOutlinedIcon />}
        className={classes.checkout}
      >
        Checkout
      </Button>
    </Fragment>
  )

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          {(phones.length === 0) && emptyCart}
          <BasketTable phones={phones} />
          {(phones.length > 0) && totalPrice}
        </Grid>

        <Grid item xs={12} md={3}>
          <Link to="/" className={classes.continueShopping}>
            <Button fullWidth startIcon={<InfoOutlinedIcon />}>
              Continue shopping!
            </Button>
          </Link>

          {(phones.length > 0) && additionalActions}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  }
}

export default connect(mapStateToProps)(Basket);