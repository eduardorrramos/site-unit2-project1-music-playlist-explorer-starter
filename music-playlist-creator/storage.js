var card_container = document.getElementById("playlist-cards")

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
    card_container.innerHTML +=
    `<div class="card" id="${oneid}">
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <p>${one.likeCount}</p>
        <p>${one.playlistID}</p>
        
    </div>
        `;
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
for (let index = 0; index < playlistdatajson.length; index++) {
    let onecard = playlistdatajson[index];
    let onecardid = onecard.playlistID;
    // console.log(onecard);
    // console.log(onecardid);
    const cardElement = document.getElementById(index);
    cardElement.addEventListener('click', () => {
        open(onecardid);
    });
    // let grr = document.getElementById(index).addEventListener('click', open(onecardid));
    // console.log(grr);
    // 
}
function open(filler){
    console.log(filler)
    // modal.style.display = "block";
}
// CHANGE THIS INDEX CHANGE THIS INDEX CHANGE THE PARAMETER THE GREATER EQUAL
// const allcards = card_container.getElementsByClassName("card");
// console.log(allcards);
// allcards.forEach()hudiikvfgtebceckrlkeldnfiirudrtjbgkhvhkkgliugglhkciutkdceihdhhkt
}
main(data.playlists);