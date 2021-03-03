// db.js

db.restaurants.insert([
    {
        "_id": "res1",
        "name": "McDonald's",
        "verified": true,
        "web": "https://mcdonalds.es",
        "phone": 123456789,
        "email": "macky@gmail.com",
        "tags": [
            "burguers",
            "ice cream",
            "potatoes"
        ],
        "price": 5,
        "location": "Nureduna, 1, 07006 Mallorca, Balearic Islands",
        "menu": [
            {
                "drinks": [
                    {
                        "drink": "water",
                        "price": 1,
                        "coin": "EUR"
                    },
                    {
                        "drink": "wine",
                        "price": 50,
                        "coin": "EUR"
                    },
                    {
                        "drink": "fanta",
                        "price": 3,
                        "coin": "EUR"
                    }
                ]
            },
            {
                "salad": [
                    {
                        "dish": "chicken salad",
                        "price": 4,
                        "coin": "EUR"
                    }
                ]
            }
        ],
        "schedule": [
            {
                "Monday": "8h - 22h"
            },
            {
                "Tuesday": "8h - 20h"
            },
            {
                "Wednesday": "8h - 20h"
            },
            {
                "Thursday": "8h - 22h"
            },
            {
                "Friday": "8h - 20h"
            },
            {
                "Saturday": "8h - 18h"
            },
            {
                "Sunday": "8h - 24h"
            }
        ],
        "prating": "2",
        "image": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/26/19/mcdonalds.jpg"
    },
    {
        "_id": "res2",
        "name": "KFC",
        "verified": true,
        "web": "https://online.kfc.co.in/home",
        "phone": 987654321,
        "email": "kentaki@gmail.com",
        "tags": [
            "chicken",
            "ice cream",
            "potatoes"
        ],
        "price": 2,
        "location": "Friedrichstraße, 45, 10969 Berlin, Germany",
        "menu": [
            {
                "drinks": [
                    {
                        "drink": "water",
                        "price": 1,
                        "coin": "EUR"
                    },
                    {
                        "drink": "wine",
                        "price": 50,
                        "coin": "EUR"
                    },
                    {
                        "drink": "fanta",
                        "price": 3,
                        "coin": "EUR"
                    }
                ]
            },
            {
                "salad": [
                    {
                        "dish": "chicken salad",
                        "price": 4,
                        "coin": "EUR"
                    }
                ]
            }
        ],
        "schedule": [
            {
                "Monday": "8h - 22h"
            },
            {
                "Tuesday": "8h - 20h"
            },
            {
                "Wednesday": "8h - 20h"
            },
            {
                "Thursday": "8h - 22h"
            },
            {
                "Friday": "8h - 20h"
            },
            {
                "Saturday": "8h - 18h"
            },
            {
                "Sunday": "8h - 24h"
            }
        ],
        "prating": "5",
        "image": "https://media.spokesman.com/photos/2018/02/19/Britain_KFC_No_Chicken.JPG.jpg"
    },
    {
        "_id": "res3",
        "name": "McDonald's",
        "verified": true,
        "web": "https://mcdonalds.es",
        "phone": 659265925,
        "email": "macky2@gmail.com",
        "tags": [
            "burguers",
            "ice cream",
            "potatoes"
        ],
        "price": 1,
        "location": "Avenue de Bordeaux, 82, 82400 Valence d'Agen, Francia",
        "menu": [
            {
                "drinks": [
                    {
                        "drink": "water",
                        "price": 1,
                        "coin": "EUR"
                    },
                    {
                        "drink": "wine",
                        "price": 50,
                        "coin": "EUR"
                    },
                    {
                        "drink": "fanta",
                        "price": 3,
                        "coin": "EUR"
                    }
                ]
            },
            {
                "salad": [
                    {
                        "dish": "chicken salad",
                        "price": 4,
                        "coin": "EUR"
                    }
                ]
            }
        ],
        "schedule": [
            {
                "Monday": "8h - 22h"
            },
            {
                "Tuesday": "8h - 20h"
            },
            {
                "Wednesday": "8h - 20h"
            },
            {
                "Thursday": "8h - 22h"
            },
            {
                "Friday": "8h - 20h"
            },
            {
                "Saturday": "8h - 18h"
            },
            {
                "Sunday": "8h - 24h"
            }
        ],
        "prating": "3",
        "image": "https://atlantablackstar.com/wp-content/uploads/2014/10/McDonalds.jpg"
    },
    {
        "_id": "res4",
        "name": "Telepizza",
        "verified": true,
        "web": "https://www.telepizza.es",
        "phone": 574246862,
        "email": "telepy@gmail.com",
        "tags": [
            "pizza",
            "potatoes"
        ],
        "price": 3,
        "location": "Cónego Dr. Manuel Faria, 7, 4800-321 Guimarães, Portugal",
        "menu": [
            {
                "drinks": [
                    {
                        "drink": "water",
                        "price": 1,
                        "coin": "EUR"
                    },
                    {
                        "drink": "wine",
                        "price": 50,
                        "coin": "EUR"
                    },
                    {
                        "drink": "fanta",
                        "price": 3,
                        "coin": "EUR"
                    }
                ]
            },
            {
                "salad": [
                    {
                        "dish": "chicken salad",
                        "price": 4,
                        "coin": "EUR"
                    }
                ]
            }
        ],
        "schedule": [
            {
                "Monday": "8h - 22h"
            },
            {
                "Tuesday": "8h - 20h"
            },
            {
                "Wednesday": "8h - 20h"
            },
            {
                "Thursday": "8h - 22h"
            },
            {
                "Friday": "8h - 20h"
            },
            {
                "Saturday": "8h - 18h"
            },
            {
                "Sunday": "8h - 24h"
            }
        ],
        "prating": "1",
        "image": "https://www.multivu.com/players/English/7586851-telepizza-moves-forward-in-bolivia/gallery/image/ca46ffa7-7eb2-4cc1-8814-04224d24177e.HR.jpg"
    },
    {
        "_id": "res5",
        "name": "WOK",
        "verified": true,
        "web": "https://wok.es",
        "phone": 467834545,
        "email": "wocky@gmail.com",
        "tags": [
            "asian",
            "dish",
            "sauce"
        ],
        "price": 2,
        "location": "Plaça d'Espanya, 11, 07002 Mallorca, Balearic Islands",
        "menu": [
            {
                "drinks": [
                    {
                        "drink": "water",
                        "price": 1,
                        "coin": "EUR"
                    },
                    {
                        "drink": "wine",
                        "price": 50,
                        "coin": "EUR"
                    },
                    {
                        "drink": "fanta",
                        "price": 3,
                        "coin": "EUR"
                    }
                ]
            },
            {
                "salad": [
                    {
                        "dish": "chicken salad",
                        "price": 4,
                        "coin": "EUR"
                    }
                ]
            }
        ],
        "schedule": [
            {
                "Monday": "8h - 22h"
            },
            {
                "Tuesday": "8h - 20h"
            },
            {
                "Wednesday": "8h - 20h"
            },
            {
                "Thursday": "8h - 22h"
            },
            {
                "Friday": "8h - 20h"
            },
            {
                "Saturday": "8h - 18h"
            },
            {
                "Sunday": "8h - 24h"
            }
        ],
        "prating": "4",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/da/74/24/wok-restaurant-atlantis.jpg"
    }
])

