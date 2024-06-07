var card_container = document.getElementById("playlist-cards")
var modalcontent = document.getElementById("modalcontent")
function main(playlistdatajson){
/*console.log(playlistdatajson);*/

for (let index= 0; index < playlistdatajson.length; index ++) {
    
    let one = playlistdatajson[index];
    let oneid = one.playlistID;

    card_container.innerHTML +=
    `<div class="card" id="${oneid}">
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <p class="likecount">${one.likeCount}</p>
    </div>
        `;

        // playlistdatajson[index].addEventListener('click', () =>{
            // document.style.display: "block";
        // });
        // playlistList.appendChild(listItem);
    // function opensongs(){
}
for (let index = 0; index < playlistdatajson.length; index++) {
    
//     let one = playlistdatajson[index];
//     let oneid = one.playlistID;
    const cardElement = document.getElementById(index);
    let cardid = cardElement.id;
    cardElement.addEventListener('click', () => {
       btnonclick(index, cardid);
    });
    // let grr = document.getElementById(index).addEventListener('click', open(onecardid));
    // console.log(grr);
//     // 
// }
}


// var modalcontent = document.getElementById("modalcontent")

    // modalcontent.innerHTML += `
    // <div class="song">
    // <img src="${onesong.cover_art}" alt="Song cover art">
    // <div class="info">
    // <h3 class="title">${onesong.title}</h3>
    // <p class="artist">${onesong.artist}</p>
    // <p class="album">${onesong.album}</p>
    // </div>
    // </div>`;
    
    // function btnonclick() {
    //     modal.style.display = "block";
    //     console.log("opening")
    //     // close.style.display = "block";
    // }
    // modal.style.display = "block";
    // modal.style.display = "block";

// CHANGE THIS INDEX CHANGE THIS INDEX CHANGE THE PARAMETER THE GREATER EQUAL
// const allcards = card_container.getElementsByClassName("card");
// console.log(allcards);
// allcards.forEach()hudiikvfgtebceckrlkeldnfiirudrtjbgkhvhkkgliugglhkciutkdceihdhhkt



    
    }

main(data.playlists);
