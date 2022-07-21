import {computed, ref} from "vue";

export default function usePhotos ()  {

    const maxSize = 5
    let photos = ref([])
    const input = ref()
    // const photosValue = []

    const onFileSelected =({target}) => {
        console.log(target.files[0])

        if (target.files) {
          photos.value =  [...photos.value, ...Array.from(target.files)]

        }
        if(input.value) {
            input.value.value = ''
        }

        console.log(photos)

    };

    console.log(photos.value)

    const  getSrc = (photo) => URL.createObjectURL(photo)
    const needUpload = computed(() =>photos.value?.length <= 5)
    const removePhoto =(index) => photos.value =  photos.value.filter((photo, i) => i != index)



    return {maxSize, photos, input, onFileSelected, getSrc, needUpload, removePhoto}

}

