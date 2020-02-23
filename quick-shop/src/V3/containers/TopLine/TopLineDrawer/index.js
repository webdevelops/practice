import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

import useStyles from '../useStyles';
import { connect } from 'react-redux';

const TopLineDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  const links = [
    { to: '/', label: 'Phones', icon: <SmartphoneIcon style={{color: 'orange'}} /> },
    { to: '/basket', label: 'Basket', icon: <ShoppingBasketIcon style={{color: 'green'}} /> },
    { to: '/sign-up', label: 'Sign Up', icon: <i className='fas fa-user-plus' style={{ color: 'blue' }}></i> }
  ]

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {links.map(link => (
          <ListItem button key={link.label}>
            <Link to={link.to} className={classes.link}>
              <ListItemIcon className={classes.linkIcon}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.linkIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor='left' open={open} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.
  }
}

export default connect(mapStateToProps)(TopLineDrawer)