function validateForm () {
    var year = document.getElementById("inputyear4");
    var month = document.getElementById("inputmonth4");
    var day = document.getElementById("inputday4");

    if(year.value == "" || month.value == "" || day.value == ""){
        alert("Please fill in your details");
    }
}