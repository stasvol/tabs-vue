

const photoFile = (selector, options = {}) => {

    const input = document.querySelector(selector)
    const buttonOpen = document.createElement('button')
    buttonOpen.textContent = 'Open '
    buttonOpen.classList.add('btnFile')

    if (options.multi) {
        input.setAttribute('multiple',true)
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept',options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', buttonOpen)

    const triggerInput = () => input.click()

    const changeHandler = (evt) => {

       if (!evt.target.files.length){
           return
       }

       const files = Array.from(evt.target.files)

       files.forEach(file => {
           if (!file.type.match('image')){
               return
           }
           const reader = new FileReader()

           reader.onload = (ev) => {
              input.insertAdjacentHTML('beforebegin',`<img src="${ev.target.result}" class="photo"/>`)

           }

           reader.readAsDataURL(file)

         })
    }
    buttonOpen.addEventListener('click',triggerInput)
    input.addEventListener('change', changeHandler)


    //  document.querySelector(selector).addEventListener("change", function (evt) {
    //
    //     const reader = new FileReader();
    //     const file = evt.target.files[0]
    //     // const file = Array.from(this.files[0])
    //
    //      reader.addEventListener('load', () => {
    //         document.getElementById("imgFile")?.setAttribute("src", reader.result)
    //
    //         sessionStorage.setItem('imagesKey', reader.result)
    //
    //     })
    //     reader.readAsDataURL(file)
    //     // reader.onload = function () {
    //     //   const imageUrl = localStorage.getItem('imagesKey')
    //     //   if (imageUrl) {
    //     //     document.getElementById("imgFile")?.setAttribute("src", imageUrl)
    //     //   }
    //     // }
    //
    // })
    //
    // const imageUrl = sessionStorage.getItem('imagesKey')
    //
    // if (imageUrl) {
    //     document.getElementById("imgFile").setAttribute("src", imageUrl)
    //
    // }
}

export default photoFile