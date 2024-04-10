<script setup>
const props = defineProps({
  description: { type: String, default: null },
  id: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  subtitle: { type: String, default: null },
  title: { type: String, required: true }
})

const emit = defineEmits(['setActiveSection', 'close'])

function setActiveSection(id) {
  emit('setActiveSection', id)
}
</script>

<template>
  <Component
    :is="isActive ? 'div' : 'button'"
    class="landing-section"
    :data-is-active="isActive"
    @click.prevent="isActive ? undefined : setActiveSection(id)"
  >
    <button
      v-if="isActive"
      @click.prevent="emit('close')"
      class="landing-section__close"
    >
      <div class="ex"></div>
    </button>
    <div class="landing-section__inner">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>

      <div v-if="description" class="description">
        {{ description }}
      </div>
    </div>
  </Component>
</template>

<style lang="scss" scoped>
button.landing-section {
  cursor: pointer;
  background: none;
}

.landing-section__close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: $white;
  color: $black;
  border-radius: 50%;
  border: none;

  .ex {
    height: 20px;
    width: 20px;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background: currentColor;
      border-radius: 1px;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}

.landing-section {
  color: inherit;
  display: block;
  position: relative;
  border: none;
  padding: 0;
  height: 100%;
  width: 100%;
  text-decoration: none;

  h2 {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1;
  }

  p {
    font-size: 20px;
    margin: 0;
  }

  &[data-is-active='true'] {
    padding: 60px;
    .landing-section__inner {
      align-items: flex-start;
      justify-content: flex-start;
      display: flex;
      gap: 100px;
    }
  }
}

.landing-section__inner {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.description {
  display: none;

  [data-is-active='true'] & {
    display: block;
  }
}
</style>
