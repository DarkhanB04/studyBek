const express= require("express");
const router = express.Router();
const ejs = require('ejs')
const app=express()

const https = require('https')
var path = require('path');
app.set('view engine', 'ejs')
router
.route("/")
.get((req, res)=> {

    res.render(path.resolve('views/index.ejs'), {
        city:undefined, tempera:undefined, humi:undefined, coun:undefined, condition:undefined, press:undefined, windd:undefined, clouds:undefined

        }
    )})

  .post( (req, res) =>{
           let cityName = req.body.cityname
           let key ="7a42acf8f3a374601d78b15f5dfce724"
           let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+key+"&mode=json&units=metric"
      https.get(url, function(response){
      response.on('data', data =>{
          let a = JSON.parse(data)
          let temp =Number(a.main.temp)
          let cond = a.weather[0].description
          let humidity = a.main.humidity
          let country = a.sys.country
          let pressure = a.main.pressure
          let cloud=a.clouds.all
          let wind=a.wind.deg
         res.render(path.resolve('views/index.ejs'), {
              city:cityName, tempera:temp,humi:humidity,coun:country, condition:cond, press:pressure, windd:wind, clouds:cloud
         })

      })
      })
})
module.exports = router;