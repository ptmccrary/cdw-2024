<script setup></script>

<template>
  <div class="layout layout--default">
    <VHeader />
    <main id="main" class="main">
      <slot></slot>
    </main>
    <VFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout--default {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
