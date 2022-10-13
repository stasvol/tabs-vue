 const addPhotosFile = () => {

    document.querySelector("#photo").addEventListener("change", function () {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            console.log(reader.result)
            localStorage.setItem('images', reader.result)

        })
        reader.readAsDataURL(this.files[0])

    })
    document.addEventListener('DOMContentLoaded', () => {
        const imageUrl = localStorage.getItem('image')
        if (imageUrl) {
            document.querySelector('#img').setAttribute('src', imageUrl)
        }
    })
}

 export default addPhotosFile



 // < input type = "file" id="photo" />
 // < img id = "img" src = "" alt = "images" />