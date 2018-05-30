import React, { Component } from 'react';
import {StackNavigator } from  'react-navigation';

import Splash from './component/Splash';
import Main from './component/Main';
import Loginscr from "./screen/Loginscr";
import Signupscr from "./screen/Signupscr";


const Navigation =StackNavigator({

    main:{
        screen:Main
    },
    login:{
        screen:Loginscr
    },
    signup:{
        screen:Signupscr
    },


});

export default Navigation;