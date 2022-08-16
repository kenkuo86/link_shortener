const copyBtn = document.querySelector('#copyBtn')

copyBtn.addEventListener('click', function copyToClipBoard() {
  const content = document.querySelector('#result')
  const link = content.innerText
  
  navigator.clipboard.writeText(link)
} )