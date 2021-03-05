<template>
  <div class="homepage">
    <div class="banner">
      <!-- 首頁輪播  -->
        <!--  perPage：一頁一個 , paginationEnabled：按鈕  :autoplayTimeout="1000"-->
      <carousel :autoplay="true" :paginationEnabled="false" :perPage="1" :loop="true">
          <slide v-for="img in data" :key="img.id" class="header-bg">
            <img :src="img.imageUrl">
          </slide>
      </carousel>

      <!-- Header Info -->
      <div class="content">
        <div class="logo">
          <img class="logo" src="../assets/index_icon/logo_white.svg">
        </div>

        <div class="contact-info">
            <!-- 涉權連結 -->
          <div class="social-icon">
            <a href="#"><img src="../assets/index_icon/instagram-brands.svg" /></a>
            <a href="#"><img src="../assets/index_icon/facebook-square-brands.svg" /></a>
          </div>
          <!-- <div class="line"></div> -->
            <!--  聯繫方式 -->
          <ul class="contact-list">
            <li><img src="../assets/index_icon/phone-alt-solid.svg" />02-17264937</li>
            <li><img src="../assets/index_icon/envelope-solid.svg" />whitespace@whitespace.com.tw</li>
            <li><img src="../assets/index_icon/home-solid.svg" />台北市羅斯福路十段30號</li>
          </ul>
        </div>      
      </div>
    </div>


  </div>
  

</template>

<script>

export default {
  name: 'Home',


  data() {
    return {
      data: null,
    };
  },
  created() {
    const vm = this;

    const api = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
    vm.axios
      .get(`${api}`, {
        headers: {
          Authorization: process.env.VUE_APP_API_TOKEN,
          accept: 'application/json',
        },
      })
      .then((response) => {
        vm.data = response.data.items;
      });
  },
  computed: {
    headerImg() {
      const vm = this;
      const test = vm.data;
      return test;
    },
  },
}
</script>
<style scoped lang="scss">
@mixin Center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.homepage {
  .banner {
    position: relative;

    .VueCarousel{
      .header-bg {
        img{
          height: 100vh;
          width: 100%;
          object-fit: cover; 
          object-position:50% 50%;
        }
      }
    }

    .content{
      z-index: 1;

      @include Center;

      .logo{
        img{
          width: 150px;
          height: 150px;
          margin-bottom: 50px;
        }
      }
      .contact-info{
        display: flex;
        justify-content: center;
        .social-icon{
          margin: auto;
          >:nth-child(1){
            margin-right: 10px
          }
          >:nth-child(2){
            margin-right: 35px
          }
          img{
            height: 25px;
          }
        }
        .contact-list{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-left: 1px solid #fff;
          padding-left: 25px;
          li{
            // 文字垂直置中
            display: flex;
            color: white;
            font-size: 14px;
            font-family: NotoSansCJKtc-DemiLight;
            &:not(:last-child) {
              margin-bottom: 12px;
            }
          }

          img{
            margin-right: 20px;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>