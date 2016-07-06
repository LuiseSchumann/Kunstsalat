/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.width = "220px";
    /*document.getElementsByClassName("kopfbereich").style.display = 'none';*/
    document.getElementById("test").style.display = 'none';
    document.getElementById("test").style.width = "220px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("test").style.display = 'block';
    document.getElementById("test").style.width = "40px";
}
