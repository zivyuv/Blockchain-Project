import React from 'react'
import PurchasedCard from './PurchasedCard'

const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) 
        chunks.push(array.splice(0, n));
    


    return chunks;
};
const MyPurchases = ({rateSeller, prevPurchases}) => {
    let cards = []
    for (let i = 0; i < prevPurchases.length; i++) {
        const card = <PurchasedCard header={
            prevPurchases[i][1]
            }
            image={
                <img src={`https://ipfs.io/ipfs/${prevPurchases[i].imageHash}`}/>
            }
            content={
                prevPurchases[i].content
            }
            rateSeller={
                () => rateSeller(prevPurchases[i].owner)
            }
            ownerRate={prevPurchases[i].ownerRate}/>
        cards.push(card)
    }
    return (
        <div className="fill-window">
            <div className="card-header bg-light border-info text-info">
                <h1>My Previous Purchases</h1>
                <h5>
                    <strong>You can reflect back on recent purchases and rate their sellers!</strong>
                </h5>
                <div className="container">
            {
            arrayChunk(cards, 2).map((row, i) => (
                <div className="row">
                    {
                    row.map((col, i) => (
                        <div className="col">
                            {col}</div>
                    ))
                } </div>
            ))
        } </div>
            </div>

        </div>


    );
}


export default MyPurchases;
