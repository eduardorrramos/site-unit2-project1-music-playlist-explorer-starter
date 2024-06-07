var modal = document.getElementById("modal");
var btn=document.getElementById("button");
var close=document.getElementById("close");
var modalclose=document.getElementById("modalclose");

btn.onclick = function() {
    modal.style.display = "block";
    // close.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}


// function cardonclick(playlistindex) {
//     modal.style.display="block";
//     modalcontent.innerHTML = `
//     <div id="modalcontent">
//     <header>
//     <img src="${onesong.cover_art}">
//     <div class="info">
//     <h3 class="title">${onesong.title}</h3>
//     <h3 class="artist">${onesong.artist}</h3>
//     <p class="album">${onesong.album}</p>
//     </header>
//     </div>
//     </div>`;
//     modal.addEventListener('click', () => {
//         closeonclick();
//      });



//     let onecard = data.playlists[index];
//     let onecardsongs = onecard.songs;
//     let onesong = onecardsongs[cardid];
//     // let onesong = document.getElementById(cardid);
    
// closeonclick = function() {
//     modal.style.display = "none"; }

    
//     // <div>
//     // <img src="${onesong.cover_art}" alt="Song cover art"/>
//     // <div class="info">
//     // <h3 class="title">${onesong.title}</h3>
//     // <h3 class="artist">${onesong.artist}</h3>
//     // <p class="album">${onesong.album}</p>
//     // </div>
//     // </div>`
// }/*
// <div id="modal" class="modal">
//   <div class="modal-content">
//       <button class="close">&times;</button>
//       <header>
//           <img src="assets/img/song.png">
//           <h3 class="title">Playlist Title </h3>
//           <h4 class="creator">Creator Name</h4>
//           <h4 class="creator">Album Name</h4>

//       </header>
//       <div>
//           <img src="assets/img/song.png">
//           <h3 class="title">Playlist Title </h3>
//           <h4 class="creator">Creator Name</h4>
//           <h4 class="creator">Album Name</h4>

//       </div>
//       </div>
//       </div>
    
//         */