var card_container = document.getElementById("playlist-cards")
var modal_content = document.getElementById("modal_content")
var abouttoclear = document.getElementsByClassName("modal_content");

/*takes care of liking songs through button and changing innerHTML*/
function increment(index) {
    data.playlists[index].likeCount += 1;
    let one = data.playlists[index];
    let oneplaylistid = one.playlistID;
    const card = document.getElementById(oneplaylistid);
    card.querySelector('.likecount').innerHTML = data.playlists[index].likeCount;
}
/*takes playlist and songs, shuffles them, clears innerhtml and repopulates*/
function shuffle(id){
    let oneplaylist= data.playlists[id];
    let arrayofsongs= oneplaylist.songs;
    for (let i = arrayofsongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayofsongs[i], arrayofsongs[j]] = [arrayofsongs[j], arrayofsongs[i]];
    }
        abouttoclear[0].innerHTML = "";
        arrayofsongs.forEach(populate);
}

function main(playlistdatajson){

/*populates initial screen with all of our playlists */
for (let index= 0; index < playlistdatajson.length; index ++) {
    let one = playlistdatajson[index];
    let oneplaylistid = one.playlistID;
    card_container.innerHTML +=
    `<div class="card" id=${oneplaylistid}>
        <img class="image" src="${one.playlist_art}" alt = "oops">
        <div class="title">${one.playlist_name}</div>
        <p class="creator">${one.playlist_creator}</p>
        <div class="together">
        <p class="likecount">${one.likeCount}</p>
        <p class="heart" id=${oneplaylistid} >💿</p> </div>
        </div>
        `;
}
/* adds event listener to each main screen playlist, either modal opens or like count increments if card or like button are pressed*/
for (let index = 0; index < playlistdatajson.length; index++) {
    let one = playlistdatajson[index];
    let oneplaylistid = one.playlistID;
    const cardcontainer = document.getElementById(oneplaylistid);
    cardcontainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('heart')) {
            increment(oneplaylistid);
        }
       else {
        openplaylist(oneplaylistid);
       }
    });
}
/*actually populates playlist songs into modal and opens it too*/
function populate(song){
    modal_content.innerHTML +=
    `<div class="song">
    <img src="${song.cover_art}" alt="Song cover art" class ="songimage">
    <div class="songinfo">
    <h3 class="songtitle">${song.title}</h3>
    <p class="songartist">${song.artist}</p>
    <p class="songalbum">${song.album}</p>
    <p class="songduration">${song.duration}</p>
    <p class="songid">${song.songID}</p>
    </div>
</div>`;
btn.onclick()
}
/* clears modal and inserts playlist info, gets its songs and feeds them into prior populate method */
function openplaylist(oneplaylistid) {
    let oneplaylist= playlistdatajson[oneplaylistid];
    let arrayofsongs= oneplaylist.songs;
    modal_content.innerHTML = ""
    modal_content.innerHTML +=
    `<div class="playlist">
    <img src="${oneplaylist.playlist_art}" alt="Song cover art" class="playlistimage">
    <div class="playlistinfo">
    <h3 class="songtitle">${oneplaylist.playlist_name}</h3>
    <p class="songartist">${oneplaylist.playlist_creator}</p>
    </div>
</div>`;
    arrayofsongs.forEach(populate);
}
// THIS IS FOR THE FEATURED PAGE

function startfeature() {
var featured = document.getElementById("featuremodal");
let one = data.playlists[1];
let oneplaylistid = one.playlistID;
if (featured) {
featured.innerHTML +=
`<div class="ccard" id=${oneplaylistid}>
    <img class="iimage" src="${one.playlist_art}" alt = "oops">
    <div class="ttitle">${one.playlist_name}</div>
    <p class="ccreator">${one.playlist_creator}</p>
    </div>
    `;
}

}

  
// let featuredplaylist = data.playlists[0];
// featuremodal.innerHTML = ""
// featuremodal.innerHTML += 
// '<img src="${featuredplaylist.playlist_art"}> ';

} // end of main

main(data.playlists);
