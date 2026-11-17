document.addEventListener('DOMContentLoaded', () => {
    const vqnlevelsbutton = document.getElementById('vqnlevelsbutton');
    const youtubeButton = document.getElementById('youtubeButton');
    const gitHubButton = document.getElementById('gitHubButton');

    if (vqnlevelsbutton) {
      vqnlevelsbutton.addEventListener('click', () => {
          window.location.href = 'index.html';
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

function showLevelDetails(level) {
    const detailsBox = document.getElementById('level-details');
    if (!detailsBox) return;

    detailsBox.innerHTML = `
        <h2>#${level.personalPosition} - ${level.name}</h2>
        <p><strong>AREDL Position:</strong> #${level.aredlPosition}</p>
        <p><strong>Creator:</strong> ${level.creator}</p>
        <p><strong>Completion Date:</strong> ${level.completionDate || 'N/A'}</p>
        <p><strong>Enjoyment:</strong> ${level.enjoyment !== null ? level.enjoyment + '/10' : 'N/A'}</p>
        <p><strong>Attempts:</strong> ${level.attemptCount}</p>
    `;
}

document.addEventListener('DOMContentLoaded', renderAredlLevels);