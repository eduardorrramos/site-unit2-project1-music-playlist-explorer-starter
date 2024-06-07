var card_container = document.getElementById("playlist-cards")
var modal=document.getElementById("modal");
var modal_content = document.getElementById("modal_content")

function main(allplaylists){
    for (let index= 0; index < 9; index ++) {
    
        let one = allplaylists[index];
        card_container.innerHTML +=
    `<div class="card" id="${oneid}">
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <p class="likecount">${one.likeCount}</p>
        </div>
        `;
        }


    for (let index = 0; index < 9; index++) {
        const cardElement = document.getElementById(index);
    let cardid = cardElement.id;
    cardElement.addEventListener('click', () => {
       btnonclick(index, cardid);
    });}
    //     let one = allplaylists[index];
    //     let oneid = one.playlistID;
    //     const cardElement = document.getElementById(index);
    // cardElement.addEventListener('click', () => { open(one);
    // });
    // function open(onecard){
    //     console.log(filler)
    // }
    // for (let index= 0; index < 9; index ++) {
    //     let onecard = allplaylists[index];
    //     let onecardsongs = onecard.songs;
    //     for (let i = 0; i < onecardsongs.length; i++) {
    //         let onesong = onecardsongs[i];
    
    //     modal_content.innerHTML +=
    //     `<div class="song">
    //     <img src="${onesong.cover_art}" alt="Song cover art">
    //     <div class="info">
    //         <h3 class="title">${onesong.title}</h3>
    //         <p class="artist">${onesong.artist}</p>
    //         <p class="album">${onesong.album}</p>
    //     </div>
    // </div>`;
    //     }
    // }
}

// var card_container = document.getElementById("playlist-cards");
// function main(allplaylists){

//     let oneplaylist = data.playlists[0];
//     let oneplaylistid = oneplaylist.playlistID;
// for (let index= 0; index < 9; index ++) {
//     oneplaylist = data.playlists[index];
//     oneplaylistid = oneplaylist.playlistID;

//     card_container.innerHTML +=
//     `<div class="card" id="${oneplaylistid}">
//         <img class="image" src="${oneplaylist.playlist_art}" alt = "oops">
//         <div class="title">${oneplaylist.playlist_name}</div>
//         <p class="creator">${oneplaylist.playlist_creator}</p>
//         <div hjirvnccivuijggjtrgdkktbtbnfievtass="like-button" id="${oneplaylistid}">
//         <span>&#x2764;&#xFE0F;</span>
//         </div>
//         <p class="likecount">${oneplaylist.likeCount}</p>
//         </div>
//         `;
//         const cardElement = document.getElementById(oneplaylistid);
//     cardElement.addEventListener('click', () => {
//       btnonclick(index, oneplaylistid);
    // oneplaylist.addEventListener('click', () => {
    // btnonclick(index, cardid);
    

// for (let index = 0; index < 9; index++) {
//     let cardElement = document.getElementById(index);
//     let cardid = cardElement.id;
//     cardElement.addEventListener('click', () => {
//        btnonclick(index, cardid);
//     //    btnonclick(index, data.playlists[index].playlistID);
//     });
// }

