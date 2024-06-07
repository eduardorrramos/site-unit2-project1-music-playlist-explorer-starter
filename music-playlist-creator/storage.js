var card_container = document.getElementById("playlist-cards")
var modal_content = document.getElementById("modal_content")

function main(playlistdatajson){
/*console.log(playlistdatajson);*/

for (let index= 0; index < playlistdatajson.length; index ++) {
    
    let one = playlistdatajson[index];
    // console.log(one.songs[0])
    // console.log(one.songs)
    // console.log(one)
    let oneid = one.playlistID;
    // console.log(oneid)
    /*one.songs look at structure presented in data.js, songs for 
    one playlist already, [0] getting speciifc songs
     <div class="card">
                <img class="image" src="assets/img/playlist.png" alt="oops">
                <h3 class="title">Playlist Title </h3>
                <h4 class="creator">Creator Name</h4>
            </div>
            */
    // const list = createNewElement
    // POPULATE CARD BY ID NUMBER HERE id "playlist-cards"->
    // make container, or get data from array to only populate one
    card_container.innerHTML +=
    
    `<div class="card" id="${oneid}">
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <p>${one.likeCount}</p>
        <button id="heart">&#x2764;&#xFE0F;</button>

        
    </div>
        `;
        
        // <p>${one.playlistID}</p>
        // <p>${one.songs}</p></div>
        // playlistdatajson[index].addEventListener('click', () =>{
            // document.style.display: "block";
        // });
        // playlistList.appendChild(listItem);
    // function opensongs(){
        // document.style.display = "block";
    // }
/*for (let index= 0; index < playlists.len(); index ++) {
    playlists[index].addEventListener('click', (event) => {
    }
}*/
}
/*go thru array of heart buttons*/
var heart = document.getElementsByClassName("heart");



for (let index = 0; index < playlistdatajson.length; index++) {
    
    let one = playlistdatajson[index];
    let oneid = one.playlistID;
    // console.log(onecard);
    // console.log(onecardid);
    const cardElement = document.getElementById(oneid);
    cardElement.addEventListener('click', () => {
        openplaylist(oneid);
    });
    
    // let grr = document.getElementById(index).addEventListener('click', open(onecardid));
    // console.log(grr);
    // 
}
// function open(onecard){
//     // console.log(filler)
//     // modal.style.display = "block";
// }
// CHANGE THIS INDEX CHANGE THIS INDEX CHANGE THE PARAMETER THE GREATER EQUAL
// const allcards = card_container.getElementsByClassName("card");
// console.log(allcards);
// allcards.forEach()hudiikvfgtebceckrlkeldnfiirudrtjbgkhvhkkgliugglhkciutkdceihdhhkt
function populate(song){
    modal_content.innerHTML +=
    `<div class="song">
    <img src="${song.cover_art}" alt="Song cover art">
    <div class="info">
        <h3 class="title">${song.title}</h3>
        <p class="artist">${song.artist}</p>
        <p class="album">${song.album}</p>
    </div>
</div>`;
btn.onclick()
} /*now need to pass id into openplaylist*/
function openplaylist(givenid) {
    let oneplaylist=playlistdatajson[givenid];
    let arrayofsongs=oneplaylist.songs;
    // console.log(arrayofsongs);
    arrayofsongs.forEach(populate);
}
console.log("right before openplay in main")
// openplaylist(3)
} // end of main
main(data.playlists);
// console.log(data.playlists[0].songs);
// console.log(" outside of main")
// openplaylist(2)