import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
    },
    {
    title: 'Game collection',
    path: '/Gamecol',
    icon: <RiIcons.RiGameFill />,
    className: 'nav-text'
    },
    {
    title: 'Add games',
    path: '/Search',
    icon: <FaIcons.FaSearch />,
    className: 'nav-text'
    },    
]