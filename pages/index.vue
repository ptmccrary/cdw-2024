<script setup>
const sections = ref([
  {
    id: 'past',
    title: 'Past'
  },
  {
    id: 'present',
    title: 'Present'
  },
  {
    id: 'future',
    title: 'Future'
  }
])

const activeSection = ref(null)

function setActiveSection(id) {
  activeSection.value = id
}
</script>

<template>
  <div class="page page--landing">
    <div class="background-image">
      <img src="/landing.jpg" alt="''" />
    </div>
    <div class="page__inner">
      <h1>IX Art Park</h1>
      <p>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
        mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo.
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Aenean lacinia bibendum nulla sed consectetur.
      </p>
      <div>
        <NuxtLink to="/explore" class="btn">Explore</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page--landing {
  background: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding-inline: 30px;
  text-align: center;
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
}

.page__inner {
  max-width: 750px;
  margin-inline: auto;
  position: relative;
  color: $white;

  h1 {
    font-size: 5.5rem;
    line-height: 1;
    margin-bottom: 5px;
  }

  p {
    text-wrap: balance;
    margin-bottom: 25px;
  }

  a {
    max-width: 150px;
    display: block;
    margin: 0 auto;
  }
}
</style>
