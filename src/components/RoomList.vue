<template>
<div class="container">
  <router-link class="list" v-for="room in data" :key="room.id" :to="{ name: 'RoomInfo', params: { roomId: room.id } }">
    <room :room="room"/>   
  </router-link>
</div>
</template>
<script>
import Room from './Room.vue';

export default {
  name: 'RoomList',
  components: {
    Room,
  },
  props: ['data'],
}
</script>
<style scoped lang="scss">
  .container {
    max-width: 984px;
    padding: 0 22px;
    margin: -100px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-family: NotoSansCJKtc-Light;
}

.list{
  height: 350px;
  width: 300px;
  position: relative;
  margin-bottom: 58px;
  &:hover{
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.18);
    top: -5px;
    transition: all 0.3s;
  }
}
</style>