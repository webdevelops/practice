import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Phones from 'containers/phones'
import Phone from 'containers/phone'
import Basket from 'containers/basket'
import Auth from 'containers/auth'

export default (
  <Switch>
    <Route exact path='/' component={Phones} />
    <Route path='/phones/:id' component={Phone} />
    <Route path='/categories/:id' component={Phones} />
    <Route path='/basket' component={Basket} />
    <Route path='/authorization' component={Auth} />>
  </Switch>
)