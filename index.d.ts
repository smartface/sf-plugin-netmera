declare class Netmera {

    static init(senderId: String, sdkApiKey: String);

    static requestPermissionsForLocation();

    static set pushEnabled();

    static get pushEnabled(enabled: Boolean);

    static set popupPresentationEnabled(enabled: Boolean);

    static set loggingEnabled(enabled: Boolean);

    static set apiKey(apiKey: String);

    static set turnOffSendingEvent(turnOff: Boolean);
}
export = Netmera;
