/* Modules */
import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

export class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store helps cut costs, and we pass the
          savings on to you.
        </p>
      </Tooltip>
    );

    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div className="pickup_savings">Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col className="total_savings" md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
