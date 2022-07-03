<template>
  <div class="card-header">
    <h1 class="header">Photo page</h1>
<!--    <form @submit="onSubmit">-->
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
      <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
        <button @click="$router.push('/phone')" type="button" class="btn btn-warning">Prev</button>
        <!--      <button type="button" class="btn btn-warning">Middle</button>-->
        <button class="btn btn-success">Next</button>

      </div>
<!--    </form>-->
    <div class="photoSize"
        v-for="(photo,index) in photos"
        :key="index"

    >
      <img
          :src="getSrc(photo)"
          :alt="`Photo ${index+1}`"
          class="photo"
      >

    </div>
    {{needUpload}}

  </div>
</template>
<script>
import {computed, defineComponent, ref} from "vue";

export default defineComponent({
  setup() {

    const photos = ref([])
    const input = ref()

    const onFileSelected =({target}) => {
      if (target.files) {
        photos.value = [...photos.value, ...Array.from(target.files)]
      }
       if(input.value) {
         input.value.value = ''
       }
    };

    const getSrc = (photo) => URL.createObjectURL(photo)
    const needUpload = computed(() =>   5 - photos.value.length)
    const uploadFile = computed(() => {
      if (needUpload.value <= 5) {
        needUpload.value
      } else { ` max length photo: 5photos `}
      console.log(needUpload.value)
    })

    return {
      uploadFile,
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
<style>
.photo {
  max-width: 30%;
  border-radius: 1rem;
}
.photoSize {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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