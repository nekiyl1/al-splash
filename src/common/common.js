import { createApi } from "unsplash-js";

const unsplash = new createApi({
    accessKey: "jTT5ugUUV_Upkd0vwGYwIiwp7jpLFrm6aTog2Y4YWJ0",
});

export const loadPageUnsplash = (page) => {
    return unsplash.photos.list({ page: page })
};

// export const loadPhoto = (id) => {
//     unsplash.photos.get(
//         { photoId: id },
//         { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } },
//     )
//     .then(res => log(res));
// }

export const formatDate = (date) => {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };
    return new Date(date).toLocaleString("ru", options);
}

export const authorization = () => {
    if (localStorage.getItem('token') == null) {
        const code = window.location.search.split('code=')[1];
        if (!code)
            window.location.href = 'https://unsplash.com/oauth/authorize?client_id=jTT5ugUUV_Upkd0vwGYwIiwp7jpLFrm6aTog2Y4YWJ0&redirect_uri=http://al-splash.aliquis.ru&response_type=code&scope=public+read_user+read_photos+write_likes';
        else {
            fetch('https://unsplash.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: 'jTT5ugUUV_Upkd0vwGYwIiwp7jpLFrm6aTog2Y4YWJ0',
                    client_secret: 'ZCEVSzW8k0BYE6sPPvYkM2H5cEwhtTSI28Rsm8fRxWw',
                    redirect_uri: 'http://al-splash.aliquis.ru/',
                    code: code,
                    grant_type: 'authorization_code'
                })
            })
                .then(response => response.json())
                .then(json => {
                    if (json["access_token"])
                        localStorage.setItem('token', json["access_token"]);
                });
        }
    }
}