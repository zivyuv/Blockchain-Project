import CardStyle from './NewCard.module.css'
import React, {useRef} from 'react';

const NewCard = ({postOffer, captureFile}) => {

    const headerRef = useRef();
    const itemDescRef = useRef();
    const priceRf = useRef();
    const minAgeRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredHeader = headerRef.current.value;
        const enteredContent = itemDescRef.current.value;
        const enteredPrice = priceRf.current.value;
        const enteredAge = minAgeRef.current.value;

        postOffer(enteredHeader, enteredContent, enteredPrice, enteredAge)
    }
    return (
        <div className={
            CardStyle.container
        }>
            <form onSubmit={submitHandler}>
                <div className='text-info'>
                    <label>
                        <strong>Headline</strong>
                    </label>
                    <input type="text" id="headline" name="healine" placeholder="Enter Headline.."
                        ref={headerRef} required/>

                    <label>
                        <strong>Item Description</strong>
                    </label>
                    <textarea type="text" id="content" name="content" placeholder="Enter Content.."
                        ref={itemDescRef}
                        style={
                            {width: "100%"}
                        }
                        rows='2' required/>
                    <label>
                        <strong>Age Restriction</strong>
                    </label>
                    <input type="text" id="age" name="age" placeholder="Enter minumin age.."
                        ref={minAgeRef} required/>

                    <label>
                        
                        <strong>Price $</strong>
                    </label>
                    <input type="text" id="price" name="price" placeholder="Enter Price in USD.."
                        ref={priceRf} required/>

                    <div className="form-row"
                        style={
                            {
                                marginLeft: '35%',
                                marginTop: '1rem'
                            }
                    }>
                        <label>
                            <strong>
                                Upload Item &nbsp; &nbsp;</strong>
                        </label>
                        <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif"
                            onChange={captureFile} required/>
                    </div>


                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default NewCard;
