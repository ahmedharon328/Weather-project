/* Global Variables */



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate() +'.'+ d.getFullYear();

// Create URL ,APi
const baseUrl ="https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey="&appid=c32383c3be16829a9d38053bbe1c5387&units=metric";

// using addeventlistner to generate data 
const generate = document.getElementById("generate");
generate.addEventListener("click",myFunction);

// call function
function myFunction(e){
    // attach zip code with URL and APi key
    const zipCode = document.getElementById("zip").value;
    const myFeeling = document.getElementById("feelings").value;

    //call function openWeather
    openWeather(baseUrl,zipCode,apiKey)
    .then(data=>{           // After i brought Data using openWeather function,  
        console.log(data);
        WeatherDate("/info",{date:d, temp:data.main.temp , content:myFeeling}) // creating my own data 

    }).then(newData=>{    // then i used updateUI to display the data 
        updateUI()
    })
    
}


// creating openWeather Function to bring the data using "Fetch" from the main server  
const openWeather= async(baseUrl,zipCode,apiKey)=>{
    const response = await fetch (baseUrl+zipCode+apiKey);
    // i parsed data using JSON
    try {
        const dataKey = await response.json();
        return dataKey
    } catch (error) {
        console.log("Error:",error)   // if anything wrong happened the Error will show up 
    }
}

// Creating WeatherData function to POST the data that came from "openWeather function" to store it in the server
const WeatherDate = async (url , getData)=>{
    console.log(getData)
    const respond = await fetch(url,{
        method:"POST",                  
        credentials:"same-origin",      
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(getData)    
    });
    try {
        const dataRespond = await respond.json()
        console.log(dataRespond)
        return dataRespond
    } catch (err) {
        console.log("Error:",err)
    }
}

// Creating updateUI fucntion to display the data that came from the server into the browser 
const updateUI = async()=>{
    const request = await fetch ("/presentData");
    try {
        const alldata =await request.json();
        const div =document.getElementById("entryHolder");
        document.getElementById("date").innerHTML = alldata.date;
        document.getElementById("temp").innerHTML = alldata.temp;
        document.getElementById("content").innerHTML = alldata.content;

        console.log(alldata)
    } catch (error) {
        console.log("Error:",error)
    }
}





