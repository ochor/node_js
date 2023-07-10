
var contents = "";
contents += "<h3>구구단 표 만들어보기</h3>";
contents += "<table>"
contents += "<tr>"
contents += "<th>2단</th><th>3단</th><th>4단</th><th>5단</th><th>6단</th><th>7단</th><th>8단</th><th>9단</th>";
contents += "</tr>"

for (var i=_____; i<=_________; i++) {
    contents += "<tr>";
    for (var j=_________; j<=________; j++) {
        document.write(i + " x " + j + " = " + (____________) + "<br>");    
    }
    contents += "</tr>";
}  
contents += "</table>";

document.getElementById("result").innerHTML = contents;