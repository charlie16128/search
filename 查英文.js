// your-javascript-file.js
function searchCambridge() {
    var searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim() !== '') {
        var url = 'https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/' + encodeURIComponent(searchTerm);
        window.open(url, '_blank');
        addSearchHistory(searchTerm);
        document.getElementById('searchInput').value = ''; // 清空搜尋框內容
        resetSearchInput();
    } else {
        triggerErrorMessage();
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        searchCambridge();
    }
}

function addSearchHistory(searchTerm) {
    var searchHistoryDiv = document.getElementById('searchHistory');
    var historyItem = document.createElement('div');
    var link = document.createElement('button');
    link.textContent = '連結';
    link.classList.add('history-link');
    link.addEventListener('click', function() {
        window.open(getCambridgeURL(searchTerm), '_blank');
    });
    historyItem.innerHTML = searchTerm + ' ';
    historyItem.appendChild(link);
    searchHistoryDiv.appendChild(historyItem);
}

function getCambridgeURL(searchTerm) {
    return 'https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/' + encodeURIComponent(searchTerm);
}

function triggerErrorMessage() {
    var searchInput = document.getElementById('searchInput');

    // 設定放大時的樣式
    searchInput.style.transition = 'transform 0.35s, border-color 0.35s';
    searchInput.style.borderColor = 'red';
    searchInput.style.transform = 'scale(1.15)';

    // 在放大後 300 毫秒縮小並將外框顏色變回藍色
    setTimeout(function() {
        searchInput.style.transform = 'scale(1)';
        searchInput.style.borderColor = 'rgb(91, 195, 255)';
    }, 300);
}

// function resetSearchInput() {
//     var searchInput = document.getElementById('searchInput');
//     searchInput.style.borderColor = 'rgb(91, 195, 255)';
//     searchInput.style.transition = 'none';
// }