db.reviews.insert([{
    "_id": "rev1",
    "date": "2020-09-15",
    "urating": 4,
    "title": "It costs just two dollars!",
    "review": "We drove up to the drive-up and we ordered 2 Mcchicken sandwiches...",
    "restaurant": "res1",
    "user": "use1"
},
{
    "_id": "rev2",
    "date": "2020-11-06",
    "urating": 4,
    "title": "Ain't got no tears left to cry",
    "review": "2 filet-O-fish, 2 med fries and 1 med lemonade...",
    "restaurant": "res2",
    "user": "use2"
},
{
    "_id": "rev3",
    "date": "2020-08-05",
    "urating": 5,
    "title": "Dream of meet",
    "review": "There were two of us, we drove around to park and eat in our car...",
    "restaurant": "res3",
    "user": "use3"
},
{
    "_id": "rev4",
    "date": "2020-09-17",
    "urating": 2,
    "title": "Creamy and creamy, vegetable juice",
    "review": "We opened the fish sandwiches and we were so disappointed...",
    "restaurant": "res4",
    "user": "use4"
},
{
    "_id": "rev5",
    "date": "2020-09-26",
    "urating": 4,
    "title": "Have some ham, you will see what great pleasure",
    "review": "Real fat, good quality...",
    "restaurant": "res5",
    "user": "use1"
}])

db.users.insert([
  {
      "_id": "use1",
      "username": "Gloria",
      "city": "Vancouver"
  },
  {
      "_id": "use2",
      "username": "Virginia",
      "city": "Guanajuato"
  },
  {
      "_id": "use3",
      "username": "Francisco",
      "city": "Turín"
  },
  {
      "_id": "use4",
      "username": "Maria Fulgensia",
      "city": "Vilna"
  }
])