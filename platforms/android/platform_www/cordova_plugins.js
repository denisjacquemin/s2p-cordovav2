cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
        "id": "cordova-plugin-google-analytics.UniversalAnalytics",
        "clobbers": [
            "analytics"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "phonegap-plugin-push": "1.6.3",
    "cordova-plugin-transport-security": "0.1.2",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-google-analytics": "0.8.1"
};
// BOTTOM OF METADATA
});