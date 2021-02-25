import React from 'react';
import CmtVertical from '../../../../../@coremat/CmtNavigation/Vertical';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IntlMessages from '../../../../utils/IntlMessages';
import { PostAdd, Today } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles(theme => ({
  perfectScrollbarSidebar: {
    height: '100%',
    transition: 'all 0.3s ease',
    '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {
      height: 'calc(100% - 167px)',
    },
    '.Cmt-modernLayout &': {
      height: 'calc(100% - 72px)',
    },
    '.Cmt-miniLayout &': {
      height: 'calc(100% - 91px)',
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      height: 'calc(100% - 167px)',
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const navigationMenus = [
    {
      name: <IntlMessages id={'sidebar.main'} />,
      type: 'section',
      children: [
        {
          name: <IntlMessages id={'pages.dashboard'} />,
          icon: <DashboardIcon />,
          type: 'item',
          link: '/dashboard',
        },
        {
          name: <IntlMessages id={'pages.samplePage'} />,
          icon: <PostAdd />,
          type: 'item',
          link: '/sample-page',
        },
        {
          name: <IntlMessages id={'pages.projectPage'} />,
          icon: <Today />,
          type: 'item',
          link: '/project',
        },
      ],
    },
  ];

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  );
};

export default SideBar;
