<template>
  <h1>that seed</h1>
  <h2>Version: v{engine_v}/h2>
    <ul>
      <li>Backend: v{back_v}</li>
      <li>Frontend: {front_v}</li>
      <li>Skin: {skin_v}<li>
    </ul>
  <h1>Contributors</h1>
    <ul>
      <li><a href="//github.com/1ongames">iongames</a> (frontend & backend)</li>
      <li><a href="//github.com/uiovasot">uiovasot</a> (backend & render)
    </ul>
  <h2>Super Thanks</h2>
  <h1>Open Source License</h1>
</template>

<script lang="ts">
  export let engine_v: string;
  export let back_v: string;
  export let front_v: string;
  export let skin_v: string;
</script>
