// Breaking News List Demo Functions
function removeNews(btn) {
    btn.parentElement.remove();
}
function addNews(e) {
    e.preventDefault();
    var input = document.getElementById('newBreakingNews');
    var value = input.value.trim();
    if (value) {
        var li = document.createElement('li');
        li.innerHTML = value + ' <button onclick="removeNews(this)">Remove</button>';
        document.getElementById('breakingNewsList').appendChild(li);
        input.value = '';
    }
} 