<template>
  <el-aside width="200px" class="left-section" :style="leftStyl">
    <el-tree
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    />
  </el-aside>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
import type { Tree } from "@/store/home/type";
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

const data = computed(() => {
  return store.state.home.treeData;
});

store.dispatch("actionGetTreeData");

const handleNodeClick = (data: Tree) => {
  store.commit("changeTreeId", { treeId: data.id });
};

const defaultProps = {
  children: "children",
  label: "label",
};
</script>
<style scoped>
.left-section {
  border-right: 1px solid #eee;
  padding: 20px;
}
</style>
