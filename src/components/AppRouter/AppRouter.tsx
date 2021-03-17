import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { MAIN_ROUTE } from "../../utils/constants";

const AppRouter = () => {

	return <Switch>
        {/* {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact />
        )} */}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact />
        )}
        <Redirect to={MAIN_ROUTE} />
    </Switch>;
};

export default AppRouter;
