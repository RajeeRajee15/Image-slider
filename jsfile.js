document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
// timer (automatic)
function autoNavigate() {
    document.getElementById("next").click();
}
// Set an interval to call the autoNavigate function every 3 seconds (adjust as needed)
const interval = setInterval(autoNavigate, 3000);
// Stop the slideshow when the page unloads (optional)
window.addEventListener("beforeunload", function () {
    clearInterval(interval);
});
