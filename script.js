
const initialColors = {
  "Hokkaido": "lightcoral",
  "Aomori": "khaki",
  "Iwate": "khaki",
  "Miyagi": "khaki",
  "Akita": "khaki",
  "Yamagata": "khaki",
  "Fukushima": "khaki",
  "Ibaraki": "lightgreen",
  "Tochigi": "lightgreen",
  "Gunma": "lightgreen",
  "Saitama": "lightgreen",
  "Chiba": "lightgreen",
  "Tokyo": "lightgreen",
  "Kanagawa": "lightgreen",
  "Niigata": "mediumpurple",
  "Toyama": "mediumpurple",
  "Ishikawa": "mediumpurple", 
  "Fukui": "mediumpurple",
  "Yamanashi": "mediumpurple",
  "Nagano": "mediumpurple",
  "Gifu": "mediumpurple",
  "Shizuoka": "mediumpurple",
  "Aichi": "mediumpurple",
  "Mie": "pink",
  "Shiga": "pink",
  "Kyoto": "pink",
  "Osaka": "pink",
  "Hyogo": "pink",
  "Nara": "pink",
  "Wakayama": "pink",
  "Tottori": "indianred",
  "Shimane": "indianred",
  "Okayama": "indianred",
  "Hiroshima": "indianred",
  "Yamaguchi": "indianred",
  "Tokushima": "coral",
  "Kagawa": "coral",
  "Ehime": "coral",
  "Kochi": "coral",
  "Fukuoka": "LightSlateGrey",
  "Saga": "LightSlateGrey",
  "Nagasaki": "LightSlateGrey",
  "Kumamoto": "LightSlateGrey",
  "Oita": "LightSlateGrey",
  "Miyazaki": "LightSlateGrey",
  "Kagoshima": "LightSlateGrey",
  "Okinawa": "teal"   
};






let score = 0; // Global variable for the score

// Function to check the user's guess
function checkGuess() {
    const userInput = document.getElementById("prefectureInput").value;
    const trimmedInput = userInput.trim().toLowerCase(); // Trim leading and trailing whitespaces

    // Check if the user's guess is in the array of prefecture titles
    const guessedPrefecture = Object.keys(initialColors).find(title => title.toLowerCase() === trimmedInput);

    if (guessedPrefecture) {
        // Update the color of the guessed prefecture
        const svgElements = document.querySelectorAll(`path[title="${guessedPrefecture}"]`);
        svgElements.forEach(element => {
            element.style.fill = "seagreen";
        });

        // Clear the input field on correct guess
        document.getElementById("prefectureInput").value = "";
        handleCorrectGuess();
    } else {
        // Shake the input box on incorrect guess
        const inputBox = document.getElementById("prefectureInput");
        inputBox.classList.add("shake");
        setTimeout(() => {
            inputBox.classList.remove("shake");
        }, 500);
    }
}

// Enable submitting the guess by pressing Enter
document.getElementById("prefectureInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// Function to handle correct guesses
function handleCorrectGuess() {
    const scoreElement = document.getElementById("score");
    const score = parseInt(scoreElement.innerText.split('/')[0]);
    const totalPrefectures = Object.keys(initialColors).length;

    
    const updatedScore = score + 1;

    
    if (updatedScore === totalPrefectures) {
      
        clearInterval(timerInterval);
        alert("Congratulations! You've guessed all prefectures!");

        
    }

   
    scoreElement.innerText = `Score: ${updatedScore}/${totalPrefectures}`;

    
    document.getElementById("prefectureInput").value = "";
}


function startGame() {
    // Reset the score
    score = 0;

    // Initialize the score
    const scoreElement = document.getElementById("score");
    const totalPrefectures = Object.keys(initialColors).length;
    scoreElement.innerText = `Score: 0/${totalPrefectures}`;

    // Initialize the colors of specific regions
    for (const [prefecture, color] of Object.entries(initialColors)) {
        const svgElements = document.querySelectorAll(`path[title="${prefecture}"]`);
        svgElements.forEach(element => {
            element.style.fill = color;
        });
    }

   
    document.getElementById("prefectureInput").disabled = false;

   
    document.getElementById("prefectureInput").focus();
}


document.addEventListener("DOMContentLoaded", () => {
    for (const [prefecture, color] of Object.entries(initialColors)) {
        const svgElements = document.querySelectorAll(`path[title="${prefecture}"]`);
        svgElements.forEach(element => {
            element.style.fill = color;
        });
    }
});
