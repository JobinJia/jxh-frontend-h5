/**
 * 其它的一些常见的方法
 */

// "use strict"

// 检查手机是否合法
export const testPhone = phone => {
    const phonereg = /^((1[3-9]{1}[0-9]{1})+\d{8})$/
    if (!phone) {
        toast('手机号不能为空')
        return false
    } else if (!phonereg.test(phone)) {
        toast('请输入正确的手机号')
        return false
    } else {
        return true
    }
}
// 获取字符长度(汉字：2， )
export const getStrlen = str => {
    var len = 0
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i)
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++
        } else {
            len += 2
        }
    }
    return len
}

// 检查密码是否合法
export const authPassword = (str, minlen, maxlen) => {
    if (str.length >= minlen && str.length <= maxlen) {
        return /[a-zA-Z]+/.test(str) + /[0-9]+/.test(str)
    } else {
        return -1
    }
}

// 检查邮箱是否合法
export const testEmail = email => {
    const emailreg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    if (!email) {
        toast('邮箱不能为空')
        return false
    } else if (!emailreg.test(email)) {
        toast('请输入正确的邮箱')
        return false
    } else {
        return true
    }
}
