/**
* Netmera is the main class to be used for configuring the SDK and interacting with Netmera servers.
* @class
* @public
* @static
*/
declare class Netmera {

    /**
    * Initialize the Netmera instance. Netmera does not start operating, it even does not exist, unless this method is called. Any Netmera method called before this method is simply ignored.
    * @method
    * @public
    * @static
    * @params {string} senderId -  Sender Id of the Google project for which push token will be taken
    * @params {string} sdkApiKey - Application specific API key gathered from Netmera panel. 
    */
    static init(senderId: String, sdkApiKey?: String);

    /**
    * Request location permissions from user (For Android version level 23 and above). Calling this method will trigger OS to present location permission dialog to user. After permissions are granted, location tracking and geofence monitoring will start if they have been configured on Netmera panel. You do not need to call this method if your app already has Location permission.
    * @method
    * @public
    * @static
    */
    static requestPermissionsForLocation();

    /**
    * Check push notification state.
    * @method
    * @public
    * @static
    */
    static get pushEnabled();

    /**
    * Enable/disables push notification for this device.
    * @method
    * @public
    * @static
    * @params {boolean} enabled
    */
    static set pushEnabled(enabled: Boolean);

    /**
    * Enable/disable Netmera to present received popups immediately. By default, Netmera presents received popup style notifications automatically.Use this method to re-enable Netmera to automatically present popup style notifications if you previously disabled using disablePopupPresentation() method. If a popup style notification has been received during the time at which popup presentation was disabled, it will be shown immediately after you call this method. If multiple popup notifications have been received, only the most recent one will be presented
    * @method
    * @public
    * @static
    * @params {boolean} enabled
    */
    static set popupPresentationEnabled(enabled: Boolean);

    /**
    * Change logging state. Pass true if you want to see logs.
    * @method
    * @public
    * @static
    * @params {boolean} enabled
    */
    static set loggingEnabled(enabled: Boolean);

    /**
    * Set given Netmera SDK API key. Calling this method with a valid API key will effectively start communication with Netmera servers. Netmera will store any operation until it has an API key. Setting API key to null or empty string will stop all network operations, and all pending operations will be stored until a valid API key is set again.
    * @method
    * @public
    * @static
    * @params {string} apiKey
    */
    static set apiKey(apiKey: String);

    /**
    * Completely turn off sending all events and user data. If a true boolean parameter is passed to this method, NetmeraUser updates and NetmeraEvents will never be sent to server.
    * @method
    * @public
    * @static
    * @params {boolean} turnOff - Flag for opt-out user data and events. Default value is false.
    */
    static set turnOffSendingEvent(turnOff: Boolean);
}
export Netmera;