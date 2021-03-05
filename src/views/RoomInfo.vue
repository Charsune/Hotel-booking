<template>
  <div class="room-info">
    <header>
      <div class="content">
        <router-link to="/">
          <img class="logo" src="../assets/index_icon/logo_block.svg" />
        </router-link>
        <div class="header-img-left"><img @click="showImg(0)" :src="data.imageUrl[0]" /></div>
        <div class="header-img-right">
          <img @click="showImg(1)" :src="data.imageUrl[1]" />
          <img @click="showImg(2)" :src="data.imageUrl[2]" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'RoomInfo',

  data() {
    return {
      data: null,
    };
  },
  computed: {
  },
  created() {
    const vm = this;
    vm.roomId = vm.$route.params.roomId;   
    const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${vm.roomId}`;
    vm.axios
      .get(`${api}`, {
        headers: {
          Authorization: process.env.VUE_APP_API_TOKEN,
          accept: 'application/json',
        },
      })
      .then((res) => {
        const [roomData] = res.data.room;
        vm.data = roomData;
      });
  },

}
</script>
<style scoped lang="scss">

@mixin Checkinout{
  font-family: NotoSansCJKtc-Light;
  font-size: 14px;
  color: #000000;
  letter-spacing: 1.46px;
  text-align: left;
  padding-bottom: 5px;
}

@mixin CheckinoutTime{
  font-family: NotoSansCJKtc-Light;
  font-size: 21px;
  color: #000000;
  letter-spacing: 2.19px;
  text-align: left;
}

header{
  height: 596px;
  display: flex;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
  .content{
    display: flex;
    position: relative;
    .logo{
    position: absolute;
    top: 5.3%;
    left: 4.1%;
    z-index: 1;
    }
    .header-img-left{
      height: 100%;
      width: 70vw;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
        transition: all 0.3s;
        &:hover {
          opacity: 1;
        }
      }
    }
    .header-img-right{
      height: 100%;
      width: 30vw;
      img {
        display: block;
        width: 100%;
        height: 50%;
        object-fit: cover;
        opacity: 0.7;
        transition: all 0.3s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}


</style>
