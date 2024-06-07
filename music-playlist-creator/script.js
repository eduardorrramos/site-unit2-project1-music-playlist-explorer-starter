var btn=document.getElementById("button");
var close=document.getElementById("close");
// class name verusus id, specifies array as opposed to a single element
var modal = document.getElementById("modal");
var modalclose=document.getElementById("modalclose");

// var modal=document.getElementById("modal");


function btnonclick(index, cardid) {
    modal.style.display = "block";
    let onecard = data.playlists[index];
    let onecardsongs = onecard.songs;
    let onesong = onecardsongs[cardid];
    // let onesong = document.getElementById(cardid);
    // data.playlists.playlistID[0]
    modalcontent.innerHTML = `
    <div class="song">
    <img src="${onesong.cover_art}" alt="Song cover art">
    <div class="info">
    <h3 class="title">${onesong.title}</h3>
    <h3 class="artist">${onesong.artist}</h3>
    <p class="album">${onesong.album}</p>
    </div>
    </div>`;
}
close.onclick = function() {
    console.log("closing")
    modal.style.display = "none";
   
}

//     let onecard = data.playlists[index];
//     let onecardsongs = onecard.songs;
//     let onesong = onecardsongs[cardid];

//     modal_content.innerHTML +=
//     `<div class="song">
//     <img src="${onesong.cover_art}" alt="Song cover art">
//     <div class="info">
//         <h3 class="title">${onesong.title}</h3>
//         <p class="artist">${onesong.artist}</p>
//         <p class="album">${onesong.album}</p>
//     </div>
// </div>`;