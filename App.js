import React, { Component } from 'react';
import {StackNavigator } from  'react-navigation';
import {DrawerNavigator } from  'react-navigation';

import Splash from './component/Splash';
import Main from './component/Main';
import Loginscr from './screen/Loginscr';
import Signupscr from './screen/Signupscr';
import Firstscr from  './screen/Firstscr';


const Navigation =StackNavigator({
    Home:{
        screen:Splash
    },
    main:{
        screen:Main
    },
    login:{
        screen:Loginscr
    },
    signup:{
        screen:Signupscr
    },
    first:{
        screen:Main
    }


});


export default Navigation;