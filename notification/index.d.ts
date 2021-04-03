const NativePushBroadcastReceiver = requireClass("com.smartface.netmera.PushBroadcastReceiver");

declare class Notifications {

    static set onPushRegister(senderId: String, pushToken: String): void;


    static set onPushReceive(event: (data : any) => void): void;


    static set onPushOpen(event: (data : any) => void): void;


    static set onPushDismiss(event: (data : any) => void): void;


    static set onPushButtonClicked(event: (data : any) => void): void;
}
export = Notifications;