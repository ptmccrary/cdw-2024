<script setup>
const navLinks = ref([
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'events',
    title: 'Events'
  },
  {
    id: 'support',
    title: 'Support the Park'
  }
])
</script>

<template>
  <header class="site-header">
    <div class="nav__inner">
      <NuxtLink to="/" class="sitename">
        <span class="brandmark">IX</span>
        <hr />
        <span>Art Park</span>
      </NuxtLink>
      <nav>
        <ul>
          <li v-for="(link, i) in navLinks" :key="link.id">
            <a
              href="#"
              :class="['nav__link', { btn: i === navLinks.length - 1 }]"
              >{{ link.title }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  background-color: $black;
  width: 100%;
}

.nav__inner {
  min-height: var(--header-height);
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-inline: 30px;
}

.sitename {
  align-items: center;
  display: flex;
  gap: 10px;
  color: $white;
  text-decoration: none;
  max-width: 120px;

  hr {
    border: none;
    height: 30px;
    width: 1px;
    background: $white;
  }
}

nav {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin-inline: 30px;
  }

  a {
    color: $white;

    &:hover,
    &:focus-visible {
      text-decoration: none;
    }
  }

  .btn {
    background: $purple-l;

    &:hover,
    &:focus-visible {
      background: $purple-d;
    }
  }
}
</style>
