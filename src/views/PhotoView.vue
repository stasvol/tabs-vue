<template>
  <div class="card-header">
    <h1 class="header">Photo page</h1>
    <form  @submit.prevent="onSubmit">
      <div class="mb-3 row">
        <label for="formFile" class="col-sm-6 col-form-label">Choose files
          <div class="col-lg-10">
            <input
                ref="input"
                @change="onFileSelected"
                class="form-control"
                type="file"
                id="formFile"
                multiple
            >
          </div>
        </label>
      </div>
      <div>
      <!--    <photo-slots>-->
      <!--    <template #default>-->
      <div
          v-if="needUpload"
          class="photoSize"
          v-for="(photo,index) in photos"
          :key="photo"
      >

        <img
            ref="photos"
            :src="getSrc(photo)"
            :alt="`Photo ${index}`"
            class="photo "

        >
        <div class="">
        <!--      <slot v-bind:item="photo"></slot>-->
        <button @click="removePhoto(index)" class="btn btn-close position  "  type="button"></button>
        </div>
      </div>
      <h3 v-else class="head" > Max length photos: {{maxSize}}photo </h3>
      <!--    </template>-->
      <!--    </photo-slots>-->
      </div>

      <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
        <button @click="$router.push('/phone')" type="button" class="btn btn-warning">Prev</button>
        <!--      <button type="button" class="btn btn-warning">Middle</button>-->
        <button  type="submit"  class="btn btn-success">Next</button>

      </div>

    </form>

  </div>

</template>
<script >
import {computed, defineComponent, ref, toRefs} from "vue";
import Modal from "@/views/Modal";
// import  usePhotos  from "@/utils/photo";
export default defineComponent({

  // props: {
  //   modelValue: {
  //     type: Array,
  //     required: true
  //   }
  // },
  // emits: ['update: modelValue'],


 methods:{

   onSubmit() {

     const formData = {
       photos: this.photos,
       getSrc: this.getSrc,
       maxSize: this.maxSize,
       removePhoto: this.removePhoto,
       onFileSelected: this.onFileSelected,
       needUpload: this.needUpload,
     }
     console.log(formData.photos)
     this.$router.push('/choose')
   }

 },


  // const onSubmit = (e) =>  {
  //   console.log(e)
  //   alert(e)
  //   $router.push('/choose')
  // }
  // const {maxSize, photos, input, onFileSelected, getSrc, needUpload, removePhoto} = usePhotos()


  setup(props, {emit}) {

    // const { modelValue } = toRefs(props)

    const maxSize = 5
    const photos = ref([])
    const input = ref()

    const onFileSelected = ({target: {files}}) => {
      if (files) {
        // emit('update: modelValue',[...modelValue.value, ...Array.from(target.files)])
        photos.value = [...photos.value, ...Array.from(files)]
      }
      if (input.value) {
        input.value.value = ''
      }
    };

    const getSrc = (photo) => URL.createObjectURL(photo)
    const needUpload = computed(() =>photos.value.length <= 5)
   // const needUpload = computed(() =>modelValue?.value?.length <= 5)
    const removePhoto =(index) => photos.value = photos.value.filter((photo, i) => i != index)
    // const removePhoto =(index) => emit('update: modelValue',modelValue.value.filter((photo, i) => i != index))

    //   const uploadFile = computed(() => {
  //     if (needUpload.value > 0) {
  //      return  `Remains ${needUpload.value.length}`
  //     } else {
  //     return `${needUpload.value.length >=5}- Max length photo: 5photos `
  // }
  //     console.log(needUpload.value)
  //   })

    return {
      maxSize,
      removePhoto,
      // uploadFile,
      needUpload,
      input,
      getSrc,
      photos,
      onFileSelected,
    }
  }

})
// @ is an alias to /src
// export default {
//   name: 'photo',
//   data:() => ({
//     selectedFile: null
//   }),
//   methods: {
//     onSubmit() {
//       const formData = new FormData()
//       formData.append('image', this.selectedFile)
//       console.log(formData)
//       // this.$router.push('/choose')
//     },
//     onFileSelected(e) {
//       this.selectedFile = e.target.files[0]
//
//     }
//   },
//
// }

</script>
<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    onSubmit() {-->
<!--      this.$router.push('/choose')-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<style>
.photo {
  max-width: 30%;
  border-radius: 1rem;
}
.photoSize {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  cursor: pointer;
}
.head {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  color: #a90f0f;
}

.position {
  margin: 1rem 0 0 -3rem;
  background-color: #ebfcfc;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  /*opacity: 0;*/
  /*color: #d9a012;*/
}

.position:hover {
  transform: scale(1.4);
  background-color: #ef0505;
  /*opacity: 1;*/
}

/*.row {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*}*/
/*.header {*/
/*  text-align: center;*/
/*  color: #030350;*/
/*  margin: 2rem;*/
/*}*/
</style>