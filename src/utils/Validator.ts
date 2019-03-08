const phoneNumberRegx = /^[1-9][0-9]{10}$/
const verificationCodeRegx = /^[0-9]{4}$/
// 校验手机号
const validPhoneNumber = (phoneNumber: string) => {
  return phoneNumberRegx.test(phoneNumber)
}
// 校验验证码
const validVerificationCode = (code: string) => {
  return verificationCodeRegx.test(code)
}
export { validPhoneNumber, validVerificationCode }
