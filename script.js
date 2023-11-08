const songs = [
    {
        artist: "MF Doom",
        title: "One Beer",
        albumCover: "onebeer.jpeg"
    },
    {
        artist: "Laufey",
        title: "From the start",
        albumCover: "fromthestart.jpeg"
    },
    {
        artist: "TV girl",
        title: "Cigarettes out the window",
        albumCover: "tvgirl.jpeg"
    },
    {
        artist: "Kendrick Lamar",
        title: "United in grief",
        albumCover: "united.jpeg",
    },
    {
        artist: "Faye Webster",
        title: "Kingston",
        albumCover: "kingston.jpeg",
    },
    {
        artist: "Deftones",
        title: "Change (in the house of flies)",
        albumCover: "change.jpeg",
    },
    {
        artist:"ivusm",
        title:"Meow",
        albumCover:"meow.jpeg",
    },
    {
        artist:"Modern Talking",
        title:"Cheri Cheri Lady",
        albumCover:"cheri.jpeg",
    },
    {
        artist:"Rammstein",
        title:"Sonne",
        albumCover:"sonne.jpeg",
    },
    {
        artist:"Rammstein",
        title:"Du hast",
        albumCover:"du.jpeg",
    },
    // Add more songs with album covers here
];

const artistElement = document.getElementById("artist");
const titleElement = document.getElementById("title");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const chancesElement = document.getElementById("chances");
const scoreElement = document.getElementById("score");
const albumCover = document.getElementById("album-cover");
const nextSongButton = document.getElementById("next-song");

let currentSong;
let chances = 2;
let score = 0;

function startGame() {
    currentSong = getRandomSong();
    artistElement.textContent = currentSong.artist;
    titleElement.textContent = currentSong.title.replace(/\w/g, "_");

    // Set the album cover image source and apply the blurred class
    albumCover.src = currentSong.albumCover;
    albumCover.classList.add("blurred");

    chances = 2;
    scoreElement.textContent = score;
    chancesElement.textContent = chances;

    // Hide the "Next Song" button
    nextSongButton.style.display = "none";
}

function getRandomSong() {
    return songs[Math.floor(Math.random() * songs.length)];
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctTitle = currentSong.title.toLowerCase();

    if (guess === correctTitle) {
        score += (2 - chances) + 1;
        scoreElement.textContent = score;

        // Remove the blurred class to unblur the album cover
        albumCover.classList.remove("blurred");

        // Apply the green flash animation for correct answers
        document.body.classList.add("flash-green");
        setTimeout(() => {
            document.body.classList.remove("flash-green");
        }, 500);

        // Show the "Next Song" button
        nextSongButton.style.display = "block";
    } else {
        chances--;
        chancesElement.textContent = chances;

        // Apply the red flash animation for incorrect answers
        document.body.classList.add("flash-red");
        setTimeout(() => {
            document.body.classList.remove("flash-red");
        }, 500);

        if (chances === 0) {
            alert("Game Over. Your final score is: " + score);
            startGame();
        }
    }
    guessInput.value = "";
}

submitButton.addEventListener("click", checkGuess);

nextSongButton.addEventListener("click", function() {
    startGame();
});

startGame();



