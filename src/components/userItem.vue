<template>
  <div class="box">
    <div class="item-left">
      <img :src="imgurl">
    </div>
    <div class="item-right">
      <h2>{{ name }}</h2>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['email', 'name', 'imgurl']
}
</script>

<style scoped>
.box {
  display: flex;
  background-color: #fff;
  padding: 10px;
  position: relative;
}
.box::after {
  content: '';
  height: 1px;
  width: 100%;
  background-color: #eee;
  transform: scaleY(.5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.item-left {
  width: 40px;
}
.item-left img {
  width: 100%;
  border-radius: 50%;
}


.item-right {
  padding-left: 15px;
}
.item-right h2,
.item-right p {
  margin: 0;
  text-align: left;
}
.item-right h2 {
  color: #585858;
  font-size: 20px;
}
.item-right p {
  font-size: 14px;
  color: #989898;
}
</style>
