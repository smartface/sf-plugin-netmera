
/**
* Notifications is an class to be used for listening notification events.
* @class
* @public
* @static
*/
function Notifications() {};

/**
* Called when push registration is completed.
* @method onPushRegister
* @public
* @static
* @params {string} senderId - A String for which pushToken has been retrieved.
* @params {string} token - A String uniquely identifying the device for sending push message.
*/
Netmera.onPushRegister = function(senderId, token) {};


/**
* Called when a push message is received. If message comes from Netmera NetmeraPushObject will be non-null and a notification will be shown by default. However, if message doesn't come from Netmera, NetmeraPushObject will be null to indicate it is not a Netmera message and data of received message will be served via bundle parameter.
* @method onPushReceive
* @public
* @static
* @params {object} data - containing the data of the current push message.
*/
Netmera.onPushReceive = function(data) {};


/**
* Called when the push notification is opened by the user.
* @method onPushOpen
* @public
* @static
* @params {object}  data - containing the data of the current push message.
*/
Netmera.onPushOpen = function(data) {};


/**
* Called when the push notification is dismissed by the user.
* @method onPushDismiss
* @public
* @static
* @params {object} data - containing the data of the current push message.
*/
Netmera.onPushDismiss = function(data) {};


/**
* Called when any of notification button is clicked.
* @method onPushButtonClicked
* @public
* @static
* @params {object} data - containing the data of the current push message.
*/
Netmera.onPushButtonClicked = function(data) {};

module.exports = Netmera;