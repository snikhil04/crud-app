package com.student.app.utils;

import java.util.UUID;

public final class CommonUtils {

    public static String generateUUID() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
