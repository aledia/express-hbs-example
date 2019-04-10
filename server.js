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
hbs.registerPartials(__dirname + '/views/partials');

// this is an endpoint ("/")
app.get("/home", (req, res) => {
    // la vida es una puta colisión
    const data = {
        city: "bcn",
        displayExtraElementOnFooter: false,
        sectionTitle: "Home"
    }

    res.render("partials/home", data);
})

app.get("/products", (req, res) => {
    // la vida es una puta colisión
    const data = {
        displayExtraElementOnFooter: true,
        sectionTitle: "Products",
        players: 
            {
                'name': 'Rusell',
                'lastName': 'Westbrook',
                'team': 'OKC',
                'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
            }
        
    }

    res.render("partials/products", data);
})
app.get("/players", (req, res) => {
    // la vida es una puta colisión
    const data = {
        displayExtraElementOnFooter: true,
        players: [
            {
                'name': 'Rusell',
                'lastName': 'Westbrook',
                'team': 'OKC',
                'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
            },
            {
                'name': 'Kevin',
                'lastName': 'Durant',
                'team': 'GSW',
                'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
            },
            {
                'name': 'Lebron',
                'lastName': 'James',
                'team': 'CLE',
                'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
            },
            {
                'name': 'Emanuel',
                'lastName': 'Ginóbilli',
                'team': 'SAS',
                'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
            },
            {
                'name': 'Kyrie',
                'lastName': 'Irving',
                'team': 'BOS',
                'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf'
            },
            {
                'name': 'Kobe',
                'lastName': 'Bryant',
                'team': 'LAK',
                'photo': 'https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg'
            },
        ]
    }

    res.render("partials/players", data);
})

app.get("/about-us", (req, res) => {
    // la vida es una puta colisión
    const data = {
        city: "bcn",
        displayExtraElementOnFooter: true,
        sectionTitle: "about"
    }

    res.render("partials/about-us", data);
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT)
})