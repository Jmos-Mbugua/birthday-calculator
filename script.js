function validatForm () {
    var x = document.forms["myForm"]["Birth-date"].value;
    if (x == "") {
        alert("Birth date required");
        return false;
    }
}