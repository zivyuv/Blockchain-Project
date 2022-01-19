import Home from "../home/Home";
import HomeStyle from "../home/Home.module.css";
import NewCard from "../new_offer_card/NewCard";
import MyStatus from "../my_status/MyStatus";
import Explore from "../explore/Explore";
import { Route, Switch, Redirect } from "react-router";
import React, { useContext, useRef } from "react";
import { accountContext } from "../AccountContext";

const Main = ({
  usersCount,
  cardsCount,
  giveNTake,
  cards,
  postOffer,
  buyOffer,
  captureFile,
}) => {
  const { account, user, addUser } = useContext(accountContext);
  const userNameRef = useRef();
  const userAgeRef = useRef();

  if (user) {
    console.log("logged in");
    return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Home cardsCount={cardsCount} usersCount={usersCount} />
        </Route>
        <Route path="/new-card">
          <NewCard postOffer={postOffer} captureFile={captureFile} />
        </Route>
        <Route path="/my-status">
          <MyStatus allCards={cards} />
        </Route>
        <Route path="/explore">
          <Explore
            user={user}
            contractCards={cards}
            buyOffer={buyOffer}
            giveNTake={giveNTake}
          />
        </Route>
      </Switch>
    );
  } else {
    const submitHabdler = () => {
      const enteredUserName = userNameRef.current.value;
      const enterdUserAge = userAgeRef.current.value;
      addUser(enteredUserName, enterdUserAge);
    };
    return (
      <Switch>
        <Route path="/welcome" exact>
          <div className={HomeStyle.container}>
            <h1 className="text-info">
              <strong>Hey there!!</strong>
            </h1>

            <h5 className="text-info">
              Nice to meet you, account number <br />{" "}
            </h5>
            <p className="text-light">{account}</p>
            <p className="text-info">
              Before we get started, please tell us your name and age:
            </p>
            <form onSubmit={submitHabdler}>
              <input
                className="form-group mx-sm-3 mb-2"
                type="text"
                placeholder="Enter name..."
                required
                ref={userNameRef}
              />
              <input
                className="form-group mx-sm-3 mb-2"
                type="text"
                placeholder="Enter age..."
                required
                ref={userAgeRef}
              />
              <input
                className="btn btn-dark"
                type="submit"
                value="Sign Up"
              ></input>
            </form>
          </div>
        </Route>
        <Route path="/">
          <Redirect to="/welcome" />
        </Route>
      </Switch>
    );
  }
};

export default Main;
