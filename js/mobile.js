if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (document.referrer != "")) {
    window.location.replace("mobile/indexM.html")
  }else{
    console.log("Script1 funcionado")
  }
  