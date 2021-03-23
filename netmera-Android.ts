/*globals requireClass */

import AndroidConfig from "sf-core/util/Android/androidconfig"
//@ts-ignore
const NativeNetmera = requireClass("com.netmera.Netmera");

export default class Netmera {
    private static _popupPresentationEnabled: Boolean = true;
    private static _loggingEnabled: Boolean = false;

    static init(senderId: String, sdkApiKey: String) {
        NativeNetmera.init(AndroidConfig.activity, senderId, sdkApiKey);
    }

    static requestPermissionsForLocation(){
        NativeNetmera.requestPermissionsForLocation();
    }

    static get pushEnabled() {
        return NativeNetmera.isPushEnabled();
    }

    static set pushEnabled(enabled: Boolean) {
        if (enabled)
            NativeNetmera.enablePush();
        else
            NativeNetmera.disablePush();
    }

    static get popupPresentationEnabled() {
        return this._popupPresentationEnabled;
    }

    static set popupPresentationEnabled(enabled: Boolean) {
        this._popupPresentationEnabled = enabled;
        if (enabled)
            NativeNetmera.enablePopupPresentation()
        else
            NativeNetmera.disablePopupPresentation();
    }

    static get loggingEnabled() {
        return this._loggingEnabled;
    }

    static set loggingEnabled(enabled: Boolean) {
        this._loggingEnabled = enabled;
        NativeNetmera.logging(enabled);
    }

    static set apiKey(apiKey: String) {
        NativeNetmera.setApiKey(apiKey);
    }

    static set turnOffSendingEvent(turnOff: Boolean) {
        NativeNetmera.turnOffSendingEventAndUserUpdate(turnOff);
    }

    //add parameter with type
    static sendEvent(): void {
        NativeNetmera.sendEvent();
    }
}

