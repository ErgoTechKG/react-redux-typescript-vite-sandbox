import React, { Suspense } from "react";
import { Routes } from "../lib/react-redux-history";

import Home from "./Home";
import LoginForm from "./LoginForm";
import { useRoutes } from "../store";

//import "./App.css";
import {I18nSelect} from "../components/I18nSelect";
const Profile = React.lazy(() => import("./Profile"));
const People = React.lazy(() => import("./People"));

const routes: Routes = {
  "/": <Home />,
  "/signin": <LoginForm />,
  "/profile": <Profile />,
  "/people": <People />,
};

const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  const Loading = () => <div>Loading...</div>;
  return (
    <div className="App">
      <header className="App-header">
         <I18nSelect /> 
        <Suspense fallback={<Loading />}>{routeResult}</Suspense>
      </header>
    </div>
  );
};

export default App;
