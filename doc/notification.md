## Classes

<dl>
<dt><a href="#Notifications">Notifications</a></dt>
<dd></dd>
</dl>

<a name="Notifications"></a>

## Notifications
**Kind**: global class  
**Access**: public  
<a name="new_Notifications_new"></a>

### new Notifications()
Notifications is an class to be used for listening notification events.

<a name="onPushRegister"></a>

## .onPushRegister()
Called when push registration is completed.

**Kind**: static function  
**Access**: public  
**Params**: <code>string</code> senderId - A String for which pushToken has been retrieved.  
**Params**: <code>string</code> token - A String uniquely identifying the device for sending push message.  
<a name="onPushReceive"></a>

## .onPushReceive()
Called when a push message is received. If message comes from Netmera NetmeraPushObject will be non-null and a notification will be shown by default. However, if message doesn't come from Netmera, NetmeraPushObject will be null to indicate it is not a Netmera message and data of received message will be served via bundle parameter.

**Kind**: static function  
**Access**: public  
**Params**: <code>object</code> data - containing the data of the current push message.  
<a name="onPushOpen"></a>

## .onPushOpen()
Called when the push notification is opened by the user.

**Kind**: static function  
**Access**: public  
**Params**: <code>object</code>  data - containing the data of the current push message.  
<a name="onPushDismiss"></a>

## .onPushDismiss()
Called when the push notification is dismissed by the user.

**Kind**: static function  
**Access**: public  
**Params**: <code>object</code> data - containing the data of the current push message.  
<a name="onPushButtonClicked"></a>

## .onPushButtonClicked()
Called when any of notification button is clicked.

**Kind**: static function  
**Access**: public  
**Params**: <code>object</code> data - containing the data of the current push message.  
