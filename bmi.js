const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/bmi.html");  
   
})

var port = 3000
app.listen(port, function(){
  console.log(`server running on ${port}`);
})

app.post('/result', (req, res) => {
  const age = req.body.age;
  const height = parseFloat(req.body.height)/100;
  const weight = parseFloat(req.body.weight);
  const bmi = weight / (height * height); 
  const str = 'Your BMI Result is: ' + bmi.toFixed(1)
  res.write(

`<body>
  <link rel="stylesheet" href="bmi.css">
    <div class="header">
        <div class="wrapper">
          <form action="/result" method="POST">
            <h1>BMI calculator</h1>
            <p>Insert Your Age</p>
            <input type="text" name="age">
            <p>Insert Weight in Kg</p>
            <input type="text" name="weight">
            <br>
            <p>Insert Height in cm</p>
            <input type="text" name="height">
            <br>
            <button id="calc">check</button>
            <p name="BMIresult">${str}</p>
          </form>
        </div>
    </div>
 
</body>`

)  
res.end();
});



