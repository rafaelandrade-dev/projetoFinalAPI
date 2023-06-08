const button = document.querySelector('.sobre')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')


button.addEventListener('click', () => {
    popup.style.display = 'flex'
})


popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement) //Vai verificar se pelo menos um item do array atende as condições

    if (shouldClosePopup){
        popup.style.display = 'none'
    }
   
})