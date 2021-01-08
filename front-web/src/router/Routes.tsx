import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders";

const Routes = () => { 
    return(
        <BrowserRouter>
           <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes; 