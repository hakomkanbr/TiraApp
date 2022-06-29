const pointsU = {
    login : "/Authenticate/login",
    register : "/Authenticate/register",
    repassword : "/Authenticate/Repassword",

    getEvents : "/Home/GetEvents",
    addEvent : "/Home/AddUpdateEvent",
    getEvent : "/Home/GetEvent",
    deleteEvent : "/Home/DeleteEvents",

    getCategorys : "/Home/GetCategories",
    AddCategori : "/Home/AddUpdateCategory",
    deleteKategori : "/Home/DeleteCategories" ,
    kategoriUp : "/Home/CategoryUp",
    kategoriDown : "/Home/CategoryDown",

    rssgetIcerikler : "/Home/GetRsses",
    icerikSil_rss :  "/DeleteEvents",
    editEventRss : "/Home/AddUpdateRss",
    addEventRss : "/Home/AddUpdateRss",
    getRssSingle : "/Home/GetRss",

    // setting 
    sosyalEkleDuzenle : "/Home/AddUpdateSocialMedia",
    getSosyal : "/Home/GetSocials",
    // ads
    getAds :"/Home/GetAds",
    deleteAds : "/Home/DeleteAds",
    addUpdateAds : "/Home/AddUpdateAd",

    // site
    sgetCategorys : "/Site/GetCategories",
    sgetCardContent : "/Site/GetEvents",
    sgetIcerik : "/Site/GetEvent",

    getSosyal : "/Site/GetSocials",


    GetMostReadedEvents : "/Site/GetMostReadedEvents",

    getRssEvents : "/Site/GetRssEvent",

    siteGetAds : "/Site/GetAds"
}


export default pointsU;