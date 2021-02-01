import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardInfoFull from "./cardInfoFull";
import { Link } from 'react-router-dom';
//import { loadPhoto } from "../common/common";

export default function FullPhoto(props) {
    const [isLikedByUser, setIsLikedByUser] = useState(false);
    let { id } = useParams();
    const pic = props.pics.pics.find(x => x.id === id);

    useEffect(() => {
        //loadPhoto(id);
        fetch('https://api.unsplash.com/photos/' + id,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(json => {
                setIsLikedByUser(json["liked_by_user"]);
            });
    });

    return (
        <>
            <div className="card-full">
                <Link to={"/"}>🔙 назад</Link>
                <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.full}
                ></img>
                <CardInfoFull pic={pic} isLikedByUser={isLikedByUser}/>
            </div>
        </>
    );
}