package com.smartface.netmera;

import android.content.Context;
import android.os.AsyncTask;
import android.os.Bundle;

import android.util.Log;

import androidx.annotation.Nullable;

import com.netmera.NetmeraPushBroadcastReceiver;
import com.netmera.NetmeraPushObject;


public class PushBroadcastReceiver extends NetmeraPushBroadcastReceiver {
    private static OnPushListener onPushEvents;

    public static void setOnPushListener(OnPushListener listener) {
        onPushEvents = listener;
    }

    @Override
    protected void onPushRegister(Context context, final String gcmSenderId, final String pushToken) {
        try {
            if (onPushEvents != null)
                onPushEvents.onPushRegister(gcmSenderId, pushToken);
        } catch (Exception e) {
            Log.e("SFPushBroadcastReceiver", "Exception: ", e);
        }
    }

    @Override
    protected void onPushReceive(Context context, final Bundle bundle, @Nullable NetmeraPushObject netmeraPushObject) {
        try {
            if (onPushEvents != null)
                onPushEvents.onPushReceive(JSONUtil.bundleToJson(bundle).toString());
        } catch (Exception e) {
            Log.e("SFPushBroadcastReceiver", "Exception: ", e);
        }
    }

    @Override
    protected void onPushOpen(Context context, final Bundle bundle, NetmeraPushObject netmeraPushObject) {

        Log.d("SFPushBroadcastReceiver", " onPushOpen onPushEvents " + onPushEvents);


        final PendingResult pendingResult = goAsync();
        new Task(pendingResult, new Callback() {
            @Override
            public void runOnUiThread() {
                try {
                    if (onPushEvents != null)
                        onPushEvents.onPushOpen(JSONUtil.bundleToJson(bundle).toString());
                } catch (Exception e) {
                    Log.e("SFPushBroadcastReceiver", "Exception: ", e);
                }
            }
        }).execute();
    }

    @Override
    protected void onPushDismiss(Context context, final Bundle bundle, NetmeraPushObject netmeraPushObject) {
        try {
            if (onPushEvents != null)
                onPushEvents.onPushDismiss(JSONUtil.bundleToJson(bundle).toString());
        } catch (Exception e) {
            Log.e("SFPushBroadcastReceiver", "Exception: ", e);
        }
    }


    @Override
    protected void onPushButtonClicked(final Context context, final Bundle bundle, NetmeraPushObject netmeraPushObject) {

        Log.d("SFPushBroadcastReceiver", " onPushButtonClicked onPushEvents " + onPushEvents);

        final PendingResult pendingResult = goAsync();
        new Task(pendingResult, new Callback() {
            @Override
            public void runOnUiThread() {
                try {
                    if (onPushEvents != null)
                        onPushEvents.onPushButtonClicked(JSONUtil.bundleToJson(bundle).toString());
                } catch (Exception e) {
                    Log.e("SFPushBroadcastReceiver", "Exception: ", e);
                }
            }
        }).execute();
    }

    interface OnPushListener {
        void onPushRegister(String senderId, String pushToken);

        void onPushReceive(String data);

        void onPushOpen(String data);

        void onPushDismiss(String data);

        void onPushButtonClicked(String data);
    }

    interface Callback {
        void runOnUiThread();
    }

    class Task extends AsyncTask<Void, Void, Void> {
        private PendingResult pendingResult;
        private Callback callback;
        private int DEFAULT_AWAIT_MS = 500;
        private int DEFAULT_AWAIT_TIMEOUT_MS = 9000;


        Task(PendingResult pendingResult, Callback callback) {
            this.pendingResult = pendingResult;
            this.callback = callback;
        }

        @Override
        protected Void doInBackground(Void... voids) {

            long currentMs = System.currentTimeMillis();
            while (onPushEvents == null && (System.currentTimeMillis() - currentMs) < DEFAULT_AWAIT_TIMEOUT_MS) {
                Log.d("SFPushBroadcastReceiver", " kalan --> " + (System.currentTimeMillis() - currentMs) + " onPushEvents " + onPushEvents);
                try {
                    Thread.sleep(DEFAULT_AWAIT_MS);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            return null;
        }

        @Override
        protected void onPostExecute(Void aVoid) {
            super.onPostExecute(aVoid);

            callback.runOnUiThread();
            pendingResult.finish();
        }
    }
}
