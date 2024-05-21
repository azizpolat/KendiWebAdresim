

    var menuBar = document.querySelector('#menubar');
    var menuLink = document.querySelector('.navlinks');

    menuLink.style.top = '-450px';

    menuBar.onclick = function() {
        if (menuLink.style.top === '-450px') {
            menuLink.style.top = '50px';
        } else {
            menuLink.style.top = '-450px';
        }
    };

