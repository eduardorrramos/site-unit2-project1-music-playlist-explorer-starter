var playlistID= document.getElementById("")
var playlist_name= document.getElementById("")
var playlist_creator= document.getElementById("")
var playlist_art= document.getElementById("")
var songs= document.getElementById("")

var cards = document.getElementById("playlist-cards")


function main(playlistdatajson){
console.log(playlistdatajson);

for (let index= 0; index < playlistdatajson.length; index ++) {
    
    let one = playlistdatajson[index];

    cards.innerHTML +=
    `<div class="entries"> 
        <div>${one.playlist_name}</div>
        <div>${one.playlist_creator}</div>
        </div>
        `


/*for (let index= 0; index < playlists.len(); index ++) {
    playlists[index].addEventListener('click', (event) => {

    }

}*/
}
}

main(data.playlists);