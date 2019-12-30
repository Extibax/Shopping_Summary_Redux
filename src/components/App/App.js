/* Modules */
import React, { useState } from "react";
import { Container } from "react-bootstrap";

/* Components */
import { SubTotal } from "../Subtotal/Subtotal";
import { PickupSavings } from "../PickupSavings/PickupSavings";
import { TaxesFees } from "../TaxesFees/TaxesFees";
import { EstimatedTotal } from "../EstimatedTotal/EstimatedTotal";
import { ItemDetails } from "../ItemDetails/ItemDetails";

/* Styles */
import "./App.css";

function App(props) {
  const [total, setTotal] = useState(100);
  const [pickupSavings, setPickupSavings] = useState(-3.85);
  const [taxes, setTaxes] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0.0);

  return (
    <div className="container">
      <Container className="purchase-card">
        <SubTotal price={total.toFixed(2)} />
        <PickupSavings price={pickupSavings} />
        <TaxesFees taxes={taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal estimatedTotal={estimatedTotal} />
        <ItemDetails price={estimatedTotal.toFixed(2)} />
      </Container>
    </div>
  );
}

export default App;
