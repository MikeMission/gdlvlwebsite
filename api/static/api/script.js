const levelDetails = JSON.parse(document.getElementById("level-data").textContent);
let currentLevel = 0;
const el = {
  levelName : document.getElementById("levelName"),
  levelDescription : document.getElementById("levelDescription"),
  levelPrevImg : document.getElementById("levelPrevImg"),
  actualRatingImg : document.getElementsByClassName("rating")[0],
  actualRatingLabel : document.getElementById("actualRatingLabel"),
  estimatedRatingImg : document.getElementsByClassName("estimatedDifficulty")[0],
  estimatedDifficultyDescription : document.getElementById("estimatedDifficultyDescription"),
  estimatedRatingLabel : document.getElementsByClassName("estRatingHeader")[0],
  favPart1Perc : document.getElementById("favPart1Percentage"),
  favPart2Perc : document.getElementById("favPart2Percentage"),
  favPart3Perc : document.getElementById("favPart3Percentage"),
  favPartImg1 : document.getElementsByClassName("favPartImg1")[0],
  favPartImg2 : document.getElementsByClassName("favPartImg2")[0],
  favPartImg3 : document.getElementsByClassName("favPartImg3")[0],
  favPart1Desc : document.getElementById("favPart1Desc"),
  favPart2Desc : document.getElementById("favPart2Desc"),
  favPart3Desc : document.getElementById("favPart3Desc"),
  boxes : document.querySelectorAll(".box, .ratingBox, .estimatedDiffBox, .largeBox")
}

function showLevel(i) {
  const level = levelDetails[i];
  el.levelName.textContent = level.levelName;
  el.levelDescription.textContent = level.levelDescription;
  el.levelPrevImg.src = level.levelPrevImg;
  el.actualRatingImg.src = level.actualRatingImg;
  el.actualRatingLabel.textContent = level.actualRatingLabel;
  el.estimatedRatingImg.src = level.estimatedRatingImg;
  el.estimatedDifficultyDescription.textContent = level.estimatedDifficultyDescription;
  el.estimatedRatingLabel.textContent = level.estimatedRatingLabel;
  el.favPart1Perc.textContent = level.favPart1Perc;
  el.favPart2Perc.textContent = level.favPart2Perc;
  el.favPart3Perc.textContent = level.favPart3Perc;
  el.favPartImg1.src = level.favPartImg1;
  el.favPartImg2.src = level.favPartImg2;
  el.favPartImg3.src = level.favPartImg3;
  el.favPart1Desc.textContent = level.favPart1Desc;
  el.favPart2Desc.textContent = level.favPart2Desc;
  el.favPart3Desc.textContent = level.favPart3Desc;
  document.body.style.background = level.bgColor;

  el.boxes.forEach((box) => {
    box.style.background = level.bgColor;
  });
}

document.getElementById("nextLevelButton").addEventListener("click", () => {
  currentLevel = (currentLevel + 1) % levelDetails.length;
  showLevel(currentLevel);
});

document.addEventListener('DOMContentLoaded', () => {
    const completionsButton = document.getElementById('vqncompletionspagebutton');
    const youtubeButton = document.getElementById('youtubeButton');
    const gitHubButton = document.getElementById('gitHubButton');

    if (completionsButton) {
      completionsButton.addEventListener('click', () => {
          window.location.href = '/completions/';
      });
    }
    if (youtubeButton) {
      youtubeButton.addEventListener('click', () => {
        window.open('https://www.youtube.com/@vqn7395', '_blank');
      });
    }
    if (gitHubButton) {
      gitHubButton.addEventListener('click', () => {
        window.open('https://github.com/MikeMission', '_blank');
      });
    }
});
