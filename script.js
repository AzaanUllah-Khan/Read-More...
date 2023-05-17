
var show = document.getElementById('show');
var hide = document.getElementById('hidden');
var inner = show.innerHTML;
show.innerHTML = inner + '....';
function change() {
    if (hide.style.display == 'none') {
        show.innerHTML = inner
        hide.style.display = 'inline';
        document.getElementById('ml').innerHTML = "Less"
    }
    else {
        show.innerHTML = inner + '....';
        hide.style.display = 'none';
        document.getElementById('ml').innerHTML = "More"
    }
}
