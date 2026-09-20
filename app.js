let BaseUrl = "https://latest.currency-api.pages.dev/v1/currencies";

let message = document.querySelector(".msg");

let dropdowns=document.querySelectorAll(".dropdown select");
let FromCurr = document.querySelector(".from select");

let ToCurr = document.querySelector(".To select");

let button = document.querySelector("form button");

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name=="from" && currCode=="USD"){
            newOption.selected="selected";
        }
        else if(select.name=="To" &&     currCode=="PKR"){
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
      let image = element.parentElement.querySelector ("img");
      image.src=newSrc;
}

window.addEventListener("load",()=>{
    UpdateExchangeRates();
})

button.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    UpdateExchangeRates();
})


const UpdateExchangeRates=async()=>{
     let amount = document.querySelector(".amount input");
    let Amvalue=amount.value;
    if(Amvalue=="" || Amvalue<1){
        Amvalue=1;
        amount.value="1";
    }
    
   let URL = `${BaseUrl}/${FromCurr.value.toLowerCase()}.json`;
   let response = await fetch(URL);
   let data = await response.json();
   let rate= data[FromCurr.value.toLowerCase()][ToCurr.value.toLowerCase()];
   
   let FinalAmount = Amvalue * rate;
   
   message.innerText=`${Amvalue}${FromCurr.value} = ${FinalAmount}${ToCurr.value}`
}

 






