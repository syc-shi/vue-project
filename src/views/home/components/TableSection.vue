<template>
  <el-table
    stripe
    :data="tableData"
    :style="{ width: '100%', marginTop: '10px' }"
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();

const treeId = computed(() => {
  return store.state.treeId;
});

const tableData = computed(() => {
  return store.state.tableData;
});

watch(treeId, (newId, oldId) => {
  store.dispatch("actionGetTableData", { treeId: newId });
});

store.dispatch("actionGetTableData");
</script>
