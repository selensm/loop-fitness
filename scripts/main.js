document.getElementById("menuButton").addEventListener('click', function() {
    var nav = document.getElementsByTagName('nav')[0];
    var menuButton = this;

    if (nav.className.indexOf("active") === -1) {
        nav.classList.add('active');
        menuButton.classList.remove("fa-bars");
        menuButton.classList.add("fa-times");
    } else {
        nav.classList.remove('active');
        menuButton.classList.remove("fa-times")
        menuButton.classList.add("fa-bars");
    }
});