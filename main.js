document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    const playButton = document.getElementById('playButton');

    if (video && playButton) {
        playButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playButton.style.opacity = '0';
            } else {
                video.pause();
                playButton.style.opacity = '1';
            }
        });

        video.addEventListener('play', () => {
            playButton.style.opacity = '0';
        });

        video.addEventListener('pause', () => {
            playButton.style.opacity = '1';
        });
    }

    document.querySelectorAll('.faq-button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon'); 
            if (content) {
                content.classList.toggle('hidden'); 
            }
            if (icon) {
                icon.classList.toggle('rotate-180'); 
            }
            console.log('FAQ toggled:', button.textContent.trim());
        });
    });
});
