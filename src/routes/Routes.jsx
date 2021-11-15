// _rafc (react error functional component)

import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import { MoviesView } from "../views/movies/MoviesView";

export const Routes = ({children}) => {
  return (
    <BrowserRouter>
    {children}
      <Switch>
        <Route path={"/home"} element={<HomeView />} />
        <Route path={"/movies"} element={<MoviesView />} />
      </Switch>
    </BrowserRouter>
  );
};
