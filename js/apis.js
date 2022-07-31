


// const urls = [
//     "https://rapidapi.com/montanaflynn/api/fifa-world-cup/details",
//     "https://api.coindesk.com/v1/bpi/currentprice.json",
//     "https://www.boredapi.com/api/activity",
//     "https://dog.ceo/api/breeds/image/random",
//     "https://official-joke-api.appspot.com/random_joke",
//     "https://rapidapi.com/ronreiter/api/meme-generator",
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

async function main(){
    let container = document.getElementsByClassName("apis-container");

    let json = await getJSONData(`https://pokeapi.co/api/v2/pokemon?&limit=1&offset=${Math.random()*1000}`);
    let pokemon = await getJSONData(json.data.results[0].url);
    container[0].innerHTML = `
        <article class="api-pokemon">
            <h2> ${json.data.results[0].name} </h2>
            <img src="${pokemon.data.sprites.other.dream_world.front_default}">
        </article>
    `;

    json = await getJSONData("https://dog.ceo/api/breeds/image/random");
    container[0].innerHTML += `
        <article class="api-dog">
            <img src="${json.data.message}">
        </article>
    `;



    // const API_TOKEN = "MjE4NjJfMTY1ODg4Nzc5NF80ZDA2ODdmZDA2ZGYxNmVmNmE5MmQ0M2NjNWEyMWM1ODBmNDU2NGUz";
    // const recent_feed = `https://www.scorebat.com/video-api/v3/feed/?token=${API_TOKEN}`;
    
    // json = await getJSONData(recent_feed);
    // container[0].innerHTML += `
    //     <article class="api-video">
    //         <h2>${json.data.response[0].title}</h2>
    //         <h3>${json.data.response[0].competition}</h3>
    //         ${json.data.response[0].videos[0].embed}
    //     </article>
    // `;


    // const covid = "https://api.covidtracking.com/v1/us/current.json";
    
    // json = await getJSONData(covid);
    // console.log(json);
    // container[0].innerHTML += `
    //     <canvas id="chart" width="400" height="400">
    //     </canvas>
    // `;

    // const ctx = document.getElementById("chart").getContext('2d');
    // const myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: 'Covid',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // });

    

}

main();



