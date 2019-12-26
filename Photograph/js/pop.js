var c = 0;
function pop() {
    if (c == 0) {
        document.getElementById('popup').style.display = 'block';
        c = 1;
    } else {
        document.getElementById('popup').style.display = 'none';
        c = 0;
    }
};