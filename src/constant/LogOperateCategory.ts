'use strict';

import { LogOperate } from "./LogOperate";

export let LogOperateCategory = {
  LOCK: [
    LogOperate.OPERATE_BLE_LOCK,
    LogOperate.DOOR_SENSOR_LOCK,
    LogOperate.FR_LOCK,
    LogOperate.PASSCODE_LOCK,
    LogOperate.IC_LOCK,
    LogOperate.OPERATE_KEY_LOCK,
    LogOperate.AUTO_LOCK,
    LogOperate.HASH_LOCK,

  ],
  UNLOCK: [
    LogOperate.OPERATE_TYPE_MOBILE_UNLOCK,
    LogOperate.OPERATE_TYPE_KEYBOARD_PASSWORD_UNLOCK,
    LogOperate.OPERATE_TYPE_IC_UNLOCK_SUCCEED,
    LogOperate.OPERATE_TYPE_BONG_UNLOCK_SUCCEED,
    LogOperate.OPERATE_TYPE_FR_UNLOCK_SUCCEED,
    LogOperate.OPERATE_KEY_UNLOCK,
    LogOperate.GATEWAY_UNLOCK,
    LogOperate.ILLAGEL_UNLOCK,
    LogOperate.DOOR_SENSOR_UNLOCK,
  ],
  FAILED: [
    LogOperate.OPERATE_TYPE_FR_UNLOCK_FAILED,
    LogOperate.OPERATE_TYPE_IC_UNLOCK_FAILED,
    LogOperate.PASSCODE_UNLOCK_FAILED_LOCK_REVERSE,
    LogOperate.IC_UNLOCK_FAILED_LOCK_REVERSE,
    LogOperate.FR_UNLOCK_FAILED_LOCK_REVERSE,
    LogOperate.APP_UNLOCK_FAILED_LOCK_REVERSE
  ],
  IC: [
    LogOperate.OPERATE_TYPE_ADD_IC,
    LogOperate.OPERATE_TYPE_IC_UNLOCK_SUCCEED,
    LogOperate.OPERATE_TYPE_DELETE_IC_SUCCEED,
    LogOperate.OPERATE_TYPE_IC_UNLOCK_FAILED
  ],
  FR: [
    LogOperate.OPERATE_TYPE_FR_UNLOCK_SUCCEED,
    LogOperate.OPERATE_TYPE_ADD_FR,
    LogOperate.OPERATE_TYPE_FR_UNLOCK_FAILED,
    LogOperate.OPERATE_TYPE_DELETE_FR_SUCCEED,
  ]
}