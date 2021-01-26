<template>
  <div style="text-align: center">
    <div :style="shadow1"></div>
    <div :style="shadow2">
      <label>Color:</label>
      <input type="color" v-model="bgColor">
      {{ bgColor }}
      <br/>
      <label>Radius:</label>
      <slider max="50" min="0" v-model="radius"></slider>
      {{ radius }}<br/>
      <label>Width:</label>
      <slider max="200" min="50" v-model="width"></slider>
      {{ width }}px<br/>
      <label>Height:</label>
      <slider max="200" min="50" v-model="height"></slider>
      {{ height }}px<br/>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
export default {
  name: "Morphism",
  components: {Slider},
  data() {
    return {
      width: 100,
      height: 100,
      bgColor: '#ffc0cb',
      radius: 10,
      color: ''
    }
  },
  computed: {
    shadow1: function () {
      return {
        margin: '20px auto',
        width: `${this.width}px`,
        height: `${this.height}px`,
        backgroundColor: this.bgColor,
        borderRadius: `${this.radius}px`
      }
    },
    shadow2: function () {
      return {
        margin: '20px auto',
        textAlign: '',
        width: '350px',
        height: '400px',
        backgroundColor: this.bgColor,
        borderRadius: `${this.radius}px`
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

input[type="color"] {
  display: inline-block;
  -webkit-appearance: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 3px solid #001f3f;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
  }
}
</style>