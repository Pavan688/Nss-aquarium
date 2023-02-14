const database = {
    fish: [
        {
            image: "https://media.npr.org/assets/img/2013/09/12/blobfish122way_custom-dd3fcd75ff56be0187f975e6bdcff58fc8188863-s1100-c50.jpg",
            species: "Psychrolutes marcidus",
            length: "12in",
            name: "Squidward",
            location: "Coast of Australia",
            food: "Crabs, Urchins, Marine snow"
        },
        {
            image: "https://th-thumbnailer.cdn-si-edu.com/WKc9U4jdJIvNApeC-8dQlitNFWU=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/94/c1/94c102c0-1929-4ff6-b6ff-fd5d5ae036ae/42-25125374.jpg",
            species: "Mola mola",
            length: "5ft 11in",
            name: "Lola",
            location: "Coast of Argentina",
            food: "Zooplankton, Algea"
        },
        {
            image: "https://bloximages.newyork1.vip.townnews.com/chronicleonline.com/content/tncms/assets/v3/editorial/3/22/322ec6c4-6ce9-11e9-b516-abfe5bf5e903/5ccb031ccc3ce.image.jpg?resize=1200%2C901",
            species: "Seriola dumerili",
            length: "4ft 9in",
            name: "Jack",
            location: "Coast of Nova Scotia",
            food: "Squid, Crustaceans"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}