function checkNumber() {
    let n = document.getElementById("num").value;

    if (n % 2 == 0) {
        document.getElementById("result").innerHTML = n + " is Even";
    } else {
        document.getElementById("result").innerHTML = n + " is Odd";
    }
}