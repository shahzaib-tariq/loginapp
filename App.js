import React, { Component } from 'react';
import {StackNavigator } from  'react-navigation';
import {DrawerNavigator } from  'react-navigation';

import Splash from './component/Splash';
import Main from './component/Main';
import Loginscr from './screen/Loginscr';
import Signupscr from './screen/Signupscr';
import AlbumList from './screen/AlbumList';
import Account from './screen/Account';
import ForGetPassword from './screen/ForGetPassword';

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
    account:{
        screen:AlbumList
    },
    ForgetPassword:{
        screen:ForGetPassword
    }



});


export default Navigation;