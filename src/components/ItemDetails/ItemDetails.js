/* Modules */
import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="item_container">
        <Button
          className="item-details-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {!this.state.open ? "See" : "Hide"} item details{" "}
          {!this.state.open ? "+" : "-"}
        </Button>
        <Collapse in={this.state.open} className="collapse_container">
          <div>
            <Media>
              <img
                src="https://i5.walmartimages.com/asr/3bddcdea-de1a-4fcc-ae33-41a20e63e306_1.0052d93b63937645c8a40416f87aea73.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                alt="Nothing"
                width={100}
                height={100}
              />
              <Media.Body>
                <p>
                  Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair,
                  Red
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>${this.props.price}</strong>
                    <br />
                    <strong className="price-strike">
                      ${this.props.price}
                    </strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
