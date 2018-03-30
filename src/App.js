import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, SideMenu, SideMenuItem, Icon } from '@veneer/core';
import Dashboard from './pages/Dashboard';
import MyCustomers from './pages/MyCustomers';
import Neworder from './pages/Neworder';
import Myorders from './pages/Myorders';
import PartnerProfile from './pages/PartnerProfile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import FormsPage from './pages/FormsPage';
import HomePage from './pages/HomePage';
import TablePage from './pages/TablePage';
import logo from './hp.svg';
import './App.css';
  
const handleClick = (history, path) => (event) => {
  event.preventDefault();
  history.push(path);
}

const innerPages = [
  // {
  //   component: ChartsPage,
  //   crumbs: [
  //     {
  //       text: "Home",
  //       url: "/",
  //     }, 
  //     {
  //       text: "Charts",
  //     }
  //   ],
  //   key: "charts",
  //   label: "Charts",
  //   route: {
  //     path: '/charts',
  //   },
  //   title: "Charts",
  // },
  // {
  //   component: FormsPage,
  //   crumbs: [
  //     {
  //       text: "Home",
  //       url: "/",
  //     },
  //     {
  //       text: "Forms",
  //     }
  //   ],
  //   key: 'forms',
  //   label: "Forms",
  //   route: {
  //     path: '/forms',
  //   },
  //   title: "Forms",
  // },
  // {
  //   component: TablePage,
  //   crumbs: [
  //     {
  //       text: "Home",
  //       url: "/",
  //     },
  //     {
  //       text: "Tables",
  //     }
  //   ],
  //   key: 'tables',
  //   label: "Tables",
  //   route: {
  //     path: '/tables',
  //   },
  //   title: "Tables",
  // },
  {
    component: Dashboard,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Dashboard",
      }
    ],
    key: 'dashboard',
    label: "Dashboard",
    icon:"dashboard",
    route: {
      path: '/dashboard',
    },
    title: "Dashboard",
  },
  {
    component: MyCustomers,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "MyCustomers",
      }
    ],
    key: 'mycustomers',
    label: "My Customers",
    icon:"users",
    route: {
      path: '/mycustomers',
    },
    title: "My Customers",
  },
  {
    component: Neworder,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Neworder",
      }
    ],
    key: 'neworder',
    label: "New order",
    icon:"request",
    route: {
      path: '/neworder',
    },
    title: "New Order",
  },
  {
    component: Myorders,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Myorders",
      }
    ],
    key: 'myorder',
    label: "My orders",
    icon:"inventory",
    route: {
      path: '/myorder',
    },
    title: "My Orders",
  },
  {
    component: PartnerProfile,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "PartnerProfile",
      }
    ],
    key: 'partnerprofile',
    label: "Partner Profile",
    icon:"user",
    route: {
      path: '/partnerprofile',
    },
    title: "Partner Profile",
  },
  {
    component: Settings,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Settings",
      }
    ],
    key: 'settings',
    label: "Settings",
    icon:"settings",
    route: {
      path: '/settings',
    },
    title: "Settings",
  },
  {
    component: Logout,
    crumbs: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Logout",
      }
    ],
    key: 'logout',
    label: "Logout",
    icon:"inactive",
    route: {
      path: '/logout',
    },
    title: "Logout",
  },
  
];

const allPages = [
  {
    component: HomePage,
    crumbs: null,
    key: 'home',
    route: {
      path: '/',
      exact: true,
    },
    title: 'HP CloudPC - Channel Partner'
  },
  ...innerPages
];

export default ({ ...props }) => (
  <Router>
    <div className="vnex-app__container">
      <div>
        <SideMenu logoImagePath={logo} logoUrl="/" logoTitle="HP-Cloud" theme="hp">
          {
            innerPages.map(
              page =>
                <Route
                  key={`sidemenuitem-${page.key}`}
                  render={props => (
                    <SideMenuItem
                      label={page.label}
                      onClick={handleClick(props.history, page.route.path)}
                      url={page.route.path}
                      icon={page.icon}
                    />
                  )}
                />
            )
          }
        </SideMenu>
        <Switch>
          {
            allPages.map(
              page =>
                <Route
                  key={`header-${page.key}`}
                  {...page.route}
                  render={props => (
                    <Header
                      title={page.title}
                      theme="hp"
                      crumbs={page.crumbs &&
                        page.crumbs.map(
                          crumb => (
                            {
                              ...crumb,
                              onClick: handleClick(props.history, crumb.url),
                            }
                          )
                        )
                      }
                    />)
                  }
                />
            )
          }
        </Switch>
      </div>
      <div className="vnex-app__content">
        <Switch>
          {
            allPages.map(
              page =>
                <Route
                  key={page.key}
                  {...page.route}
                  component={page.component} />
            )
          }
        </Switch>
      </div>
    </div>
  </Router>
);
