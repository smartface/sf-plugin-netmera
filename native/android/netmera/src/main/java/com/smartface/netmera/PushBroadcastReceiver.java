package com.smartface.netmera;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.netmera.NetmeraPushBroadcastReceiver;
import com.netmera.NetmeraPushObject;

public class PushBroadcastReceiver extends NetmeraPushBroadcastReceiver {
    private static OnPushListener onPushEvents;

    public static void setOnPushListener(OnPushListener events) {
        onPushEvents = events;
    }

    @Override
    protected void onPushRegister(Context context, String gcmSenderId, String pushToken) {
        if (onPushEvents != null)
            onPushEvents.onPushRegister(gcmSenderId, pushToken);
    }

    @Override
    protected void onPushReceive(Context context, Bundle bundle, @Nullable NetmeraPushObject netmeraPushObject) {
        if (onPushEvents != null)
            onPushEvents.onPushReceive(JSONUtil.bundleToJson(bundle).toString());
    }

    @Override
    protected void onPushOpen(Context context, Bundle bundle, NetmeraPushObject netmeraPushObject) {
        if (onPushEvents != null)
            onPushEvents.onPushOpen(JSONUtil.bundleToJson(bundle).toString());
    }

    @Override
    protected void onPushDismiss(Context context, Bundle bundle, NetmeraPushObject netmeraPushObject) {
        if (onPushEvents != null)
            onPushEvents.onPushDismiss(JSONUtil.bundleToJson(bundle).toString());
    }

    @Override
    protected void onPushButtonClicked(Context context, Bundle bundle, NetmeraPushObject netmeraPushObject) {
        if (onPushEvents != null)
            onPushEvents.onPushButtonClicked(JSONUtil.bundleToJson(bundle).toString());
    }

    interface OnPushListener {
        void onPushRegister(String senderId, String pushToken);

        void onPushReceive(String data);

        void onPushOpen(String data);

        void onPushDismiss(String data);

        void onPushButtonClicked(String data);
    }
}
