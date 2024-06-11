var modal=document.getElementById("modal");
var btn=document.getElementById("playlistbutton");
var close=document.getElementById("close");
var shufflebutton = document.getElementById("shufflebutton");
var abouttoclear = document.getElementsByClassName("modal_content");
// class name verusus id, specifies array as opposed to a single element
// var modalclose=document.getElementById("modalclose");
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
btn.onclick = function() {
    modal.style.display = "block";
    // shufflebutton.style.display= "block";
    // close.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
    abouttoclear[0].innerHTML = "";
    // manually adding event listener myself, hidden, click event listener
}
shufflebutton.onclick = function() {
    var currentid = parseInt(document.querySelector('.songid').textContent);
    let playlistid = 0
    // this is where i classify songid into playlist id
    if (currentid <= 44) { playlistid = 8} if (currentid <= 39) {playlistid = 7}if (currentid <= 34) {playlistid = 6}if (currentid <= 29) {playlistid = 5}if (currentid <= 24) 
    {playlistid = 4}if (currentid <= 19) {playlistid = 3}if (currentid <= 14) {playlistid = 2}if (currentid <= 9) {playlistid = 1}if (currentid <= 4) {playlistid = 0}

    let arrayofsongs = data.playlists[playlistid].songs
    let oneplaylist = data.playlists[playlistid]

    for (let i = arrayofsongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayofsongs[i], arrayofsongs[j]] = [arrayofsongs[j], arrayofsongs[i]];
    }
        abouttoclear[0].innerHTML = "";
        modal_content.innerHTML +=
    `<div class="playlist">
    <img src="${oneplaylist.playlist_art}" alt="Song cover art" class="playlistimage">
    <div class="playlistinfo">
    <h3 class="songtitle">${oneplaylist.playlist_name}</h3>
    <p class="songartist">${oneplaylist.playlist_creator}</p></div>
    </div>`;
    arrayofsongs.forEach(populate);        
}