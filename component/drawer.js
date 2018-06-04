import React, { Component } from 'react';
import {StackNavigator } from  'react-navigation';
import {DrawerNavigator } from  'react-navigation';

import Main from './component/Main';
import Firstscr from "../screen/Firstscr";




const DrawerExample=DrawerNavigator(
    {
        first:{
            path:'/',
            screen:Firstscr
        }


    },
    {
        initialRouteName:'first',
        drawerPosition:'left'

    }
);

export default Navigation;