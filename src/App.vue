<template>
  <nav>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link exact active-class="active" class="nav-link" to="/">Add Names</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" class="nav-link" to="/phone">Add Phone</router-link>
      </li>
      <li class="nav-item">
        <router-link  active-class="active" class="nav-link" to="/photo">Add Photo</router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" class="nav-link " to="/choose">Choose</router-link>
      </li>
<!--      <li class="nav-item">-->
<!--        <router-link active-class="active" class="nav-link " to="/modal">Modal</router-link>-->
<!--      </li>-->
    </ul>
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
  </nav>
  <router-view/>
</template>

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
  margin-top: 1.5rem;
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
