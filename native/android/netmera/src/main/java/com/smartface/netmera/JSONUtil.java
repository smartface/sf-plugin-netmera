package com.smartface.netmera;

import android.os.Bundle;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Set;

public class JSONUtil {

    public static JSONObject bundleToJson(Bundle extras) {
        JSONObject json = new JSONObject();
        Set<String> keys = extras.keySet();
        for (String key : keys) {
            try {
                Object wrappedObject = JSONObject.wrap(extras.get(key));
                json.put(key, getValueAs(wrappedObject));
            } catch(JSONException e) {
                Log.e("SMF", "JSONUtil bundleToJson: " + e);
            }
        }
        return json;
    }

    public static Object getValueAs(Object jsonValue) {

        Object json = null;
        if (jsonValue instanceof String) {
            json = getValueAsObject((String) jsonValue);
            if (json == null) {
                json = getValueAsArray((String) jsonValue);
            }
        }
        return json == null ? jsonValue : json;
    }

    public static JSONObject getValueAsObject(String jsonValue) {
        try {
            JSONObject jsonObject = new JSONObject(jsonValue);
            return jsonObject;
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONArray getValueAsArray(String jsonValue) {
        try {
            JSONArray jsonArray = new JSONArray(jsonValue);
            return jsonArray;
        } catch (JSONException e) {
            return null;
        }
    }
}
