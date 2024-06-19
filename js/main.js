document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('youtubeURL').value;
    const videoId = extractVideoID(url);
    if (videoId) {
        const iframe = document.getElementById('youtubePlayer');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        alert('Invalid YouTube URL');
    }
});

function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
