const linkShortener = require('./models/list-shortener')
let transferredCode = ''

function transferredCodeGenerator() {
  codeGenerator()
  
  // 檢查當前產出的 code 是否已經存在於資料庫中，if yes -> 重新跑一次函式
  while (checkDuplicates(transferredCode)) {
    codeGenerator()
  }

  return transferredCode
}

function codeGenerator() {
  const codePool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  
  for (let i = 0; i < 5; i++) {
    transferredCode += codePool[Math.floor(Math.random() * codePool.length)]
  }
}

function checkDuplicates(code) {
  linkShortener.findOne({ transferredCode: code })
    .then( linkSet => {
      if (linkSet) {
        return true
      } 
      return false
    })
    .catch( error => console.log(error) )
}

module.exports = transferredCodeGenerator