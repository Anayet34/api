const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
    res.send({
        msg: 'Api is working'
    })
    
})


app.get('/products', function(req, res) {
    res.send([
        {
            id: 0,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 1,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 2,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 3,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 4,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 5,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 6,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 7,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 8,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 9,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
        {
            id: 10,
            name: "iphone x",
            company:	"apple",
            price:	600,
            image:	"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:	"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
            category:	"mobile",
            link: 'https://tailwindcss.com/docs/grid-template-rows'

        },
    ])
    
})



app.listen(5000, () => console.log('app is running'));
