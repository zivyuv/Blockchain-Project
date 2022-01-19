import HomeStyle from './Home.module.css'
import React from 'react';

const Home = ({usersCount, cardsCount}) => {
    return (
        <div className={HomeStyle.container}>
            <h1 className='text-info'><strong> Welcome To Our Store</strong></h1>
            <h3 className='text-info'>We currently have {usersCount} users!</h3>
            {/* fix the cards amount - counter does not go up for some reason  */}
            <h3 className='text-info'>We currently have {cardsCount} offers awaiting!</h3>
            <h6 className='text-light' style={{marginTop: "1.5rem"}}>Use the above navbar to explore current offers, or add your own!</h6>

            
        </div>
    );
}

export default Home;
