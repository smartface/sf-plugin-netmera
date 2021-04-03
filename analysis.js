
/**
* Netmera is the main class to be used for configuring the SDK and interacting with Netmera servers.
* @class
* @public
* @static
*/
function Netmera() {};

/**
* Request location permissions from user (For Android version level 23 and above). Calling this method will trigger OS to present location permission dialog to user. After permissions are granted, location tracking and geofence monitoring will start if they have been configured on Netmera panel. You do not need to call this method if your app already has Location permission.
* @method requestPermissionsForLocation
* @public
* @static
*/
Netmera.requestPermissionsForLocation = function() {};


/**
* Check push notification state.
* @property {boolean}
* @public
* @static
*/
Netmera.pushEnabled = true;


/**
* Enable/disable Netmera to present received popups immediately. By default, Netmera presents received popup style notifications automatically.Use this method to re-enable Netmera to automatically present popup style notifications if you previously disabled using disablePopupPresentation() method. If a popup style notification has been received during the time at which popup presentation was disabled, it will be shown immediately after you call this method. If multiple popup notifications have been received, only the most recent one will be presented
* @property {boolean}
* @public
* @static
*/
Netmera.popupPresentationEnabled = true;


/**
* Change logging state. Pass true if you want to see logs.
* @property {boolean}
* @public
* @static
*/
Netmera.loggingEnabled = false;


/**
* Set given Netmera SDK API key. Calling this method with a valid API key will effectively start communication with Netmera servers. Netmera will store any operation until it has an API key. Setting API key to null or empty string will stop all network operations, and all pending operations will be stored until a valid API key is set again.
* @property {string}
* @public
* @static
*/
Netmera.apiKey = "";


/**
* Completely turn off sending all events and user data. If a true boolean parameter is passed to this method, NetmeraUser updates and NetmeraEvents will never be sent to server.
* @property {boolean} turnOff - Flag for opt-out user data and events. Default value is false.
* @public
* @static
*/
Netmera.turnOffSendingEvent = false;

module.exports = Netmera;