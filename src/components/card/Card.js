import CardStyle from "./Card.module.css";
import React, { useRef } from "react";
import Badge from "@material-ui/core/Badge";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";

const Card = ({
  header,
  image,
  content,
  price,
  buyHandler,
  ownerRate,
  sentence,
  dontShowButtons,
  isMyDetais,
}) => {
  // const strPrice = "Buy" + price

  const inputRef = useRef();

  const _sentence = sentence ? sentence : "";
  const _showButtons = dontShowButtons ? false : true;

  const changePriceHandler = (e) => {
    const inputPrice = inputRef.current.value;
    buyHandler(inputPrice);
  };

  return (
    <div className="card border-info bg-dark mb-4" style={{ margin: "3rem" }}>
      <div className="card-header bg-dark border-info">
        <h5
          className="card-title text-light bg-dark"
          style={{ textAlign: "center" }}
        >
          {header}
          <div
            className="d-inline-block"
            style={{ float: "right" }}
            data-toggle="tooltip"
            title="Seller's rate"
            tabindex="0"
          >
            <Badge badgeContent={ownerRate} color="secondary">
              <BsFillStarFill />
            </Badge>
          </div>
        </h5>
      </div>
      <div className="card-body text-info">
        <h5
          className="card-title text-light bg-dark"
          style={{ textAlign: "center" }}
        >
          Hi there! I am offering:
        </h5>
        <p className="card-text text-light" style={{ textAlign: "center" }}>
          {image}
        </p>

        <p className="card-text" style={{ textAlign: "center" }}>
          {content}{" "}
        </p>
      </div>

      {!isMyDetais && (
        <button
          className="btn btn-info"
          style={{
            marginBottom: "1rem", // dump note
            marginLeft: "3rem",
            marginRight: "3rem",
          }}
          onClick={buyHandler}
        >
          Buy for {price}$
        </button>
      )}

      {isMyDetais && (
        <form className="form-inline" onSubmit={changePriceHandler}>
          <div
            className="form-group mb-2"
            style={{ margin: "auto", paddingBottom: "1rem" }}
          >
              <label style={{paddingRight:'2rem', color:'snow'}}><strong>Current price is {price}$</strong></label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter new price"
              ref={inputRef}
              req
            ></input>
          </div>
        </form>
      )}

      <div
        className="card-footer bg-dark border-info "
        style={{ textAlign: "center" }}
      ></div>
    </div>
  );
};

export default Card;
