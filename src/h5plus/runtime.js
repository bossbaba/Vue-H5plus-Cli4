/**
 * 安装App
 * @param {String} 安装App路径
 * @param {Boolean} 是否强制安装
 * @param {function} 安装成功回调函数
 * @param {function} 安装失败回调函数
 * @return {void}
 */

function vhInstall(downloadfilepath, force, installSuccesscb, installErrorcb) {
  plus.runtime.install(downloadfilepath, force, installSuccesscb, installErrorcb);
}

/**
 * 打开第三方App
 * @param {object} 第三方App标识信息
 * @param {function} 打开失败回调函数
 * @return {void}
 */
function vhlaunchApplication(pname, ErrorCb) {
  plus.runtime.launchApplication(pname, ErrorCb);
}

/**
 * 获取App版本名称
 * @return {String} 版本名称
 */

function vhgetVersion() {
  return plus.runtime.version
}

/**
 * 获取App版本号
 * @return {String} 版本号
 */

function vhgetVersionCode() {
  return plus.runtime.versionCode
}

/**
 * 设置快捷方式角标
 * @param {number} number 角标数字
 * @param {String} options 小米手机显示角标需要在系统消息中心显示一条通知，此参数用于设置通知的标题（title）和内容（content）。
 */

function vhsetBadgeNumber(number, options) {
  plus.runtime.setBadgeNumber(number, options)
}

/**
 * 调用第三方程序打开URL
 * @param {String} url 要打开的Url
 * @param {function} errorCB 失败回调函数
 * @param {String} identity 可选参数指定打开URL的程序名称 在iOS平台此参数被忽略，在Android平台为程序包名，如果指定的包名不存在，则打开URL地址失败。
 */

function vhAppOpenURL(url, errorCB, identity) {
  plus.runtime.openURL(url, errorCB, identity);
}

/**
 * 本App开使用webview打开url
 * @param {String} url 
 */

function vhOpenWeb(url) {
  plus.runtime.openWeb(url);
}

/**
 * 调用第三方程序打开指定的文件
 * @param {String} filepath 打开文件的路径
 * @param {Object} options 
 * {
 * pname: (String 类型 )优先使用的程序包名
 * 如果指定包名的程序已经安装，则调用其打开文件，若程序不支持打开文件则触发错误回调。 如果指定包名的程序未安装，则弹出系统支持打开此文件的列表，由用户选择程序打开。
 *
 * popover: (json 类型 )弹出系统选择程序界面指示区域
 * JSON对象，格式如{top:10;left:10;width:200;height:200;}，所有值为像素值，左上坐标相对于容器webview的位置。仅在iPad设备平台有效。
 * }
 * @param {function} errorCB 
 * @return {void}
 */

function vhAppOpenFile(filepath, options, errorCB) {
  plus.runtime.openFile(filepath, options, errorCB)
}

/**
 * 判断第三方程序是否已经存在
 * @param {Object} appInf  
 * {
 * pname: (String 类型 )第三方程序包名
 * }
 * @return {void}
 */

function vhIsApplicationExist(appInf) {
   return plus.runtime.isApplicationExist(appInf);
}

/**
 * 获取应用appid
 * @param {void}
 * @return {String} appid
 */

function vhGetAppID () {
    return plus.runtime.appid
}

/**
 * @param {void}
 * @return {void}
 */
function vhQuitApp () {
    plus.runtime.quit()
}

export default function install(Vue) {
  Vue.prototype.vhInstall = vhInstall,
    Vue.prototype.vhlaunchApplication = vhlaunchApplication,
    Vue.prototype.vhgetVersion = vhgetVersion,
    Vue.prototype.vhsetBadgeNumber = vhsetBadgeNumber,
    Vue.prototype.vhgetVersionCode = vhgetVersionCode,
    Vue.prototype.vhAppOpenURL = vhAppOpenURL,
    Vue.prototype.vhOpenWeb = vhOpenWeb,
    Vue.prototype.vhAppOpenFile = vhAppOpenFile,
    Vue.prototype.vhIsApplicationExist = vhIsApplicationExist,
    Vue.prototype.vhQuitApp = vhQuitApp
}
