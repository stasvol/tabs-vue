<template>
  <nav>
    <ul class="nav nav-tabs" >
<!--      <li v-for="(value,i) in ['Add Names','Add Phone','Add Photo','Choose'] ">-->
<!--        <router-link exact active-class="active" class="nav-link" to="/">{{value}}</router-link>-->
<!--      </li>-->
      <li class="nav-item"  >
        <router-link exact active-class="active" class="nav-link disabled" to="/">Add Names</router-link>
      </li>
      <li class="nav-item">
        <router-link
            active-class="active" class="nav-link disabled" to="/phone">Add Phone</router-link>
<!--        :class="!$store.state.name  ? 'disabled': 'nav-link'"-->
      </li>
      <li class="nav-item">
        <router-link  active-class="active" class="nav-link disabled" to="/photo">Add Photo</router-link>
<!--        :class="!$store.state.phone  ? 'disabled': 'nav-link'"-->
      </li>
      <li class="nav-item">
        <router-link active-class="active" class="nav-link disabled" to="/choose">Choose</router-link>
<!--        :class="!$store.state.phone || !$store.state.photos  ? 'disabled': 'nav-link'"-->
      </li>
      <!--      <li class="nav-item">-->
      <!--        <router-link active-class="active" class="nav-link " to="/modal">Modal</router-link>-->
      <!--      </li>-->
    </ul>
    <!--    <router-link to="/">Home</router-link> |-->
    <!--    <router-link to="/about">About</router-link>-->
  </nav>
</template>
<script>
export default {
  data:() =>({

  })
}

</script>
