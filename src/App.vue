<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

const activeIndex = computed(() => {
  return store.state.currentNav;
});
const handleSelect = (key: string, keyPath: string[]) => {
  router.push("/" + key);
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="home">Home</el-menu-item>
          <el-menu-item index="about">About</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <RouterView />
      </el-container>
    </el-container>
  </div>
</template>
