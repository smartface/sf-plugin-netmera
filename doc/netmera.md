## Classes

<dl>
<dt><a href="#Netmera">Netmera</a></dt>
<dd></dd>
</dl>

<a name="Netmera"></a>

## Netmera
**Kind**: global class  
**Access**: public  

* [Netmera](#Netmera)
    * [new Netmera()](#new_Netmera_new)
    * [.pushEnabled](#Netmera.pushEnabled)
    * [.popupPresentationEnabled](#Netmera.popupPresentationEnabled)
    * [.loggingEnabled](#Netmera.loggingEnabled)
    * [.apiKey](#Netmera.apiKey)
    * [.turnOffSendingEvent](#Netmera.turnOffSendingEvent)

<a name="new_Netmera_new"></a>

### new Netmera()
Netmera is the main class to be used for configuring the SDK and interacting with Netmera servers.

<a name="Netmera.pushEnabled"></a>

### Netmera.pushEnabled
Check push notification state.

**Kind**: static property of [<code>Netmera</code>](#Netmera)  
**Access**: public  
**Properties**

| Type |
| --- |
| <code>boolean</code> | 

<a name="Netmera.popupPresentationEnabled"></a>

### Netmera.popupPresentationEnabled
Enable/disable Netmera to present received popups immediately. By default, Netmera presents received popup style notifications automatically.Use this method to re-enable Netmera to automatically present popup style notifications if you previously disabled using disablePopupPresentation() method. If a popup style notification has been received during the time at which popup presentation was disabled, it will be shown immediately after you call this method. If multiple popup notifications have been received, only the most recent one will be presented

**Kind**: static property of [<code>Netmera</code>](#Netmera)  
**Access**: public  
**Properties**

| Type |
| --- |
| <code>boolean</code> | 

<a name="Netmera.loggingEnabled"></a>

### Netmera.loggingEnabled
Change logging state. Pass true if you want to see logs.

**Kind**: static property of [<code>Netmera</code>](#Netmera)  
**Access**: public  
**Properties**

| Type |
| --- |
| <code>boolean</code> | 

<a name="Netmera.apiKey"></a>

### Netmera.apiKey
Set given Netmera SDK API key. Calling this method with a valid API key will effectively start communication with Netmera servers. Netmera will store any operation until it has an API key. Setting API key to null or empty string will stop all network operations, and all pending operations will be stored until a valid API key is set again.

**Kind**: static property of [<code>Netmera</code>](#Netmera)  
**Access**: public  
**Properties**

| Type |
| --- |
| <code>string</code> | 

<a name="Netmera.turnOffSendingEvent"></a>

### Netmera.turnOffSendingEvent
Completely turn off sending all events and user data. If a true boolean parameter is passed to this method, NetmeraUser updates and NetmeraEvents will never be sent to server.

**Kind**: static property of [<code>Netmera</code>](#Netmera)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| turnOff | <code>boolean</code> | Flag for opt-out user data and events. Default value is false. |

<a name="requestPermissionsForLocation"></a>

## .requestPermissionsForLocation()
Request location permissions from user (For Android version level 23 and above). Calling this method will trigger OS to present location permission dialog to user. After permissions are granted, location tracking and geofence monitoring will start if they have been configured on Netmera panel. You do not need to call this method if your app already has Location permission.

**Kind**: static function  
**Access**: public  
