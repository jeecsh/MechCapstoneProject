import React from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';
import PanoramaIcon from '@mui/icons-material/Panorama';
import CallIcon from '@mui/icons-material/Call';
import { Link as ScrollLink } from 'react-scroll';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AddHomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/report',
    icon: <AssessmentIcon />,
    cName: 'nav-text'
  },

  {
    title: 'Team',
    path:  '/Teams',
    icon: <GroupsIcon />,
    cName: 'nav-text'
  },
 
  // {
  //   title: 'contact',
  //   path: '/contact',
  //   icon: <CallIcon />,
  //   cName: 'nav-text'
  // }
];