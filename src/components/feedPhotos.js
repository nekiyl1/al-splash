import React, { useEffect } from "react";
import CardInfo from "./cardInfo";
import { Link } from 'react-router-dom';

export default function FeedPhotos(props) {
    const onScroll = () => {
        let scrollHeight = document.documentElement.scrollHeight;
        let scrollPos = window.innerHeight + window.scrollY;
        if (((scrollHeight - 300) >= scrollPos) / scrollHeight === 0) {
            if (!props.pics.loading)
                props.loadPage();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    });

    const cards = props.pics.pics.map((pic, index) =>
        <div className="card" key={pic.id}>
            <Link to={"/photo/" + pic.id}>
                <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.small}
                ></img>
            </Link>
            <CardInfo pic={pic} />
        </div>);

    return (
        <>
            <div
                className="card-list"
                onScroll={onScroll}
            >
                {cards}
            </div>
        </>
    );
}