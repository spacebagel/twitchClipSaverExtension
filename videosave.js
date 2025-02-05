const button = createDownloadButton();

function insertButton() {
    const playerPanel = document.querySelector('.player-controls__right-control-group');

    if (playerPanel) {
        playerPanel.insertBefore(button, playerPanel.firstChild);
    } else {
        console.log('Player is not exist.');
        setTimeout(insertButton, 1000);
    }
}

const observer = new MutationObserver(() => {
    if (!document.contains(button)) {
        insertButton();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

insertButton();

function createDownloadButton() {
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M12 17V3');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'm6 11 6 6 6-6');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = '20px';
    svg.style.height = '20px';
    svg.style.fill = 'none';
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.classList.add('lucide', 'lucide-arrow-down-to-line');
    svg.appendChild(path1);
    svg.appendChild(path2);

    const button = document.createElement('button');
    button.classList.add('Layout-sc-1xcs6mc-0');
    button.setAttribute('title', 'Download clip');
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.width = '30px';
    button.style.height = '30px';
    button.appendChild(svg);

    button.addEventListener('click', () => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            const videoSrc = videoElement.src || videoElement.currentSrc;
            if (videoSrc) {
                const link = document.createElement('a');
                link.href = videoSrc;
                link.click();
            } else {
                console.error('Video file is not exist.');
            }
        }
    });

    return button;
}