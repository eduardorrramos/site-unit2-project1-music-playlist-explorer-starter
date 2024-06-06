var card_container = document.getElementById("playlist-cards")

function main(playlistdatajson){
/*console.log(playlistdatajson);*/

for (let index= 0; index < playlistdatajson.length; index ++) {
    
    let one = playlistdatajson[index];
    console.log(one.songs[0])
    console.log(one.songs)
    /*one.songs look at structure presented in data.js, songs for 
    one playlist already, [0] getting speciifc songs
     <div class="card">
                <img class="image" src="assets/img/playlist.png" alt="oops">
                <h3 class="title">Playlist Title </h3>
                <h4 class="creator">Creator Name</h4>
            </div>
            */

    card_container.innerHTML +=
    `<div class="card"> 
        
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">
                ${one.playlist_name}
            <p class="creator">${one.playlist_creator}</p>
            <p>${one.likeCount}</p>
            <p>${one.playlistID}</p>
            <p>${one.songs[0]}</p>
        </div>
        
    </div>
        `
    

    // function opensongs(){
        // document.style.display = "block";
    // }

/*for (let index= 0; index < playlists.len(); index ++) {
    playlists[index].addEventListener('click', (event) => {

    }

}*/
}
// CHANGE THIS INDEX CHANGE THIS INDEX CHANGE THE PARAMETER THE GREATER EQUAL
const allcards = card_container.getElementsByClassName("card");
console.log(allcards);
// allcards.forEach()hudiikvfgtebceckrlkeldnfiirudrtjbgkhvhkkgliugglhkciutkdceihdhhkt

}

main(data.playlists);