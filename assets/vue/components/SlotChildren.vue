<template>
  <div v-for="slotName in slotNames">
    <slot :name="slotName" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  slotNames: string[];
}

defineProps<Props>();

</script>
