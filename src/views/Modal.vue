<template>
  <div class="col">
    <!-- Button trigger modal -->
    <!--   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
    <!--      Launch demo modal-->
    <!--    </button>-->
    <!-- Modal -->
    <!--    <h1>{{files.length}}</h1>-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tabs data</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="mod">
              <span>Name:<strong v-if="getName.name?.name">{{getName.name?.name}}</strong>

                <i v-else>Not selected</i>
              </span>
              </div>
              <div class="mod">
              <span>Description: <strong v-if="getName.name?.description">{{ getName.name?.description }}</strong>
                <i v-else>Not selected</i>
              </span>
              </div>
              <div class="mod">
              <span>Check: <strong v-if="getName.name?.checkToggle"> Yes selected
                <!--                {{getName.name?.checkToggle }}-->
              </strong>
                <i v-else>Not selected</i>
              </span>
              </div>
            </div>
            <div class="mod" v-if=" getPhone.phone?.phone">
              <span>Phone: <strong>{{ getPhone.phone?.phone }}</strong></span>
            </div>
            <div class="mod">
              <span>Email: <strong v-if="$store.state.phone?.email">{{ $store.state.phone?.email }}</strong>
                <i v-else>Not selected</i>
              </span>
            </div>
            <div class="mod">

              <span>Check choose: <strong v-if="checkValue.checked">{{ checkValue.checked?.toString() }}</strong>
               <i v-else>Not selected</i>
              </span>

            </div>

            <div id="Photo" class="mod"> Photo:
              <!--              {{getPhoto.photos?.photos[0].name}}-->
              <!--              {{photos}}-->
              <div v-if="getPhoto.photos"
                   class="photoSize"
                   v-for="(photo,index) in getPhoto.photos?.photos"
                   :key="photo"
              >

                <img
                    id="imgFile"
                    :src="getSrc(photo)"
                    :alt="`Photo ${index}`"
                    class="photo"

                >

              </div>
<!--              <i v-else>Not selected</i>-->


            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="closeModal" data-bs-dismiss="modal" type="button" class="btn btn-primary">Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import {ref} from "vue";
// import PhotoView from "@/views/PhotoView";
import usePhotos from "@/utils/photo";
import photoFile from "@/utils/photoFile";
// import Choose from "@/views/ChooseView";
// import {computed} from "vue/dist/vue";


export default {

  // components: {Choose},
  // props: ['modelValue'],
  // emits: ['update:modelValue'],
  // data:() =>({
  //   checkList: []
  // }),
  // components: {PhotoView},
  // props: ['modelValue'],
  // emits: ['update:modelValue'],
  // data:()=>({
  //   files: []
  // }),

  mounted() {


    const wrapper = document.createElement('div')

    const div = document.querySelector('#Photo')
    div.insertAdjacentElement('beforeend', wrapper)

    const imageUrl = sessionStorage.getItem('imagesKey')
    if (imageUrl) {
      wrapper.insertAdjacentHTML('afterbegin', `

                <div class="wrapper-image">
                   <img src="${imageUrl}" />
                </div>

             `)

    } else {
      wrapper.insertAdjacentHTML( 'beforeend',
      `<i v-else>Not selected</i>`)
    }
  },

  setup() {


    // const photos = ref([])
    // // const input = ref()
    //
    // const onSelected =({target}) => {
    //
    //   if (target.files) {
    //     photos.value =  [...photos.value, ...Array.from(target.files)]
    //   }
    //   console.log(photos)
    // };
    //
    // const  getSrc = (photo) => URL.createObjectURL(photo)
    //
    // return { photos, onSelected, getSrc }

    // const  getSrc = (photo) => URL.createObjectURL(photo)

    const {maxSize, photos, input, onFileSelected, getSrc, needUpload, removePhoto} = usePhotos()

    return {maxSize, photos, input, onFileSelected, getSrc, needUpload, removePhoto}

  },
  methods: {

    closeModal() {
      this.$router.push('/')
      f
    }
  },

  computed: mapGetters(['getName', 'getPhone', 'getPhoto', 'checkValue']),
  // computed: {
  //   getName() {
  //    return  this.$store.getters.getName
  //   },
  //
  //     getPhone() {
  //       return this.$store.getters.getPhone
  //     }
  //   },
  // setup() {
  //   const files = ref([])
  //   return {files}
  // }
}

</script>

<style scoped>
.mod {
  border: 1px solid #c2c1c1;
  padding: 1rem;
}
</style>