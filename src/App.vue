<template>
  <NavBar />
<!--  <nav>-->
<!--    <ul class="nav nav-tabs" >-->
<!--      <li class="nav-item"  >-->
<!--        <router-link exact active-class="active" class="nav-link" to="/">Add Names</router-link>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <router-link active-class="active" class="nav-link" :class="!$store.state.name  ? 'disabled': 'nav-link'" to="/phone">Add Phone</router-link>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <router-link  active-class="active" class="nav-link" :class="!$store.state.phone  ? 'disabled': 'nav-link'" to="/photo">Add Photo</router-link>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <router-link active-class="active" class="nav-link" :class="!$store.state.phone || !$store.state.photos  ? 'disabled': 'nav-link'" to="/choose">Choose</router-link>-->
<!--      </li>-->
<!--&lt;!&ndash;      <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;        <router-link active-class="active" class="nav-link " to="/modal">Modal</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--    </ul>-->
<!--&lt;!&ndash;    <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--  </nav>-->
<!--  <transition>-->
<!--    <keep-alive>-->
      <router-view />
<!--    </keep-alive>-->
<!--  </transition>-->

</template>
<script>
import NavBar from '@/views/NavBar'
import store from "@/store";
export default {
  components: {
    NavBar
  },

  // onMounted()  {
  //   sessionStorage.clear()
  // },
}
</script>

<style lang="scss">
// @import 'bootstrap/dist/css/bootstrap.min.css';
.nav {
  display: flex;
  justify-content: center;
}
.row {
  display: flex;
  justify-content: center;
}
.header {
  text-align: center;
  color: #030350;
  margin: 2rem;
}
.btn-group-lg {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1.5rem 0;
}
.btn {
  width: 14rem;
}
.btnFile {
  margin: 0 auto;
  width: 14rem;
  background-color: #7abae7;
  padding: 1rem;
  border-radius: .5rem;
}
.invalid {
  display: flex;
  justify-content: center;
  color: #a90f0f;
  margin-top: 5px;
}
.photo {
  max-width: 30%;
  border-radius: 1rem;
}
.photoSize {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  cursor: pointer;
}

.wrapper {
  display: flex;
  flex-wrap: wrap ;
  padding: 1rem;
}

.wrapper-image {
  position: relative;
  margin-bottom: .5rem;
  margin-right: .5rem;
  overflow: hidden;
}

.wrapper-image.removing {
  transform: scale(0);
  transition: transform .3s;
}

.wrapper-image img {
  width: 20rem;
  height: auto;
}

.wrapper-image:hover .wrapper-remove {
  opacity: 1;
}

.wrapper-image:hover .wrapper-info {
  bottom: 0;
}

.wrapper-remove {
  opacity: 0;
  transition: opacity .33s;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  font-weight: bold;
  background: rgba(255,255,255, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.wrapper-info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: -3rem;
  height: 2rem;
  font-size: 1rem;
  background: rgba(255,255,255, .5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
  transition: bottom .33s;
}

//input[type=file]  {
//  display: none;
//}
</style>
