<script setup lang="ts">
import LeftSection from "./components/LeftSection.vue";
import ButtonSection from "./components/ButtonSection.vue";
import TableSection from "./components/TableSection.vue";
</script>

<template>
  <el-container>
    <LeftSection />
    <el-container>
      <el-main>
        <ButtonSection />
        <TableSection />
      </el-main>
    </el-container>
  </el-container>
</template>
