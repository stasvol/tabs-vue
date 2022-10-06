import {computed, ref} from "vue";
import store from "@/store";

export default function usePhotos ()  {

    const maxSize = 5
    let photos = ref([])
    const input = ref()

    const onFileSelected =({target}) => {

        if (target.files) {
          photos.value =  [...photos.value, ...Array.from(target.files)]
          // localStorage.setItem('photos', photos.value)
          //   console.log(photos.value[0])
        }
        if(input.value) {
            input.value.value = ''
        }

    };

    const  getSrc = (photo) => URL.createObjectURL(photo)

    const needUpload = computed(() =>photos.value?.length <= 5 )
    // const maxPhoto = computed(() => {if (needUpload) return photos.value && 'max photos 5'})
    const removePhoto =(index) => photos.value =  photos.value.filter((photo, i) => i != index)



    return {maxSize, photos, input, onFileSelected, getSrc, needUpload, removePhoto}

}

