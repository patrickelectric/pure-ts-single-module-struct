import { POWER_SENSE_MODULE } from '../hardware/power_sense'

export const BASE_BLUEROV = {
  ...POWER_SENSE_MODULE,
  AHRS_ORIENTATION: 16,
  BRD_RTC_TYPES: 3,
  MNT_RC_IN_TILT: 8,
  MNT_TYPE: 1,
  SERIAL0_PROTOCOL: 2, // MAVLink2
}