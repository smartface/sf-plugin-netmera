const AndroidConfig = require("sf-core/util/Android/androidconfig");
const NativeNetmera = requireClass("com.netmera.Netmera");

class Netmera {

    static init(senderId, sdkApiKey) {
        if (sdkApiKey)
            NativeNetmera.init(AndroidConfig.activity, senderId, sdkApiKey);
        else
            NativeNetmera.init(AndroidConfig.activity, senderId);
    }

    static requestPermissionsForLocation() {
        NativeNetmera.requestPermissionsForLocation();
    }

    static get pushEnabled() {
        return NativeNetmera.isPushEnabled();
    }

    static set pushEnabled(enabled) {
        if (enabled)
            NativeNetmera.enablePush();
        else
            NativeNetmera.disablePush();
    } 


    static set popupPresentationEnabled(enabled) {
        if (enabled)
            NativeNetmera.enablePopupPresentation()
        else
            NativeNetmera.disablePopupPresentation();
    }


    static set loggingEnabled(enabled) {
        NativeNetmera.logging(enabled);
    }

    static set apiKey(apiKey) {
        NativeNetmera.setApiKey(apiKey);
    }

    static set turnOffSendingEvent(turnOff) {
        NativeNetmera.turnOffSendingEventAndUserUpdate(turnOff);
    }
}
module.exports = Netmera;
