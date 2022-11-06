function toggleSongs() {
    let songsSecondHalf = document.getElementById("songs-second-half");
    //songsSecondHalf.classList.add("hidden");
    songsSecondHalf.classList.toggle("hidden");
}
document.getElementById("toggle-button").onclick = toggleSongs;
