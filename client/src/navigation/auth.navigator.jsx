import React from 'react';
import { Route } from 'react-router-dom';

import { LoginPage } from '../pages/auth/login/login.page';
import { RegisterPage } from '../pages/auth/register/register.page';


export const authNavigator = (
  <Route>
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
  </Route>
)
