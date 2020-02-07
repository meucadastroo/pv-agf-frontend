import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

//import SellerDetails from "./pages/SellerDetails/index";
//import ClientDetails from "./pages/ClientDetails/index";
// import ProductDetails from "./pages/ProductDetails/index";
// import ContractOptions from "./pages/ContractOptions/index";
// import HidraulicDetails from "./pages/HidraulicDetails/index";
// import PaymentDetails from "./pages/PaymentDetails/index";
// import FreightDetails from "./pages/FreightDetails/index";
// import OtherDetails from "./pages/OtherDetails/index";
// import Confirm from "./pages/Confirm/index";
// import Success from "./pages/Success/index";

import Start from "./pages/Home/index";
import SellerDetails from "./pages/SellerDetails/index";
import ClientDetails from "./pages/ClientDetails/index";

const AsyncNoMatch = importedComponent(() => import("./pages/NoMatch/index"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/sellerdetails" component={SellerDetails} />
          <Route exact path="/freightdetails" component={null} />
          <Route exact path="/clientdetails" component={ClientDetails} />
          <Route exact path="/productdetails" component={null} />
          <Route exact path="/contractdetails" component={null} />
          <Route exact path="/hidraulicdetails" component={null} />
          <Route exact path="/paymentdetails" component={null} />
          <Route exact path="/otherdetails" component={null} />
          <Route exact path="/confirm" component={null} />
          <Route exact path="/success" component={null} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
