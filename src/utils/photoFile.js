function formatBytes(bytes, decimals = 2) {
    if (!bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

const photoFile = (selector, options = {}) => {
    let files =[]
    const input = document.querySelector(selector)
    // const buttonOpen = document.createElement('button')
    // buttonOpen.textContent = 'Open '
    // buttonOpen.classList.add('btnFile')
    // input.insertAdjacentElement('beforebegin', buttonOpen)
    //
    // const triggerInput = () => input.click()
    // buttonOpen.addEventListener('click', triggerInput)

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    input.insertAdjacentElement('afterend', wrapper)

    if (options.multi) {
        input.setAttribute('multiple', true)
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }


    const inputChanges = (evt) => {

        if (!evt.target.files.length) {
            return
        }

        files = Array.from(evt.target.files)
        wrapper.innerHTML = ''
        files.forEach(file => {
            if (!file.type.match('image')) {
                return
            }
            const reader = new FileReader()

            reader.onload = (ev) => {
                const url = ev.target.result

                sessionStorage.setItem('imagesKey', url)

                // input.insertAdjacentHTML('afterend', `<div class="photoSize"><img src="${ev.target.result}" class="photo"/></div>`)

                wrapper.insertAdjacentHTML('afterbegin', `
                 
                <div class="wrapper-image">
                 <div class="wrapper-remove" data-name="${file.name}">&times;</div>
                 <img src="${url}"  alt="${file.name}"/>
                 <div class="wrapper-info">
                    <span>${file.name}</span>
                    <span>${formatBytes(file.size)}</span>
                 </div>
                </div>
                
             `)


            }

            reader.readAsDataURL(file)

        })




        }

    const imageUrl = sessionStorage.getItem('imagesKey')

    console.log(imageUrl)

    if (imageUrl) {
        wrapper.insertAdjacentHTML('afterbegin', `
                 
                <div class="wrapper-image">
               
                 <img src="${imageUrl}" />

                </div>
                
             `)
    }


    const removePhotoFile=(e)=> {
        if(!e.target.dataset) return
        const {name} = e.target.dataset
        files = files.filter(file => file.name !== name)
        const block = wrapper
            .querySelector(`[data-name= "${name}"]`)
            .closest('.wrapper-image')
        block.classList.add('removing')
        setTimeout(() => block.remove(),300)
        // block.remove()
    }

    input.addEventListener('change', inputChanges)
    wrapper.addEventListener('click', removePhotoFile)


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