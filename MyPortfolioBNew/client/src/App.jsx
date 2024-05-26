/* 
File Name: App.jsx
Author: Xueqiu(Joey) Chen
ID: 301310177
Date: 2024-05-24
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;

