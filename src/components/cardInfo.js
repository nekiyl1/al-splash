import React from "react";
import { formatDate } from "..//common/common";

export default function CardInfo(props) {

    return (
        <div className="card-info">
            <div>❤️ {props.pic.likes}</div>
            <div>📅 {formatDate(props.pic.created_at)}</div>
            <div><a href={props.pic.user.links.html} target="_blank" rel="noreferrer">🗿 {props.pic.user.name}</a></div>
        </div>
    );
}