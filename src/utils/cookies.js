import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token' 
const UserKey = 'Admin-User'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  Cookies.set(TokenKey, token); 
  return
} 
export function removeToken() { 
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
  if (Cookies.get(UserKey)) {
    return JSON.parse(Cookies.get(UserKey))
  } 
}

export function setUserInfo(info) {
  return Cookies.set(UserKey, JSON.stringify(info))
}

export function removeUserInfo() {
  return Cookies.remove(UserKey)
} 

export function getAccount() {
  try {
    const info = getUserInfo()
    return info.account
  } catch (err) {
    return ''
  }
}

export function getName() {
  try {
    const info = getUserInfo()
    return info.name
  } catch (err) {
    return ''
  }
}
 
