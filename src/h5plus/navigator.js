/*
function  checkPermission: 检查运行环境的权限
function  closeSplashscreen: 关闭应用启动界面
function  hasNotchInScreen: 查询设备是否为刘海屏
function  hasSplashscreen: 查询应用启动界面是否已关闭
function  updateSplashscreen: 更新程序启动界面
function  createShortcut: 创建应用快捷方式
function  hasShortcut: 查询是否存在应用快捷方式
function  isBackground: 判断当前应用是否切换到后台
function  isFullscreen: 判断应用当前是否全屏模式显示
function  isLogs: 判断应用当前是否输出日志
function  setFullscreen: 设置应用是否全屏显示
function  setLogs: 设置应用是否输出日志
function  setStatusBarBackground: 设置系统状态栏背景颜色
function  getStatusBarBackground: 获取系统状态栏背景颜色
function  setStatusBarStyle: 设置系统状态栏样式
function  getStatusBarStyle: 获取系统状态栏样式
function  getStatusbarHeight: 获取系统状态栏高度
function  isImmersedStatusbar: 判断当前是否为沉浸式状态栏模式
function  getOrientation: 获取应用的横竖屏状态
*/
/**
* 需要开启5+模块
{
    "permissions":{
        "Navigator": {
            "description": "浏览器信息"
        }
    }
}
*/

/**
 * 向系统检查当前程序的权限状态，不触发权限相对应的功能API的调用。
 * @param {*} permission 要检查的权限名称
 * @return {String} 返回权限是否被授权的状态
 */
function vhcheckPermission(permission) {
  return plus.navigator.checkPermission(permission)
}

/**
 * 关闭启动页
 * @param {null} 
 * @return {void} 
 */
function vhcloseSplashscreen() {
  plus.navigator.closeSplashscreen()
}

/**
 * 是否关闭启动页
 * @param {null} 
 * @return {Boolean} 返回布尔值true是未关闭
 */
function vhhasSplashscreen() {
  return plus.navigator.hasSplashscreen()
}


/**
 * 查询设备是否是刘海屏
 * @param {null}
 * @return {Boolean} 返回布尔值true是刘海
 */
function vhhasNotchInScreen() {
  return plus.navigator.hasNotchInScreen()
}

/**
 * 更新程序启动界面
 * 支持本地路径和网络路径
 * @param {object} 
 *        options:{
 *          imageIsNetwork:(Boolean 类型) 图片是否是网络图片
 *          image: (String 类型 )启动界面的图片路径,图片必须为png格式。
 *          autoclose: (Boolean 类型 )是否自动关闭启动界面
 *          autoclose_w2a: (Boolean 类型 )是否自动关闭启动界面（WAP2APP应用）
 *          delay: (Number 类型 )启动界面延时关闭时间
 *          delay_w2a: (Number 类型 )启动界面延时关闭时间（WAP2APP应用）
 * }
 * @return {void} 
 */
function vhupdateSplashscreen(options) {
  if (options.imageIsNetwork) {
    options.image = getsplashFromNetwork(options.image)
  }

  function getsplashFromNetwork() {
    return ''
    // TODO 下载任务，如何使用的是网络图片需要下载到本地
    // 返回值必须是一个路径字符串
  }
  plus.navigator.updateSplashscreen({
    image: options.image,
    autoclose: options.autoclose || false,
    autoclose_w2a: options.autoclose_w2a || false,
    delay: options.autoclose === true ? options.delay : 1000,
    delay_w2a: options.autoclose_w2a === true ? options.delay_w2a : 1000
  });
}

/**
 * 创建app快捷方式
 * @param {object} 
 * {
 *     name:options.name || "App",
 *     icon:options.icon || "../assets/logo.png",
 *     toast:options.toast || "app快捷方式创建完成",
 *     extra:options.extra || {},
 *     force:false
 * }
 * @param {fucntion} 成功回调函数
 * @return {void}
 */

function vhcreateShortcut(options, callback) {
  plus.navigator.createShortcut({
    name: options.name || "App",
    icon: options.icon || "../assets/logo.png",
    toast: options.toast || "app快捷方式创建完成",
    extra: options.extra || {},
    force: false
  }, callback)
}


/**
 * 是否创建app快捷方式
 * @param {object} 
 * @param {fucntion} 成功回调函数
 * @return {void}
 */

function vhhasShortcut(options, callback) {
  plus.navigator.hasShortcut(options, callback)
}


