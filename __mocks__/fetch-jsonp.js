const photos = {
  "title": "Uploads from everyone",
  "link": "https:\/\/www.flickr.com\/photos\/",
  "description": "",
  "modified": "2018-02-21T10:49:45Z",
  "generator": "https:\/\/www.flickr.com",
  "items": [
     {
      "title": "Intermediaciones-Lanzadera-Talavera17",
      "link": "https:\/\/www.flickr.com\/photos\/147571544@N06\/40353330442\/",
      "media": {"m":"https:\/\/farm5.staticflickr.com\/4627\/40353330442_de5c4bf6e8_m.jpg"},
      "date_taken": "2018-02-21T10:47:03-08:00",
      "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/147571544@N06\/\">lanzaderatalaveraIII<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/147571544@N06\/40353330442\/\" title=\"Intermediaciones-Lanzadera-Talavera17\"><img src=\"https:\/\/farm5.staticflickr.com\/4627\/40353330442_de5c4bf6e8_m.jpg\" width=\"240\" height=\"135\" alt=\"Intermediaciones-Lanzadera-Talavera17\" \/><\/a><\/p> ",
      "published": "2018-02-21T10:49:53Z",
      "author": "nobody@flickr.com (\"lanzaderatalaveraIII\")",
      "author_id": "147571544@N06",
      "tags": ""
     },
     {
      "title": "IMG_1201",
      "link": "https:\/\/www.flickr.com\/photos\/hofstaddistributie\/40397743751\/",
      "media": {"m":"https:\/\/farm5.staticflickr.com\/4764\/40397743751_860f978259_m.jpg"},
      "date_taken": "2018-01-09T13:05:17-08:00",
      "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hofstaddistributie\/\">Hofstad Distributie<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hofstaddistributie\/40397743751\/\" title=\"IMG_1201\"><img src=\"https:\/\/farm5.staticflickr.com\/4764\/40397743751_860f978259_m.jpg\" width=\"180\" height=\"240\" alt=\"IMG_1201\" \/><\/a><\/p> ",
      "published": "2018-02-21T10:49:59Z",
      "author": "nobody@flickr.com (\"Hofstad Distributie\")",
      "author_id": "27421042@N00",
      "tags": ""
     },
     {
      "title": " ",
      "link": "https:\/\/www.flickr.com\/photos\/101551921@N07\/40397744311\/",
      "media": {"m":"https:\/\/farm5.staticflickr.com\/4675\/40397744311_b8187b9cab_m.jpg"},
      "date_taken": "2017-06-20T09:47:02-08:00",
      "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/101551921@N07\/\">gaarakunbn95<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/101551921@N07\/40397744311\/\" title=\" \"><img src=\"https:\/\/farm5.staticflickr.com\/4675\/40397744311_b8187b9cab_m.jpg\" width=\"240\" height=\"180\" alt=\" \" \/><\/a><\/p> ",
      "published": "2018-02-21T10:50:03Z",
      "author": "nobody@flickr.com (\"gaarakunbn95\")",
      "author_id": "101551921@N07",
      "tags": ""
     }
  ]
};

export default function fetchJsonp(url) {
  return new Promise((resolve, reject) => {
    if (url.includes("photos_public")) {
      process.nextTick(() => resolve({
        json: () => Promise.resolve(photos)
      }));
    } else {
      reject("not implemented yet");
    }
  });
}
