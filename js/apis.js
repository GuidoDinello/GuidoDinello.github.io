
// const urls = [
//     "https://rapidapi.com/montanaflynn/api/fifa-world-cup/details",
//     "https://api.coindesk.com/v1/bpi/currentprice.json",
//     "https://www.boredapi.com/api/activity",
//     "https://dog.ceo/api/breeds/image/random",
//     "https://official-joke-api.appspot.com/random_joke",
//     "https://rapidapi.com/ronreiter/api/meme-generator",
//     "http://developer.simsimi.com/",
//     "https://boggio-analytics.com/fp-api/",
//     "https://covid19-api.com/"
// ]

function getJSONData(url) {
    let result = {};
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    })
}

// function requestBtnAPI(btn) {
//     return ;
// }


async function main(){
    let container = document.getElementsByClassName("apis-container");

    let json = await getJSONData("https://dog.ceo/api/breeds/image/random");

    container[0].innerHTML = `
        <article class="api-dog">
            <img src="${json.data.message}">
        </article>
    `;

    const API_TOKEN = "MjE4NjJfMTY1ODg4Nzc5NF80ZDA2ODdmZDA2ZGYxNmVmNmE5MmQ0M2NjNWEyMWM1ODBmNDU2NGUz";
    
    const recent_feed = `https://www.scorebat.com/video-api/v3/feed/?token=${API_TOKEN}`;
    
    json = await getJSONData(recent_feed);

    console.log(json.data.response[0].videos);

    container[0].innerHTML += `
        <article class="api-video">
            <h2>${json.data.response[0].title}</h2>
            <h3>${json.data.response[0].competition}</h3>
            ${json.data.response[0].videos[0].embed}
        </article>
        `;
}

main();



