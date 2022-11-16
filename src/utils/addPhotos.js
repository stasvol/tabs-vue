 const addPhotosFile = () => {

    document.querySelector("#photo").addEventListener("change", function () {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            console.log(reader.result)
            localStorage.setItem('images', JSON.stringify(reader.result))

        })
        reader.readAsDataURL(this.files[0])

    })
    // document.addEventListener('DOMContentLoaded', () => {
        const imageUrl = JSON.parse(localStorage.getItem('images'))
        if (imageUrl) {
            document.querySelector('#img').setAttribute('src', imageUrl)
        }
     console.log(imageUrl)
    // })
}

 export default addPhotosFile
//
//
//
//  // < input type = "file" id="photo" />
//  // < img id = "img" src = "" alt = "images" />