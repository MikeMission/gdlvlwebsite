
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
        // Fetch from your local Django proxy (which reads from your database safely)
        const response = await fetch('http://127.0.0.1:8000/api/aredl-proxy/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const levels = await response.json();
        console.log("Successfully fetched levels from Django proxy:", levels);
        
        const listElement = document.getElementById('level-list');
        if (!listElement) {
            console.error("Element with ID 'level-list' not found in HTML!");
            return;
        }
        
        listElement.innerHTML = ''; // Clear loading text
        
        if (!Array.isArray(levels) || levels.length === 0) {
            listElement.innerHTML = '<li>No levels in the database yet. Add some via Django Admin!</li>';
            return;
        }
        
        // Render each level into your HTML page
        levels.forEach(level => {
            const listItem = document.createElement('li');
            listItem.textContent = `#${level.aredlPosition} - ${level.name} (Creator: ${level.creator})`;
            listElement.appendChild(listItem);
        });
        
    } catch (error) {
        console.error("Failed to load levels:", error);
    }
}

document.addEventListener('DOMContentLoaded', renderAredlLevels);