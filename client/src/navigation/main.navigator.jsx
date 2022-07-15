import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage } from "../pages/home/home.page";


export const mainNvigator = (
  <Route path='/' exact element={<HomePage />} />
);