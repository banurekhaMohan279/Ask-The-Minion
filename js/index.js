function clickEvent(ques){
  /*https://rapidapi.com/mkkoncewicz/api/sentiment-analysis4/endpoints*/
  var data = JSON.stringify({
  "text": ques
  });

  var xhr = new XMLHttpRequest(); /*XMLHttpRequest Syntax*/
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    let random=Math.floor(Math.random() * 4) + 1;/*Generate random number in range*/
    if (JSON.parse(this.responseText).label=="positive"){
      document.getElementById("minionImg").src="img/"+"positive"+"Minion"+random+".gif"; /* Modify HTML with JS result*/
    }
    else{
      document.getElementById("minionImg").src="img/"+"negative"+"Minion"+random+".gif";
    }
  }
  });

  xhr.open("POST", "https://sentiment-analysis4.p.rapidapi.com/reviews");
  xhr.setRequestHeader("x-rapidapi-host", "sentiment-analysis4.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "ed95d6a8d5msh9801e7ace5e9004p11d682jsn8cfbda00cba6");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");

  xhr.send(data);
  console.log("success");
}
