import React from 'react';
import Explore from "../explore/Explore";
import Badge from '@material-ui/core/Badge';
import {BsFillStarFill} from "react-icons/bs";


const PurchasedCard = ({header, content, rateSeller, sentence, image}) => { // const strPrice = "Buy" + price
    
    const _sentence = sentence ? sentence : ""
    return (
        <div className="card border-info bg-dark mb-4"
            style={
                {margin: "3rem"}
        }>
            <div className="card-header bg-dark border-info">
                <h5 className="card-title text-light bg-dark"
                    style={
                        {textAlign: "center"}
                }>
                    {header}
                </h5>
            </div>
            <div className="card-body text-info">
                <h5 className="card-title text-light bg-dark"
                    style={
                        {textAlign: "center"}
                }>Hi there! I am offering:</h5>
                <p className="card-text text-light"
                    style={
                        {textAlign: "center"}
                }>
                    {image}</p>
                <p className="card-text"
                    style={
                        {textAlign: "center"}
                }>
                     {content}
                </p>
            </div>

            <div className="card-footer bg-dark border-info "style = {{textAlign: "center"}}>
            <button className="button" className="btn btn-light" onClick={rateSeller}>Rate Seller</button>

            {/* <button style = {{}}onClick={()=>{ alert('SOME MESSAGE'); }}>Report Seller</button> */}

            </div>
        </div>
    );
}

export default PurchasedCard;
