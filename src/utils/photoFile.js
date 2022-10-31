

const photoFile = (selector) => {

    const input = document.querySelector(selector)
    const buttonOpen = document.createElement('button')
    buttonOpen.textContent = 'Open '
    buttonOpen.classList.add('btnFile')
    input.insertAdjacentElement('afterend', buttonOpen)
    const triggerInput = () => input.click()
    buttonOpen.addEventListener('click',triggerInput)
    console.log(input)

     document.querySelector(selector).addEventListener("change", function (evt) {

        const reader = new FileReader();
        const file = evt.target.files[0]
        // const file = Array.from(this.files[0])

        console.log(file)


        reader.addEventListener('load', () => {
            document.getElementById("imgFile")?.setAttribute("src", reader.result)

            sessionStorage.setItem('imagesKey', reader.result)

        })
        reader.readAsDataURL(file)
        // reader.onload = function () {
        //   const imageUrl = localStorage.getItem('imagesKey')
        //   if (imageUrl) {
        //     document.getElementById("imgFile")?.setAttribute("src", imageUrl)
        //   }
        // }

    })

    const imageUrl = sessionStorage.getItem('imagesKey')

    if (imageUrl) {
        document.getElementById("imgFile").setAttribute("src", imageUrl)

    }
}

export default photoFile