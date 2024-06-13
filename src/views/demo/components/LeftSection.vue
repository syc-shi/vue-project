<template>
  <el-aside width="200px" class="left-section" :style="leftStyl">
    <el-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();

const windowHeight: number =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

type Styl = {
  height: string;
};

const leftStyl: Styl = {
  height: windowHeight - 80 + "px",
};
</script>
<style scoped>
.left-section {
  border-right: 1px solid #eee;
  padding: 20px;
}
</style>
