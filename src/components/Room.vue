<template>
  <div class="room">
    <img :src="room.imageUrl" class="list-img" :alt="room.name" />
    <div class="info">
      <div class="room-name">
        <div class="en-romom-name">
          <p>{{room.name}}</p>
        </div>
        <div class="tc-romom-name">
          <p>{{tcName}}</p>
        </div>
      </div>
      <div class="room-price">
        <div class="room-price-normalday">
          <span>NT.{{room.normalDayPrice}}</span><span>平日</span>
        </div>
        <div class="room-price-holiday">
          <span>NT.{{room.holidayPrice}}假日</span>          
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'Room',
  props: ['room'],
  data() {
    return {
      tcNameMap: {
        'Single Room': '單人房',
        'Deluxe Single Room': '豪華單人房',
        'Double Room': '單床雙人房',
        'Deluxe Double Room': '豪華單床雙人房',
        'Twin Room': '雙床雙人房',
        'Deluxe Twin Room': '豪華雙床雙人房',
      },
    };
  },
  computed: {
    tcName() {
      return this.tcNameMap[this.room.name]
    }
  }
}
</script>
<style scoped lang="scss">

  .list-img{
    height: 350px;
    width: 300px;
    object-fit: cover;
    transition: all 0.3s;
  }
  // list hover ,list-img style
  .room:hover .list-img{
  padding-bottom: 100px;
  }
  .info{
    height: 70px;
    width: 300px;
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    z-index: 100;
    background-color: #F7F7F7;
    transition: all 0.3s;
  }
  .room:hover .info{
    height: 132px;
  }
  .room-name{
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: end;
    margin-left: 30px;
    margin-top: 23px; 
    .en-romom-name{
      p{
        color: #000000;
        font-size: 14px;      
        letter-spacing: 1.46px; 
      }
    }
    .tc-romom-name{
      opacity: 0;
      transition: all 0.3s;
      margin-top: 4px;
      margin-bottom: 23px; 
      p{
        color: #6D7278;
        font-size: 12px;
        letter-spacing: 1.25px;
      }
    }
  }
  .room:hover .room-name .tc-romom-name{
    opacity: 1;
  }
  .room-price{
    display: flex;
    // justify-content: space-between;
    align-items: baseline;
    opacity: 0;
    transition: all 0.3s;
    margin-left: 30px;
    .room-price-normalday {
      span {
        &:nth-child(1) {
          font-size: 21px;
          letter-spacing: 2.19px;
        }
        &:nth-child(2) {
          font-size: 12px;
          letter-spacing: 1.25px;
          margin-right: 40px;
        }
      }
    }
    .room-price-holiday{
      span{
        color: #6D7278;
        font-size: 12px;
        letter-spacing: 1.25px;
      }
    }

  }
  .room:hover .room-price{
    opacity: 1;
  }
</style>