<template>
  <input type="range" :max="max" :min="min" :value="radius" @change="$emit('change', $event.target.value)">
</template>

<script>
export default {
  name: 'Slider',
  model: {
    prop: 'radius',
    event: 'change'
  },
  props: {
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    radius: {
      type: Number
    }
  }
}
</script>

<style lang="less" scoped>
input[type="range"] {
  display: inline-block;
  -webkit-appearance: none;
  background-color: darkseagreen;
  width: 200px;
  height: 10px;
  border-radius: 5px;
  margin: 0 auto;
  outline: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: forestgreen;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    transition: .3s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    background-color: forestgreen;
    border: 2px solid palegreen;
  }

  &::-webkit-slider-thumb:active {
    transform: scale(1.2);
  }
}
</style>