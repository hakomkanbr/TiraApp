module.exports = {
    env: {
        "BASE_URL": "https://napi.tiraapp.com/api",
        "MONGODB_URL": "mongodb://localhost:27017/db_tiraApp",
        "TOKEN_NAME" : "appToken",
        // "ACCESS_TOKEN_SECRET": "YOUR_ACCESS_TOKEN_SECRET",
        // "REFRESH_TOKEN_SECRET": "YOUR_REFRESH_TOKEN_SECRET",
        // "PAYPAL_CLIENT_ID": "YOUR_PAYPAL_CLIENT_ID",
        // "CLOUD_UPDATE_PRESET": "YOUR_CLOUD_UPDATE_PRESET",
        // "CLOUD_NAME": "YOUR_CLOUD_NAME",
        // "CLOUD_API": "YOUR_CLOUD_API"
    },
    cleanDistDir: false,
    images: {
      disableStaticImages: true,
    }
}
