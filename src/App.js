import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProductView } from "./views/ProductView";
import { PurchaseView } from "./views/PurchaseView";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        {/* <Route render={() => <div>404 Pagina no encontrada</div>} /> */}
        <Route path={"/product/:id"} exact component={ProductView} />
        <Route path={"/purchase"} exact component={PurchaseView} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
