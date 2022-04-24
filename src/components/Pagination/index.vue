<template>
  <div class="pagination">
    <button
      :disabled="startNumAndEndNum.start == 1"
      @click="$emit('getPageNo', pageNo - 1)"
    >
      上一页
    </button>
    <button v-show="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)" >
      1
    </button>
    <button v-show="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-show="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
      :class="{active:pageNo == page}"
    >
      {{ page }}
    </button>

    <button v-show="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-show="startNumAndEndNum.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="startNumAndEndNum.end == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
    <h2>{{ startNumAndEndNum }}</h2>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "pageSize", "pageNo", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { continues, pageNo, total } = this;
      let start = 0;
      let end = 0;
      if (continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
      }
      if (start < 1) {
        start = 1;
        end = continues;
      }
      if (end > this.totalPage) {
        end = this.totalPage;
        start = this.totalPage - continues + 1;
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active{
    background-color: skyblue;
}
  }
}
.active{
    background-color: skyblue;
    color: #fff;
}
</style>