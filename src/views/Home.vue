<template>
  <div class="home">
    <h1>Zio Front-End Developer Sample Task</h1>

    <div class="zio">
      <!--<label for="zio__input">zio text: </label>-->
      <input v-model="zioText" id="zio__input" class="zio__input"
             placeholder="Please type here">
    </div>
    <div class="zio__d3">
      <zio-d3 :zio-text="zioText"></zio-d3>
    </div>

  </div>
</template>

<script>
    // @ is an alias to /src
    import ZioD3 from '../components/ZioD3.vue';

    export default {
        name: 'home',
        components: {
            ZioD3,
        },
        data() {
            return {
                zioText: 'Sample Text',
            };
        },
    };
</script>

<style lang="scss">
  .home__logo {
    width: 200px;
    height: auto;
  }
  .zio {
    padding-top: 90px;
    &__input {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
  }
</style>
