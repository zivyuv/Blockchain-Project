import React from 'react'
import { BiLike } from "react-icons/bi";
import Card from '../card/Card'

const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) 
        chunks.push(array.splice(0, n));
    
    return chunks;
};
const MyProfile = ({ user, myCards, changePrice, prevPurchasesLen}) => {

    // TODO: my cards don't fit anymore, since ownership was changed
    let cards = []
    let soldCount = 0
    for(let i=0; i<myCards.length; i++) {
        const card = <Card isMyDetais={true} dontShowButtons={true} header={myCards[i][1]} content={myCards[i].content} image={<img src={`https://ipfs.io/ipfs/${myCards[i].imageHash}`}/>} price={myCards[i][3]} ownerRate={myCards[i].ownerRate} buyHandler={(price)=> changePrice(myCards[i].id, price)}/>
        cards.push(card)
    }

    return (
        // <div className="fill-window">
              <div className="bg-light border-info text-info" >
                  <h1></h1>
              <h1>Hello {
                user.name.toUpperCase()
            }, Welcome Back!</h1>
            <h5></h5>
            <div className="row">
                <div className="col-4"
                    style={
                        {borderRight: "2px solid black"}
                }><strong>Here are a few facts about you:</strong>
                    <ul className="list-group ">
                        <li className="list-group-item bg-dark border-info text-info"><strong>You have {myCards.length} active listings!</strong>
                        <BiLike style={{textAlign: "center", marginLeft: "1rem" , marginButtom:"0.5rem"}}></BiLike>
                        </li>
                        <li className="list-group-item bg-dark border-info text-info"><strong>You have purchased {prevPurchasesLen} items!</strong>
                        <BiLike style={{textAlign: "center", marginLeft: "1rem" , marginButtom:"0.5rem"}}></BiLike></li>
                        <li className="list-group-item bg-dark border-info text-info"><strong>Your user rating is {user.rate}!</strong>
                        <BiLike style={{textAlign: "center", marginLeft: "1rem" , marginButtom:"0.5rem"}}></BiLike></li>
                    </ul>
                </div>
                
                <div className="col-8" style={{alignItems:"center"}}><strong>My Active Cards:</strong> 
                    {
                        arrayChunk(cards, 2).map((row) => (
                            <div className="row">
                        {
                            row.map((col) => (
                                <div className="col" >{col}</div>
                            ))
                        }
                    </div>
                        ))
                    }
                </div>
            </div>
           
            </div>
        //  </div>
    );
}

export default MyProfile;
