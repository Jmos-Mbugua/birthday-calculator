    // form validation function
    function validateForm() {
        var gender = document.getElementsByName("gender");
        var mdate = document.getElementById("day");
        var mmonth = document.getElementById("month");
        var myear = document.getElementById("year");
        var formValid = false;
        var i = 0;

        if (mdate.value == "" || mdate.value == null) {
            // alert("Please Input date");
            document.getElementById("dob").innerHTML = "Day Required";
            document.getElementById("dob").style.color = "red";
            mdate.style.border = "2px solid red";
            return false;
        } else {
            mdate.style.border = "";
            if (!isNaN(mdate.value)) {
                if (mdate.value <= 0 || mdate.value > 31) {
                    document.getElementById("dob").innerHTML = "Invalid date";
                    document.getElementById("dob").style.color = "red";
                    mdate.style.border = "2px solid red";
                    return false;
                } else {
                    document.getElementById("dob").innerHTML = "Date Ok!";
                    document.getElementById("dob").style.color = "green";
                    mdate.style.border = "2px solid green";
                }
            } else {
                document.getElementById("dob").innerHTML = "Day must be a Number";
                document.getElementById("dob").style.color = "red";
                mdate.style.border = "2px solid red";
                return false;
    
            }
        }
        if (mmonth.value == "" || mmonth.value == null) {



            document.getElementById("mmonth").innerHTML = "Month Required";
            document.getElementById("mmonth").style.color = "red";
            mmonth.style.border = "2px solid red";
            return false;
        } else {
            if (!isNaN(mmonth.value)) {
                if (mmonth.value <= 0 || mmonth.value > 12) {
                    document.getElementById("mmonth").innerHTML = "Invalid Month";
                    document.getElementById("mmonth").style.color = "red";
                    mmonth.style.border = "2px solid red";
                    return false;
                } else {
                    document.getElementById("mmonth").innerHTML = "Month Ok!";
                    document.getElementById("mmonth").style.color = "green";
                    mmonth.style.border = "2px solid green";
                }
            } else {
                document.getElementById("mmonth").innerHTML = "Month must be a Number";
                document.getElementById("mmonth").style.color = "red";
                mmonth.style.border = "2px solid red";
                return false;
            }
        }
        if (myear.value == "" || myear.value == null) {

            document.getElementById("myear").innerHTML = "Year Required";
            document.getElementById("myear").style.color = "red";
            myear.style.border = "2px solid red";
            return false;
        } else {
            if (!isNaN(myear.value)) {
                if (myear.value.length != 4) {
                    document.getElementById("myear").innerHTML = "Invalid Year";
                    document.getElementById("myear").style.color = "red";
                    myear.style.border = "2px solid red";
                    return false;
                } else {
                    document.getElementById("myear").innerHTML = "Year Ok!";
                    document.getElementById("myear").style.color = "green";
                    myear.style.border = "2px solid green";
                }
            } else {
                document.getElementById("myear").innerHTML = "Year must be a Number";
                document.getElementById("myear").style.color = "red";
                myear.style.border = "2px solid red";
                return false;
            }
        }