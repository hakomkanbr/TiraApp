const data = [
    {
      "id": 1,
      "name": "Products",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 2,
      "name": "About",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 1002,
      "name": "Contact",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 1003,
      "name": "site map",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 1,
      "name": "Home",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 2,
      "name": "About",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 1002,
      "name": "Contact",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    },
    {
      "id": 1003,
      "name": "site map",
      "published": false,
      "sorting": 0,
      "views": 0,
      "system": false,
      "notUp": false,
      "notDown": false,
      "systemId": null
    }
]


export default function hundler(req , res, next){
    res.json(data)
}