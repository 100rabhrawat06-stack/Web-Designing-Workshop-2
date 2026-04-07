function generateTable() {
    let num = document.getElementById("numberInput").value;
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    if (num === "") {
        resultDiv.innerHTML = "Please enter a number!";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let line = num + " × " + i + " = " + (num * i);
        resultDiv.innerHTML += line + "<br>";
    }
}