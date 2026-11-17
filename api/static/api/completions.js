document.addEventListener('DOMContentLoaded', () => {
    const vqnlevelsbutton = document.getElementById('vqnlevelsbutton');
    const youtubeButton = document.getElementById('youtubeButton');
    const gitHubButton = document.getElementById('gitHubButton');

    if (vqnlevelsbutton) {
      vqnlevelsbutton.addEventListener('click', () => {
          window.location.href = "/index/";
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


// completions.js
async function renderAredlLevels() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/aredl-proxy/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const levels = await response.json();
        console.log("Fetched levels from local database:", levels);
        
        const listElement = document.getElementById('level-list');
        if (!listElement) {
            console.error("Element with ID 'level-list' not found in HTML!");
            return;
        }
        
        listElement.innerHTML = '';
        
        if (!Array.isArray(levels) || levels.length === 0) {
            listElement.innerHTML = '<li>No levels in the database yet.</li>';
            return;
        }
        
        levels.forEach(level => {
            const listItem = document.createElement('li');
            
            // Create a button for each level
            const button = document.createElement('button');
            button.textContent = `${level.name} - AREDL #${level.aredlPosition}`;
            button.className = 'level-btn'; // Optional: use for CSS styling
            
            // Update the details box when this specific button is clicked
            button.addEventListener('click', () => {
                showLevelDetails(level);
            });
            
            listItem.appendChild(button);
            listElement.appendChild(listItem);
        });
        
    } catch (error) {
        console.error("Failed to load levels:", error);
    }
}

function formatDate(value) {
  if (!value) return "";                       // empty or null field
  const [y, m, d] = value.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric"
  });
}

function showLevelDetails(level) {
    const levelTitle = document.getElementById("levelTitle")
    const levelDescription = document.getElementById('levelDescription');
    const levelCreator = document.getElementById('levelCreator');
    const attempts = document.getElementById('attempts');
    const enjoyment = document.getElementById('enjoyment');
    const completion = document.getElementById('completion');
    const levelVideo = document.getElementById('levelVideo');

    levelTitle.textContent = level.name;
    levelVideo.src = level.videoEmbed || '';
    levelDescription.textContent = level.description || 'No description available.';
    levelCreator.textContent = level.creator || 'Unknown';
    attempts.textContent = level.attemptCount !== undefined ? level.attemptCount : 'N/A';
    enjoyment.textContent = level.enjoyment !== undefined ? level.enjoyment : 'N/A';
    completion.textContent = level.completionDate !== undefined ? level.completionDate : 'N/A';
   
}



document.addEventListener('DOMContentLoaded', renderAredlLevels);