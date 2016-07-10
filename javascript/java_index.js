function openNav() {
    document.getElementById("sidenav").style.width = "260px";
    /*document.getElementsByClassName("kopfbereich").style.display = 'none';*/
    document.getElementById("test").style.display = 'none'
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    setTimeout(function () {
      document.getElementById("test").style.display = 'block';
    }, 400);

}
