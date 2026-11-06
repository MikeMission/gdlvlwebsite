
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

// link with backend
