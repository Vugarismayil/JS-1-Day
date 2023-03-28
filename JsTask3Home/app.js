function changeColor() {
    var groupName = document.getElementById("group-name").value;
    var num = groupName.slice(-3, -2);
    var find = parseInt(num);
    var backgroundColor, textColor;

    if (find === 1) {
        backgroundColor = "yellow";
        textColor = "black";
    } else if (find === 2) {
        backgroundColor = "darkred";
        textColor = "white";
    } else if (find === 3) {
        backgroundColor = "black";
        textColor = "white";
    } else {
        backgroundColor = "white";
       
    }
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
}

