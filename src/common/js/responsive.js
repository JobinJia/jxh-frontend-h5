/**
 * 手机字体缩放
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
