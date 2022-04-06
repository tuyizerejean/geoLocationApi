let exaclyLocation;
if (navigator.geolocation) {
    const SuccessfullLookup = (position) => {
      const { latitude, longitude } = position.coords;
      window.alert(`your latitude is${latitude} and longitude is ${longitude} Click ok to see your location`);
      
      let apiLocation = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f771ed1eb4474843aa7ddf98d865dc08`;
      fetch(apiLocation)
        .then((response) => response.json())
        .then((data) => {
          let resultsList = data.results;
          exaclyLocation = resultsList[0].formatted;
           console.log(data)
           const displayLocation=document.getElementById("location")
    const h1=document.createElement("h1")
    const par=document.createElement("p")
    par.innerHTML=`${exaclyLocation}`
    displayLocation.appendChild(par)
        });
        
    }
    navigator.geolocation.getCurrentPosition(SuccessfullLookup);
  }

