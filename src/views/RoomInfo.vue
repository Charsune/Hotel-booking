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
    <div class="container">
      <div class="info-content">
        <div class="info">
          <h1 class="room-name">{{ data.name }}</h1>
          <ul class="description-short">
            <li>客房人數限制：{{ data.descriptionShort.GuestMin }}～{{ data.descriptionShort.GuestMax }}</li>
            <li>床型：{{ data.descriptionShort.Bed[0] }}</li>
            <li>衛浴數量： {{ data.descriptionShort['Private-Bath'] }} 間</li>
            <li>房間大小： {{ data.descriptionShort.Footage }} 平方公尺</li>
          </ul>
          <p class="description">{{ data.description }}</p>
        </div>
        <div class="divider">\ \ \</div>

        <!-- check-in & check-out -->
        <div class="check-in-and-out">
          <div class="check-in">
            <p class="check-title">Check in</p>
            <p class="check-time">{{ data.checkInAndOut.checkInEarly }} - {{ data.checkInAndOut.checkInLate }}</p>
          </div>
          <div class="check-out">
            <p class="check-title">Check out</p>
            <p class="check-time">{{ data.checkInAndOut.checkOut }}</p>
          </div>        
        </div>
        <div class="room-amenities">
          <ul class="amenities">
            <!-- <li :class="{ 'amenities-none': isAmenities }"><img src="../assets/info_icon/wifi.svg" alt="">Wi-Fi</li> -->
            <li :class="[{ 'disable': !data.amenities['Wi-Fi']}]"><img src="../assets/info_icon/Wi-Fi.svg" />Wi-Fi</li>
            <li :class="[{ 'disable': !data.amenities['Television']}]"><img src="../assets/info_icon/Television.svg" />電視</li>
            <li :class="[{ 'disable': !data.amenities['Great-View']}]"><img src="../assets/info_icon/Great-View.svg" />漂亮的視野</li>
            <li :class="[{ 'disable': !data.amenities['Breakfast']}]"><img src="../assets/info_icon/Breakfast.svg" />早餐</li>
            <li :class="[{ 'disable': !data.amenities['Air-Conditioner']}]"><img src="../assets/info_icon/Air-Conditioner.svg" />空調</li>
            <li :class="[{ 'disable': !data.amenities['Smoke-Free']}]"><img src="../assets/info_icon/Smoke-Free.svg" />禁止吸煙</li>
            <li :class="[{ 'disable': !data.amenities['Mini-Bar']}]"><img src="../assets/info_icon/Mini-Bar.svg" />Mini Bar</li>
            <li :class="[{ 'disable': !data.amenities['Refrigerator']}]"><img src="../assets/info_icon/Refrigerator.svg" />冰箱</li>
            <li :class="[{ 'disable': !data.amenities['Child-Friendly']}]"><img src="../assets/info_icon/Child-Friendly.svg" />適合兒童</li>
            <li :class="[{ 'disable': !data.amenities['Room-Service']}]"><img src="../assets/info_icon/Room-Service.svg" />Room Service</li>
            <li :class="[{ 'disable': !data.amenities['Sofa']}]"><img src="../assets/info_icon/Sofa.svg" />沙發</li>
            <li :class="[{ 'disable': !data.amenities['Pet-Friendly']}]"><img src="../assets/info_icon/Pet-Friendly.svg" />寵物攜帶</li>
          </ul>
        </div>
      </div>

      <div class="date-content">
        <!-- 價格 -->
        <div class="room-price">
          <div class="room-price-normalday">
            <p>NT.{{data.normalDayPrice}}</p>
            <p>平日(一~四)</p>
          </div>
          <div class="room-price-holiday">
            <p>NT.{{data.holidayPrice}}</p>
            <p>假日(五~日)</p>   
          </div>
        </div>
        <!-- 日期選單 -->
        <picker></picker>
      </div>
    </div>
  </div>
</template>

<script>
import Picker from '@/components/Picker.vue'

export default {
  name: 'RoomInfo',
  data() {
    return {
      data: null,
    };
  },
  components: {
    Picker
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

.container{
  max-width: 1076px;
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  // 水平置中
  margin: 0 auto 0 auto;
}
.info-content{
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  max-width: 481px;
  padding-right: 38px;
  .info{
    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    h1{
      font-family: NotoSansCJKtc-Medium;
      font-size: 36px;
      letter-spacing: 3.76px;
    }
    .description-short{
      display: flex;  
      flex-direction: column;
      align-items: flex-start;
      padding-top: 31px;
      padding-bottom: 10px;
      li{
        font-family: NotoSansCJKtc-Light;
        font-size: 14px;
        letter-spacing: 1.46px;
        line-height: 31px;
      }
    }
    .description{
      font-family: NotoSansCJKtc-Light;
      font-size: 12px;
      color: #000000;
      letter-spacing: 1.25px;
      text-align: justify;
      line-height: 20px;
      padding-bottom: 10px;
    }

  }
}
.check-in-and-out{
  display: flex;
  .check-in{
    padding-right: 96px;
    padding-bottom: 40px;
    >:nth-child(1){
      @include Checkinout;
    }
    >:nth-child(2){
      @include CheckinoutTime;
    }
  }
  .check-out{
    >:nth-child(1){
      @include Checkinout;
    }
    >:nth-child(2){
      @include CheckinoutTime;
    }
  }
}
.divider{
  padding-bottom: 28px;
}

.amenities{
  display: flex;
  flex-wrap: wrap;
  background-color: #F0F0F0;
  li{
    display: flex;
    align-items: center;
    flex: 0 0 33.333%;
    padding: 15px 0;
    font-size: 12px;
    font-family: NotoSansCJKtc-Light;
    img{
      height: 22px;
      padding-left: 26px;
      padding-right: 14px;
    }
  }
  .disable{
    opacity: 0.3;
  }
}
.date-content{
  display: flex;
  .room-price{
    font-family: NotoSansCJKtc-Light;
    text-align: right;
    margin-right: 37px;
    .room-price-normalday{
      >:nth-child(1){
        font-size: 30px;
        color: #000000;
        letter-spacing: 3.13px;
        line-height: 27px;
      }
      >:nth-child(2){
        font-size: 14px;
        color: #6D7278;
        letter-spacing: 1.46px;
        line-height: 27px;
      }
    }
    .room-price-holiday{
      margin-top: 5px;
      >:nth-child(1){
        font-size: 16px;
        color: #000000;
        letter-spacing: 1.67px;
        line-height: 27px;
      }
      >:nth-child(2){
        font-size: 14px;
        color: #6D7278;
        letter-spacing: 1.46px;
        line-height: 27px;
      }      
    }
  }
}

</style>
