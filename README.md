# Weather-Journal App Project
			
This Project is about bringing data from [OpenWeatherMap](https://openweathermap.org/current) and display it on **index-html** by building a server.
I used HTML , CSS , JavaSCript ,node.JS in this project
## Installation
To build a server it require to download [**node.js**](https://nodejs.org/en/download/) and it has some package that need to install in your application:
* npm install express.
* npm install body-parser.
* npm install cors. 

I installed \*nodemon\* to restart the server automaticlly eveytime i modifiy my files.

###Routes

1-**GET** method
2-**POST** method

When i got the data from OpenWeatherMap i saved in POST method, made some changes and put it into the get method to display my data into index-html.


####JavaScript code:
> functions:
1-OpenWeather:
it take 3 parameters URL + zipCode + apikey (To get API key you need to create account in OpenWeatherMap).
i used async await method to fetch the data and parsed it into json 

2-WeatherDate:
it takes 2 parameters.
When i recevied the data from openweather , i saved it inside WeatherDate using POST method , and **SENT** that data to GET Method 

3-UpdateUI:
it takes no parameters.
it only fetch the date that received from **POSt** and assign it to **GET** to display the data (Date,Temp,Content)


##### AddEventListener

I used addevent _Click_ to generate the display the data by Using **myFunction**.
> All myFunction does it take those 3 functions above (opeWeather,Weatherdate,UpdateUI) to do all the work.

###### Websites
[w3schools](https://www.w3schools.com/)
[MDN](https://developer.mozilla.org/en-US/)	
		  
