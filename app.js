let dropdowns=document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name=="from" && currCode=="USD"){
            newOption.selected="selected";
        }
        else if(select.name=="To" &&     currCode=="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
      let currCode=element.value;
      let CountryCode = countryList[currCode];
      let newSrc=`https://flagsapi.com/${CountryCode}/flat/64.png`;
      let image = element.parentElement.querySelector("img");

      image.src=newSrc;
}







