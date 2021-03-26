package com.smartface;

import androidx.multidex.MultiDexApplication;

import com.netmera.Netmera;
import com.smartface.netmera.R;

public class NetmeraApplication extends MultiDexApplication {


    public NetmeraApplication() {
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Netmera.init(this, getString(R.string.gcm_defaultSenderId));
    }
}
