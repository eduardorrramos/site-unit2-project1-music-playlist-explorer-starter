var card_container = document.getElementById("playlist-cards")

function main(playlistdatajson){
console.log(playlistdatajson);

for (let index= 0; index < playlistdatajson.length; index ++) {
    
    let one = playlistdatajson[index];
    console.log(one.songs[0])
    console.log(one.songs)
    /*one.songs look at structure presented in data.js, songs for 
    one playlist already, [0] getting speciifc songs*/
    card_container.innerHTML +=
    `<div class="entries"> 
        <div>${one.playlist_name}</div>
        <div>${one.playlist_creator}</div>
        <div>${one.playlist_art}</div>
        <div>${one.likeCount}</div>
        <div>${one.playlistID}</div>
        <div>${one.songs[0][0]}</div>
        </div>
        `


/*for (let index= 0; index < playlists.len(); index ++) {
    playlists[index].addEventListener('click', (event) => {

    }

}*/
}
}

main(data.playlists);