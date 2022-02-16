function isNullTo(string, option) {
  var a = ''
  if (option) a = option
  return (typeof (string) === 'undefined' || string === null ? a : string)
}
exports.isNullTo = isNullTo

function getIsValid(object, target, type) {
  return getIsValidLocal(object, target, type)
}
exports.getIsValid = getIsValid

function getTransLang (param) {
  let app = window.getApp
  // console.log(app)
  let result = getIsValidLocal(param) ? param : ''
  // result = Array.isArray(result) ? result : (result.trim().slice(0, 2) === '$t' ? window.getApp.$t(result.trim().slice(result.trim().search(/\$t/g) + 3, result.trim().search(/\)/g))) : result)
  if (typeof (app) !== 'undefined') result = Array.isArray(result) || typeof (result) === 'object' || typeof (result) === 'boolean' ? result : window.getApp.$t(String(result).trim())
  return result
}
exports.getTransLang = getTransLang

function getBoolean (params) {
  let result = false
  if (!(Array.isArray(params) || typeof (params) === 'boolean')) result = false
  let array = Array.isArray(params) ? params : [params]
  if (array.findIndex(x => { return typeof (x) === 'boolean' && x === true }) > -1) result = true
  else result = false
  // console.log('getBoolean: ', params, result)
  return result
}

exports.getBoolean = getBoolean

function getIsValidLocal (object, target, type) {
  let result = false
  if (typeof (object) === 'undefined' || object === null || object === '') return false // object는 반드시 있어야 함.
  if (typeof (target) === 'undefined' || target === '' || target === null) { // target 없을때
    if (typeof (type) === 'undefined' || type === '' || type === null) { // object validation type 없을때
      result = true
    } else { // object validation type 있을때
      // eslint-disable-next-line valid-typeof
      result = typeof (object) === type
    }
  } else { // target 있을때
    const targetValue = object[target]
    if (typeof (type) === 'undefined' || type === '' || type === null) { // object[target] validation type 없을때
      result = (typeof (targetValue) !== 'undefined' && targetValue !== null && targetValue !== '')
    } else { // object[target] validation type 있을때
      // eslint-disable-next-line valid-typeof
      result = typeof (target) === type && target !== null
    }
  }
  return result
}