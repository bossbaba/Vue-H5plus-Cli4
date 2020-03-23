/**
 * getCurrentAcceleration: 获取当前设备的加速度信息
 * watchAcceleration: 监听设备加速度变化信息
 * clearWatch: 关闭监听设备加速度信息
 */

/**
 * 获取当前设备的加速度信息
 * @param {function} 
 *         scallback 成功回调函数 返回值为设备三个方向上的加速度信息
 *          ecallback 失败回调函数 获取设备加速度信息失败回调函数
 * @return {void}
 */
function vhgetCurrentAcceleration(scallback, ecallback) {
  plus.accelerometer.getCurrentAcceleration(scallback, ecallback)
}

/**
 * 监听设备加速度变化信息
 * @param {function} 
 *         scallback 成功回调函数 返回值为设备三个方向上的加速度信息
 *          ecallback 失败回调函数 获取设备加速度信息失败回调函数
 * @param {object} frequency-更新加速度信息间隔时间  监听设备加速度信息的参数，如更新数据的频率等。
 * @return {id} 设备id
 */
function vhwatchAcceleration(scallback, ecallback,options) {
  return plus.accelerometer.watchAcceleration(scallback, ecallback,options)
}

/**
 * 关闭监听设备加速度信息
 * @param {watchId} 设备id
 * @return {void}
 */
function vhclearWatch(watchId) {
    plus.accelerometer.clearWatch( watchId );
}

export default function install (Vue){
    Vue.prototype.vhgetCurrentAcceleration = vhgetCurrentAcceleration
    Vue.prototype.vhwatchAcceleration = vhwatchAcceleration
    Vue.prototype.vhclearWatch = vhclearWatch
}