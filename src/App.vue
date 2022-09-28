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
  <transition>
    <keep-alive>
      <router-view />
    </keep-alive>
  </transition>
</template>
<script>
import NavBar from '@/views/NavBar'
export default {
  components: {
    NavBar
  }
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
.invalid {
  display: flex;
  justify-content: center;
  color: #a90f0f;
  margin-top: 5px;
}
</style>
