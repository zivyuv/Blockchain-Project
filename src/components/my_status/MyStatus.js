import MyStatusStyle from './MyStatus.module.css'
import React, {useContext} from 'react';
import {accountContext} from '../AccountContext'
import MyDetailes from './MyDetails';
import MyPurchases from './MyPurchases';

const MyStatus = ({allCards}) => {

    const {user, rateSeller, buyOffer, prevPurchases, changePrice} = useContext(accountContext)

    const userAddress = user.owner
    const allCardsLen = allCards ? allCards.length : 0
    const prevPurchasesLen = prevPurchases ? prevPurchases.length : 0
    var myCards = []
    for (var i=0; i<allCardsLen; i++) {
        if (allCards[i].owner == userAddress ) {
            myCards.push(allCards[i])
        } 
    }

    return (
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active text-dark" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><strong>Profile</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><strong>Purchase History</strong></a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="fill-window">
                        <MyDetailes user={user} myCards={myCards} changePrice={changePrice} prevPurchasesLen={prevPurchasesLen}/>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="fill-window">
                        <MyPurchases rateSeller={rateSeller} prevPurchases={prevPurchases}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyStatus;

// <div className="text-center mt-5">
//     {account}
// </div>
