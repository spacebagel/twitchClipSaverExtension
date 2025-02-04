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
button.setAttribute('title', 'Download clip')
button.style.display = 'flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.width = '30px';
button.style.height = '30px';
button.appendChild(svg);

document.body.appendChild(button);

button.addEventListener('click', () => {
    const videoElement = document.querySelector('video');

    if (videoElement) {
        const videoSrc = videoElement.src;

        if (videoSrc) {
            const link = document.createElement('a');
            link.href = videoSrc;
            link.target = '_blank';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            console.error('URL is not exist.');
        }
    } else {
        console.error('Video file is not exist.');
    }
});

const playerPanel = document.getElementsByClassName('player-controls__right-control-group');

if (playerPanel.length > 0) {
    const firstChild = playerPanel[0].firstChild;
    playerPanel[0].insertBefore(button, firstChild);
} else {
    console.error('Player is not exist.');
}