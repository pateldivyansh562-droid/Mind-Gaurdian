// // MAIN GLOBAL UI SCRIPT
// document.addEventListener("DOMContentLoaded", () => {

//   // Highlight active nav link based on current page
//   const page = window.location.pathname.split("/").pop();
//   document.querySelectorAll(".nav-links a").forEach(link => {
//     if (link.getAttribute("href") === page) {
//       link.classList.add("active");
//     }
//   });

//   // Smooth scroll for #anchors
//   document.querySelectorAll("a[href^='#']").forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         e.preventDefault();
//         window.scrollTo({
//           top: target.offsetTop - 60,
//           behavior: "smooth"
//         });
//       }
//     });
//   });

// });
// const moodBtns = document.querySelectorAll(".mood-btn");
// const spotifyPlayer = document.getElementById("spotify-player");

// moodBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
    
//     // remove old active
//     moodBtns.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");

//     // update iframe
//     const playlist = btn.dataset.playlist;
//     spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlist}`;
//   });
// });

