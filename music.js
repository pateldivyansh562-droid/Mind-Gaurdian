document.addEventListener("DOMContentLoaded", () => {

    const moodButtons = document.querySelectorAll(".mood-btn");
    const player = document.getElementById("spotify-player");

    const playlists = {
        "Calm & Peaceful":
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY",
        "Deep Sleep":
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp",
        "Focus & Clarity":
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us",
        "Nature Sounds":
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYVURwQHUqnN",
        "Healing Vibes":
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx",
        "Meditation":
            "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0"
    };

    // Default playlist
    player.src = playlists["Calm & Peaceful"];

    moodButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            moodButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const mood = btn.innerText.trim();
            if (playlists[mood]) {
                player.src = playlists[mood];
            }
        });
    });
});
