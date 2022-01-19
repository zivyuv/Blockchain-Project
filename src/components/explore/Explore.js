import ExploreStyle from './Explore.module.css'
import React from 'react';
import Card from '../card/Card'
import CardStyle from '../new_offer_card/NewCard.module.css'



const ETHVALUE = 4000 // about 4000 dollars
const Explore = ({user, contractCards, buyOffer, giveNTake}) => {
    console.log(user);
    let cards = []
    for (let i = 0; i < contractCards.length; i++) {
        const ethPrice = parseInt(contractCards[i][3]) / ETHVALUE
        const priceToPay = window.web3.utils.toWei(ethPrice.toString(), 'Ether')
        const ownerRate = contractCards[i].ownerRate
        const soldCount = contractCards[i][4]
        const sentence = soldCount > 0 ? "This service was given " + soldCount + " times." : "Be the first to buy this service!"
        const myAge = user.age 
        if (contractCards[i].minAge <= myAge) {
            const card = <Card header={
                    contractCards[i][1]
                }
                content={
                    contractCards[i].content
                }
                image ={<img src={`https://ipfs.io/ipfs/${contractCards[i].imageHash}`}/>}
                price={
                    contractCards[i][3]
                }
                sentence={sentence}
                buyHandler={
                    () => buyOffer(contractCards[i][0], priceToPay)
                }
                ownerRate={ownerRate}/>
            cards.push(card)
        }

    }

    const arrayChunk = (arr, n) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) 
            chunks.push(array.splice(0, n));
        


        return chunks;
    };

    if (cards.length == 0) {
        return (
            <div className={CardStyle.container}>
            <div className="text-center text-info mt-5" style={{marginTop: "3rem"}} >
                    <h1>Hey there!!</h1>
                    <h4>There are currently no services available.</h4>
                    <h4>Be the first one to offer your service, by clicking the <strong>'New Offer'</strong> button above!</h4>
                    </div>
            </div>
        );
    }
    return (
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
        
        // { this.props.images.map((image, key) => {
        //     return(
        //       <div className="card mb-4" key={key} >
        //         <div className="card-header">
        //           <img
        //             className='mr-2'
        //             width='30'
        //             height='30'
        //             src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
        //           />
        //           <small className="text-muted">{image.author}</small>
        //         </div>
        //         <ul id="imageList" className="list-group list-group-flush">
        //           <li className="list-group-item">
        //             <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px'}}/></p>
        //             <p>{image.description}</p>
        //           </li>
        //           <li key={key} className="list-group-item py-2">
        //             <small className="float-left mt-1 text-muted">
        //               TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
        //             </small>
        //             <button
        //               className="btn btn-link btn-sm float-right pt-0"
        //               name={image.id}
        //               onClick={(event) => {
        //                 let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
        //                 console.log(event.target.name, tipAmount)
        //                 this.props.tipImageOwner(event.target.name, tipAmount)
        //               }}
        //             >
        //               TIP 0.1 ETH
        //             </button>
        //           </li>
        //         </ul>
        //       </div>
        //     )
        //   })}
    );
}

export default Explore;
