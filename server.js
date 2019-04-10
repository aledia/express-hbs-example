require('dotenv').config();

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path")
const swag = require("swag")

swag.registerHelpers(hbs);

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// this is an endpoint ("/")
app.get("/", (req, res) => {
    // la vida es una puta colisión
    function toUpper(str) {
        let cityUppercase = str.split("")
        cityUppercase[0] = cityUppercase[0].toLocaleUpperCase()

        return cityUppercase.join("");
    }

    class CityImg {
        constructor(city, country, streets, htmlTest, imgSrc, salary) {
            if (city.length === 1)  throw new Error("length is not enough")
            this.city = city
            this.streets = streets
            this.country = country
            this.htmlTest = htmlTest
            this.imgSrc = imgSrc
            this.salary = salary * 1.21
        }
    }

    var cities = [
        new CityImg(
            toUpper("stockholm"), 
            toUpper("sweden"),
            [{
                name: "st1",
                postcode: 28940
            },
            {
                name: "st2",
                postcode: 28941
            },
            {
                name: "st3",
                postcode: 28942
            }],
            "<span>Hola stockholm</span>",
            "img/stockholm.jpg",
            100000
        ),
        new CityImg(
            toUpper("madrid"), 
            toUpper("spain"), 
            [{
                name: "st1",
                postcode: 28940
            },
            {
                name: "st2",
                postcode: 28941
            },
            {
                name: "st3",
                postcode: 28942
            }],
            "<span>Hola madrid</span>",
            "img/stockholm.jpg",
            200000
        )
    ];

    res.render("index", cities[0]);
})

// this is an endpoint ("/home")
app.get("/home", (req, res) => {
    res.json({ hello: Math.random() })
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT)
})