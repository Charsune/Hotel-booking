<template>
  <div class="datepicker">
    <datepicker :inline="true" :language="zh"></datepicker>
    <button  class="booking">預約時段</button>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {zh} from 'vuejs-datepicker/dist/locale'
export default {
  name: 'Picker',
  components: {
    Datepicker
  },
  data() {
    return {
      zh: zh,
    };
  },

}
</script>
<style>
.datepicker{
  display: flex;
  flex-direction: column;
}
button{
  margin-top: 38px;
  width: 120px;
  height: 53px;
  background: #575757;
  font-family: NotoSansCJKtc-DemiLight;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1.67px;
  text-align: center;
}


.vdp-datepicker__calendar{
  background: #F7F7F7 !important;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.15) !important;
  border: none !important;
}
.vdp-datepicker__calendar header {
    font-family: NotoSansCJKtc-DemiLight;
}
.vdp-datepicker__calendar .cell.day-header {
    font-family: NotoSansCJKtc-DemiLight;
    font-size: 18px;
    color: #6D7278;
}
.vdp-datepicker__calendar .cell {
  font-family: NotoSansCJKtc-DemiLight;
  font-size: 14px;
}
/*選擇日期*/
.vdp-datepicker__calendar .cell.selected {
  background: #B7B7B7 !important;
  border: none !important;
}
/*選擇日期 horver*/
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover{
  border: none !important;
}


</style>