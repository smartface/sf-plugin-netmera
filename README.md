# Firebase plugin from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE)

## Netmera plugin
As a plugin, this plugin only works when published. Will not perform any action with regular run-on-device scenarios.
Netmera is a mobile engagement, communication and campaigning tool that collects the data of all your users on all channels, segments and targets in real-time using these data, and sends notifications and pop-ups to the selected audience.

In order to use Netmera plugin, you must integrate this plugin to your existing Smartface project.

## Installation
Smartface Netmera plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command in terminal `(cd ~/workspace/scripts && npm i -S sf-plugin-netmera)`

## Configuration
Installation script automatically configures project.json. Please verify following records are in place.
Configuration is needed once only

### Android

***Building Android Plugin***
It is necessary to place a few files & modification in order to use netmera plugin. Follow the below steps;

**Step 1**

Download google-services.json from [Firebase console](https://console.firebase.google.com)

**Step 2**

- Place google-services.json  file  into `~/workspace/config/Android` 
- This repository contains prepared android library project under `~/Native/android` directory. 
- Finally, specify firebase plugin library to config/project.json.

```javascript
"plugins": {
  "modules": {
    "netmera": {
      "path": "plugins/Android/netmera",
      "active": true
    }
  }
},
```

**Step 3**

- Get senderID from firebase and edit `config/project.json`'s senderID ⇒ (senderID = gcm_defaultSenderId ) 

```json
"googleCloudMessaging": {
  "senderID": "${senderID}"
}
```
**Step 4**

- Add this lines to `config/Android/AndroidManifest.xml` file.
```xml

<manifest ... >

<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />


<uses-feature
      android:name="android.hardware.location"
      android:required="false" />
  <uses-feature
      android:name="android.hardware.location.gps"
      android:required="false" />
      
      

    
    <application  android:name="com.smartface.NetmeraApplication" ... >
     ...
     
        <receiver
            android:name="com.smartface.netmera.PushBroadcastReceiver"
            android:exported="false">
          <intent-filter>
            <action android:name="com.netmera.push.intent.REGISTER"/>
            <action android:name="com.netmera.push.intent.RECEIVE"/>
            <action android:name="com.netmera.push.intent.OPEN"/>
            <action android:name="com.netmera.push.intent.DISMISS"/>
            <action android:name="com.netmera.push.intent.BUTTON"/>
          </intent-filter>
        </receiver>
    
        <meta-data android:name="firebase_crashlytics_collection_enabled" android:value="false"/>
     
    </application>
</manifest>
```
NetmeraApplication is an class which is subclass of the Application. It's mandatory to define in `application`  if you are using Netmera plugin. 
**Step 5**
- Apply plugins & specify library project in dependencies.gradle which is located under `~/workspace/config/Android` folder. Such as;

```groovy
dependencies {
	implementation(project(':netmera'))
}
apply plugin:  'com.google.gms.google-services'
```
- Congrats you have just done Android configuration.

*Note:  By post-install scripts, Firebase's Android & iOS libraries/zip will be placed to appropriate paths and specify the its configuration to `config/project.json`*

### API
For each module api documentation is in separate file. Please visit [doc](./doc) folder

## Initialize
- Initialize your SDK using the following code snippet: (You must write this code in app.ts)

Netmera has to be initialized before any use.

```typescript
import Netmera from 'sf-plugin-netmera';
import Notifications from "sf-plugin-netmera/notification";

Netmera.apiKey = '***********';
Netmera.popupPresentationEnabled = true;

Notifications.onPushReceive = (e) =>{ 
    alert("Receive ", e);
}

Notifications.onPushDismiss = (e) => {
    alert("dimiss " , e);
}

Notifications.onPushOpen = (e) => {
    alert("open ", e);
}

Notifications.onPushRegister = (e) => {
    alert("register ", e);
}

Notifications.onPushButtonClicked = (e) => {
    alert("clicked ", e);
}
```

Notification events are have some restrictions while the app in background state; onPushButtonClicked & onPushOpen will be called if the action make the application run and other events won't trigger.

### Sample Page for Netmera
```typescript
import Page1Design from 'generated/pages/page1';
import componentContextPatch from "@smartface/contx/lib/smartface/componentContextPatch";
import PageTitleLayout from "components/PageTitleLayout";
import System from "sf-core/device/system";
import Netmera from "sf-plugin-netmera";

export default class Page1 extends Page1Design {
    router: any;
	constructor () {
        super();
		// Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnNext.onPress = () => {
            this.router.push("/pages/page2", { message: "Hello World!" });
        }
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(superOnShow: () => void) {
  superOnShow();
  this.headerBar.titleLayout.applyLayout();
  
  Netmera.requestPermissionsForLocation();
  Netmera.loggingEnabled = true;
}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(superOnLoad: () => void) {
    superOnLoad();
    this.headerBar.leftItemEnabled = false;
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
    if (System.OS === "Android") {
        this.headerBar.title = "";
    }
}

```


# License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
