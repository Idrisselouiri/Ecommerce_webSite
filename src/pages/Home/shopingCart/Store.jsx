import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../shopingCart/data/db.json";
import { StoreItems } from "./StoreItems";

const Store = () => {
  return (
    <>
      <h1 style={{ padding: "0 30px" }}>Store</h1>
      <Row
        md={2}
        xs={1}
        lg={3}
        className="g-3"
        style={{ padding: "0 30px", margin: "auto" }}
      >
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
