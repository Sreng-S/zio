<template>
  <div class="home">
    <h1>Zio Front-End Developer Sample Task</h1>

    <div class="zio">
      <label for="zio__input">zio radius: </label>
      <input
              type="number"
              :min="10"
              :max="300"
              :step="10"
              v-model="zioRadius"
              id="zio__radius"
              class="zio__radius">
      <!--<chrome-picker v-model="colors" :colors="colors.hex"></chrome-picker>-->
      <!--Selected Color: {{colors.hex}}-->
      <br/>
      <label for="zio__radius">zio text: </label>
      <input
              v-model="zioText"
              id="zio__input"
              class="zio__input"
              placeholder="Please type here">
    </div>

    <div class="zio__d3">
      <zio-d3
              :zio-text="zioText"
              :cx="cx1"
              :cy="r1"
              :r="r1"
              :defaultColor="defaultColor">
      </zio-d3>
      <zio-d3
              :zio-text="zioText"
              :cx="cx2"
              :cy="Number(zioRadius)"
              :r="Number(zioRadius)"
              :defaultColor="defaultColor">
      </zio-d3>
    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    // import {Chrome} from 'vue-color';
    import ZioD3 from '../components/ZioD3.vue';

    export default {
        name: 'home',
        components: {
            ZioD3,
            // 'chrome-picker': Chrome,
        },
        data() {
            return {
                zioText: 'Sample Text',
                colors: {
                    hex: '#d0e1f3',
                },
                defaultColor: '#d0e1f3',
                zioRadius: 100,
                cx1: window.innerWidth / 2,
                r1: 70,
                cx2: window.innerWidth / 2,
            };
        },
        methods: {
            getColor() {
                return this.colors.hex;
            },
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
    text-align: center;
    &__input {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      margin-top: 30px;
    }
    &__radius {
      max-width: 70px;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
    .vc-chrome {
      margin: 30px auto;
    }
  }
</style>
