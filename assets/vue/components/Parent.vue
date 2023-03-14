<template>
  <div>
    <SlotChildren :slot-names="slotNames">
      <template v-for="slotName in slotNames"
                #[slotName]
      > {{ slotName }}
      </template>
    </SlotChildren>
  </div>
</template>

<script setup lang="ts">
import SlotChildren from "./SlotChildren.vue";

const slotNames = ['s-1', 's-2'];
</script>

