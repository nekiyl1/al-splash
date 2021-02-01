import React, { useState } from "react";
import { formatDate } from "..//common/common";

export default function CardInfoFull(props) {
    const [isLikedByUser, setIsLikedByUser] = useState(false);
    const [countLike, setCountLike] = useState(props.pic.likes);
    const onLike = () => {
        fetch('https://api.unsplash.com/photos/' + props.pic.id + '/like',
            {
                method: !props.isLikedByUser && !isLikedByUser ? 'POST' : 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(json => {
                setCountLike((!props.isLikedByUser && !isLikedByUser) ? countLike + 1 : countLike - 1);
                setIsLikedByUser(!isLikedByUser);
            });
    };

    return (
        <div className="card-info">
            <div onClick={onLike}>{props.isLikedByUser || isLikedByUser ? '❤️' : '🖤'} {countLike}</div>
            <div>📅 {formatDate(props.pic.created_at)}</div>
            <div><a href={props.pic.user.links.html} target="_blank" rel="noreferrer">🗿 {props.pic.user.name}</a></div>
        </div>
    );
}