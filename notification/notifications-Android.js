const NativePushBroadcastReceiver = requireClass("com.smartface.netmera.PushBroadcastReceiver");

let _onPushRegister, _onPushReceive,
    _onPushOpen, _onPushDismiss,
    _onPushButtonClicked;
class Notifications {

    static set onPushRegister(senderId, pushToken) {
        _onPushRegister = event;
    }

    static set onPushReceive(event) {
        _onPushReceive = event;
    }

    static set onPushOpen(event) {
        _onPushOpen = event;
    }

    static set onPushDismiss(event) {
        _onPushDismiss = event;
    }

    static set onPushButtonClicked(event) {
        _onPushButtonClicked = event;
    }
}

NativePushBroadcastReceiver.setOnPushListener(NativePushBroadcastReceiver.OnPushListener.implement(
    {
        onPushRegister: (senderId, pushToken) => {
            _onPushRegister && _onPushRegister(senderId, pushToken);
        },
        onPushReceive: (data) => {
            _onPushReceive && _onPushReceive(data);
        },
        onPushOpen: (data) => {
            _onPushOpen && _onPushOpen(data);
        },
        onPushDismiss: (data) => {
            _onPushDismiss && _onPushDismiss(data);
        },
        onPushButtonClicked: (data) => {
            _onPushButtonClicked && _onPushButtonClicked(data);
        }
    }
));

module.exports = Notifications;