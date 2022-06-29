const data =  [
    {
        "id": 38,
        "name": "facebook",
        "url": "34634634"
    },
    {
        "id": 39,
        "name": "instagram",
        "url": "11111111111"
    },
    {
        "id": 40,
        "name": "twitter",
        "url": "222222222222222"
    },
    {
        "id": 41,
        "name": "youtube",
        "url": "346346"
    }
]
  
  
export default function hundler(req , res, next){
    res.json(data)
}