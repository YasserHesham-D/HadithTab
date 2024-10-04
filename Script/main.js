// data source

// Hadith Api
const apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json'; //ar bukhari
const apiUrlEn='https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.json'; // en bukhari

//////////////////////////////////////////////////////////////////////////////////////////////////////

// functionallity of clock
let time = document.getElementById('currenttime')
setInterval(()=>{
    let date = new Date();
    time.innerHTML=date.toLocaleTimeString();
},1000)
/////////////////////////////////////////////////////////////////////////////////////////////////////

// functionallity of fetching hadith

document.addEventListener('DOMContentLoaded', function () {
    let HadithText = document.getElementById('Hadith-Text');
    let nextHadithButton = document.getElementById('next-Hadith');
    let BookName = document.getElementById('NameOfBook');
    let trbtn=document.getElementById('TranslationBtn');
    
    async function fetchHadith()
    {
        fetch(apiUrl)
        .then(response=>response.json())
        .then(info=>
            { 
                let random =  Math.floor(Math.random() * Math.floor(7563));
                
                    let Hadith =  info.hadiths[random].text
                    while(Hadith.length>1500){
                        random =  Math.floor(Math.random() * Math.floor(7563));
                        //trbtn.addEventListener("click",TranslateHadithToEN(random))
                        Hadith = info.hadiths[random].text
                        console.log(Hadith.length);
                    }
                    
                    HadithText.innerHTML = Hadith;
                    BookName.innerHTML = info.metadata.name
            })
        .catch(error=>{console.log(error);});
}
    // Event listener for "Next Hadith" button
    nextHadithButton.onclick = fetchHadith;
    
    // Initial Hadith load
    fetchHadith();
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

// funcitonallity of the change background button

function changeImg(){
    const Images =[1,2,3,4,5,6,7,8,9]
    
    let Img = document.getElementById('bodyimg');
    
    const random =   Math.floor(Math.random() * Math.floor(9)) ;
    console.log(random)
    let Result =Images[random]
    console.log(Result)
    Img.src= "/Images/Background/"+Result+".jpg"


}
document.getElementById('BackgroundchangerBtn').onclick = changeImg;

///////////////////////////////////////////////////////////////////////////////////////////////////////
// functionallity of en translation

// function TranslateHadithToEN(random){
//     let HadithText = document.getElementById('Hadith-Text');
//     fetch(apiUrlEn)
//     .then(response=>response.json())
//     .then(info=>{

//                 console.log(random)
//                 let Hadith =  info.hadiths[random].text

//                     HadithText.innerHTML = Hadith;
//                     BookName.innerHTML = info.metadata.name
//     });
// }document.getElementById('TranslationBtn').onclick=TranslateHadithToEN;

//////////////////////////////////////////////////////////////////////////////////////////////////////