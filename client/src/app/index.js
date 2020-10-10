import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Axios from 'axios';
import * as ROUTES from '../constants/routes';
import LogoutContext from '../Contexts/LogoutContext';
import AuthorizationContext from '../Contexts/AuthorizationContext';
import 'antd/dist/antd.css';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignupPage';
import Painting from '../pages/PaintingDetailsPage';
import ProfilePage from '../pages/ProfilePage';
import LandingPage from '../pages/LandingPage';
import AdminDashboard from '../pages/Admin';
import AdminLogin from '../pages/AdminLoginPage';
import CartPage from '../pages/CartPage';
import NotFound from '../pages/PageNotFound';

function App() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState(null);

  const getAuth = async () => {
    try {
      const {
        data: {
          data: { id, role: userRole },
        },
      } = await Axios.get('/api/v1/is-auth');
      setUser({ id, userRole });
      setRole(userRole);
    } catch (err) {
      setRole(null);
    }
  };
  useEffect(() => {
    getAuth();
  }, [role]);

  const logout = async () => {
    try {
      await Axios.get('/api/v1/logout');
      setUser({});
      setRole(null);
    } catch (err) {
      setRole(null);
      setUser({});
    }
  };
  return (
    <div className="App">
      <Router>
        <AuthorizationContext.Provider value={{ user, role }}>
          <LogoutContext.Provider value={{ logout }}>
            <Switch>
              <Route
                exact
                path={ROUTES.HOME_PAGE}
                render={() => <LandingPage />}
              />
              <Route
                exact
                path={ROUTES.SIGNUP_PAGE}
                render={() =>
                  !role ? (
                    <Signup setRole={setRole} />
                  ) : (
                    <Redirect to={ROUTES.HOME_PAGE} />
                  )
                }
              />
              <Route
                exact
                path={ROUTES.LOGIN_PAGE}
                render={(props) =>
                  !role ? (
                    <Login {...props} setRole={setRole} />
                  ) : (
                    <Redirect to={ROUTES.HOME_PAGE} />
                  )
                }
              />
              <Route
                exact
                path={ROUTES.ADMIN_DASHBOARD_PAGE}
                render={() =>
                  !role ? (
                    <Redirect to={ROUTES.ADMIN_LOGIN_PAGE} />
                  ) : role === 'admin' ? (
                    <AdminDashboard />
                  ) : role !== 'admin' ? (
                    <Redirect to={ROUTES.HOME_PAGE} />
                  ) : null
                }
              />
              <Route
                exact
                path={ROUTES.ADMIN_LOGIN_PAGE}
                render={(props) =>
                  !role ? (
                    <AdminLogin {...props} setRole={setRole} />
                  ) : (
                    <Redirect to={ROUTES.ADMIN_DASHBOARD_PAGE} />
                  )
                }
              />
              <Route
                exact
                path={ROUTES.ADMIN_DASHBOARD_PAGE}
                render={(props) =>
                  role === 'admin' ? (
                    <AdminDashboard {...props} setRole={setRole} />
                  ) : (
                    <Redirect to={ROUTES.ADMIN_LOGIN_PAGE} />
                  )
                }
              />

              <Route
                exact
                path={ROUTES.ARTIST_PAGE}
                render={(props) => <ProfilePage {...props} />}
              />
              <Route
                path={ROUTES.ART_PAGE}
                render={(props) => <Painting {...props} />}
              />

              <Route
                exact
                path={ROUTES.CART_PAGE}
                render={() => {
                  return role === 'customer' ? (
                    <CartPage />
                  ) : role === null ? (
                    <Redirect to={ROUTES.LOGIN_PAGE} />
                  ) : (
                    <Redirect to={ROUTES.HOME_PAGE} />
                  );
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </LogoutContext.Provider>
        </AuthorizationContext.Provider>
      </Router>
    </div>
  );
}

export default App;
