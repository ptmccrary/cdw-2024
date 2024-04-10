<script setup>
const sections = ref([
  {
    id: 'past',
    title: 'Past',
    subtitle: 'History of IX Park',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, inedia est aviditas cibi.'
  },
  {
    id: 'present',
    title: 'Present',
    subtitle: 'Who we are',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, inedia est aviditas cibi.'
  },
  {
    id: 'future',
    title: 'Future',
    subtitle: 'Who we aspire to be',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, inedia est aviditas cibi.'
  }
])

const activeSection = ref(null)

function setActiveSection(id) {
  activeSection.value = id
}

function closeSections() {
  activeSection.value = null
}
</script>

<template>
  <div class="page page--explore" :data-has-active-section="!!activeSection">
    <section
      v-for="section in sections"
      :key="section.id"
      :data-is-active="activeSection === section.id"
    >
      <LandingSection
        :description="section.description"
        :id="section.id"
        :is-active="activeSection === section.id"
        :title="section.title"
        :subtitle="section.subtitle"
        @set-active-section="setActiveSection"
        @close="closeSections"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page--explore {
  background: $white;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
  }

  section {
    flex: 1;
    min-height: 100%;
    border-bottom: 1px solid $black;
    transition:
      flex 0.5s ease-in-out,
      background 0.3s ease-in-out;

    @media (min-width: 900px) {
      border: 0;
      border-right: 1px solid $black;
    }

    &[data-is-active='true'] {
      flex: 1 0 85%;
      background: #2f2f2f !important;
      color: $white;
    }

    &[data-is-active='false'] {
      &:hover,
      &:focus-visible {
        flex: 1 0 5%;
      }
    }

    &::before {
      content: '';
      display: block;
      height: 20px;
      width: 100%;
    }

    &:first-child {
      background-color: #9f9f9f;
      &::before {
        background: linear-gradient(to right, $blue-l 50%, $blue 50%, $blue);
      }
    }

    &:nth-child(2) {
      background-color: #bdbdbd;
      &::before {
        background: linear-gradient(to right, $magenta 50%, $pink 50%, $pink);
      }
    }

    &:last-child {
      background: #d9d9d9;
      border: none;

      &::before {
        background: linear-gradient(
          to right,
          $yellow 50%,
          $orange 50%,
          $orange
        );
      }
    }
  }
}
</style>
