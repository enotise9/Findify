document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value || 'Internet';
    const engine = document.getElementById('searchEngine').value;

    let url;
    switch (engine) {
        case 'yandex':
            url = `https://yandex.ru/search/?text=${encodeURIComponent(query)}`;
            break;
        case 'mailru':
            url = `https://go.mail.ru/search?q=${encodeURIComponent(query)}`;
            break;
        case 'google':
        default:
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
    }

    window.open(url, '_blank');
});
