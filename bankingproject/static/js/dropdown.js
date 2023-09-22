<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
       <script>
var subjectObject = {
 "Alappuzha": {
    "Chengannur": ["savings", "current"],
    "Mavelikara": ["savings", "current"],
    "Kuttanad": ["savings", "current"],
  },
  "Ernakulam": {
    "Muvattupuzha": ["savings", "current"],
    "Aluva": ["savings", "current"],
    " Angamaly": ["savings", "current"],
  },
  "Idukki": {
    " Thodupuzha": ["savings", "current"],
    "Devikulam": ["savings", "current"],
  },
  "Kannur": {
    "Payyanur": ["savings", "current"],
    "Thalassery": ["savings", "current"],
},
  "Kasaragod": {
    "Kasaragod": ["savings", "current"],
},
  "Kollam": {
    "Karunagappally": ["savings", "current"],
    "Punalur": ["savings", "current"],
},
  "Kottayam": {
    "Palai": ["savings", "current"],
    "Changanassery": ["savings", "current"],
},
  "Kozhikode": {
    "Vatakara": ["savings", "current"],
    "Ramanattukara": ["savings", "current"],
},
  "Malappuram": {
    "Kondotty": ["savings", "current"],
    "Nilambur": ["savings", "current"],
},
  "Palakkad": {
    " Alathur": ["savings", "current"],
    "Pattambi": ["savings", "current"],
},
  "Pathanamthitta": {
    "Adoor": ["savings", "current"],
    "Thiruvalla": ["savings", "current"],
},
  "Thiruvananthapuram": {
    "Attingal": ["savings", "current"],
    "Varkala": ["savings", "current"],
},
  "Thrissur": {
    "Guruvayur": ["savings", "current"],
    " Chalakkudy": ["savings", "current"],
},
  "Wayanad": {
    "Kalpetta": ["savings", "current"],
    "Mananthavady": ["savings", "current"],
}
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
</script>
</head>