/**
 * 判断应用是否进入后台
 * @param {void} 
 * @return {Boolean}  应用切换到后台时返回true，否则返回false。
 */

function vhisBackground() {
  return plus.navigator.isBackground();
}

/**
 * 判断应用是否全屏显示
 * @param {void} 
 * @return {Boolean}  应用全屏模式显示时返回true，否则返回false。
 */

function vhisFullscreen() {
  return plus.navigator.isFullscreen();
}

/**
 * 判断应用是否输出日志
 * @param {void} 
 * @return {Boolean}  应用输出日志时返回true，否则返回false。
 */

function vhisLogs() {
  return plus.navigator.isLogs();
}

/**
 * 设置应用是否全屏显示
 * @param {Boolean}  
 * @return {void}  
 */

function vhsetFullscreen(fullscreen) {
  plus.navigator.setFullscreen(fullscreen);
}

/**
 * 设置应用是否输出日志
 * @param {Boolean}  
 * @return {void}  
 */

function vhsetLogs(log) {
  plus.navigator.setLogs(log);
}

/**
 * 设置应用系统状态栏背景颜色
 * @param {String}  #RRGGBB
 * @return {void}  
 */

function vhsetStatusBarBackground(color) {
  plus.navigator.setStatusBarBackground(color);
}

/**
 * 获取系统状态栏背景颜色
 * @param {void}  
 * @return {String}  
 */

function vhgetStatusBarBackground(color) {
  return plus.navigator.getStatusBarBackground(color);
}

/**
 * 设置系统状态栏样式
 * @param {String}  
 * 可取值： 
 * "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色；
 * "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色； 
 * @return {void}  
 */

function vhsetStatusBarStyle(style) {
  plus.navigator.setStatusBarStyle(style);
}

/**
 * 获取系统状态栏样式
 * @param {void}  
 * @return {String} 
 * "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色；
 * "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；  
 */

function vhgetStatusBarStyle() {
  return plus.navigator.getStatusBarStyle();
}

/**
 * 获取系统状态栏高度
 * @param {void}  
 * @return {Number} 
 */

function vhgetStatusbarHeight() {
  return plus.navigator.getStatusbarHeight() * plus.screen.scale;
}

/**
 *判断当前是否为沉浸式状态栏模式
 * @param {void}  
 * @return {Boolean} 
 */

function vhisImmersedStatusbar() {
  return plus.navigator.isImmersedStatusbar();
}

/**
 * 获取系统状态栏高度
 * @param {void}  
 * @return {Number} 
 * 屏幕方向数值： 0 - 竖屏； 
 *              90 - 横屏，HOME键在右； 
 *              180 - 反向竖屏；	
 *              -90 - 反向横屏，HOME'键在左。
 */

function vhgetOrientation() {
  return plus.navigator.getOrientation();
}


export default  function install(Vue){
  Vue.prototype.vhcheckPermission=vhcheckPermission,
  Vue.prototype.vhcloseSplashscreen=vhcloseSplashscreen,
  Vue.prototype.vhhasNotchInScreen=vhhasNotchInScreen,
  Vue.prototype.vhhasSplashscreen=vhhasSplashscreen,
  Vue.prototype.vhupdateSplashscreen=vhupdateSplashscreen,
  Vue.prototype.vhcreateShortcut=vhcreateShortcut,
  Vue.prototype.vhhasShortcut=vhhasShortcut,
  Vue.prototype.vhisBackground=vhisBackground,
  Vue.prototype.vhisFullscreen=vhisFullscreen,
  Vue.prototype.vhisLogs=vhisLogs,
  Vue.prototype.vhsetFullscreen=vhsetFullscreen,
  Vue.prototype.vhsetLogs=vhsetLogs,
  Vue.prototype.vhsetStatusBarBackground=vhsetStatusBarBackground,
  Vue.prototype.vhgetStatusBarBackground=vhgetStatusBarBackground,
  Vue.prototype.vhsetStatusBarStyle=vhsetStatusBarStyle,
  Vue.prototype.vhgetStatusBarStyle=vhgetStatusBarStyle,
  Vue.prototype.vhgetStatusbarHeight=vhgetStatusbarHeight,
  Vue.prototype.vhisImmersedStatusbar=vhisImmersedStatusbar,
  Vue.prototype.vhgetOrientation=vhgetOrientation
}
