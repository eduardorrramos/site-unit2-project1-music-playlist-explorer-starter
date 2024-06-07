
var card_container = document.getElementById("playlist-cards")
function main(playlistdatajson){
/*console.log(playlistdatajson);*/

for (let index= 0; index < 8; index ++) {
    
    let one = data.playlists[index];
    let oneid = one.playlistID;

    card_container.innerHTML +=
    `<div class="card" id="${oneid}">
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <div class="likebutton"> <i class-"fas fa-heart"></i></div>
        <p class="likecount">${one.likeCount}</p>
    </div>
        `;
}
for (let index = 0; index < 8; index++) {
    const cardElement = document.getElementById(index);
    let cardid = cardElement.id;
    cardElement.addEventListener('click', () => {
       btnonclick(index, cardid);
    });
}


    }

main(data.playlists);
