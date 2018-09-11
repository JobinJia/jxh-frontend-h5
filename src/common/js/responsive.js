/**
 * 手机字体缩放
 * var e = 750 如果设计稿上是640, 则改750为640,改完之后
 * 在页面上所有的单位为rem ， 1px = 1rem
 */

!function (n, e) {
  var t = n.documentElement
  var i = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var o = function () {
    var n = t.clientWidth
    var e = 750

    n && (n >= e ? t.style.fontSize = '100px' : t.style.fontSize = 100 * (n / e) + 'px')
  }
  o(), n.addEventListener && (e.addEventListener(i, o, !1), n.addEventListener('DOMContentLoaded', o, !1))
}(document, window)
