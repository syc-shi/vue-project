<template>
  <el-aside width="200px" class="left-section" :style="leftStyl">
    <el-menu>
      <el-menu-item v-for="item in navData" :index="item.id">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
const store = useStore();

const navData = computed(() => {
  return store.state.navData;
});

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
  padding: 20px 0 20px 20px;
  .el-menu {
    border-right-color: transparent;
  }
}
</style>
