var card_container = document.getElementById("playlist-cards")
var modal_content = document.getElementById("modal_content")

function main(playlistdatajson){
/*console.log(playlistdatajson);*/

for (let index= 0; index < playlistdatajson.length; index ++) {
    
    let one = playlistdatajson[index];
    let oneid = one.playlistID;
    card_container.innerHTML +=
    
    `<div class="card" id=${oneid}>
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <p class="likecount">${one.likeCount}</p>
        <button id=${oneid} onclick="increment${oneid}" class="heart">&#x2764;&#xFE0F;</button>
    </div>
        `;
}
/*go thru array of heart buttons*/
const hearts = document.getElementsByClassName("heart");
for (let i =0 ; i < hearts.length; i++) {
    hearts[i].onclick = function() {
    increment(this); }
    }
// }
function increment(heart) {
    index = heart.id;
    data.playlists[index].likeCount += 1;
    const likeCountElement = document.getElementById(`${index}-likecount`);
    likeCountElement.innerText = data.playlists[index].likeCount;
}
// increment()
    //event.target.parentNode.likeCount += 1;
    /*bc this extracts ^ id from parent so get playlist id*/
    /* if false, want to update liekcount*/
    // event.target.parentNode.likeCount += 1; no need to update bc cyrrently off
    // console.log(event.target.parentNode.id)



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
    
        <h3 class="title">${song.title}</h3>
        <p class="artist">${song.artist}</p>
        <p class="album">${song.album}</p>
   
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