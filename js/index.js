function clickEvent(ques){
  /*https://rapidapi.com/mkkoncewicz/api/sentiment-analysis4/endpoints*/
  var data = JSON.stringify({
  "text": ques
  });

  userReply.classList.toggle('blur');
  loader.classList.toggle('hide');
  var xhr = new XMLHttpRequest(); /*XMLHttpRequest Syntax*/
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE ) {
      loader.classList.toggle('hide');
      userReply.classList.toggle('blur');
      let random=Math.floor(Math.random() * 4) + 1;/*Generate random number in range*/
      let responseType = JSON.parse(this.responseText).label;
      document.getElementById("minionImg").src="img/"+responseType+"Minion"+random+".gif"; /* Modify HTML with JS result*/
    }
  });

  xhr.open("POST", "https://sentiment-analysis4.p.rapidapi.com/reviews");
  xhr.setRequestHeader("x-rapidapi-host", "sentiment-analysis4.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "ed95d6a8d5msh9801e7ace5e9004p11d682jsn8cfbda00cba6");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");
  xhr.send(data);
}
