function transferredCodeGenerator() {
  const codePool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let transferredCode = ''

  for (let i = 0; i < 5; i++) {
    transferredCode += codePool[Math.floor(Math.random() * codePool.length)]
  }

  return transferredCode
}

module.exports = transferredCodeGenerator