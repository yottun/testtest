<template>
  <CFooter :fixed="false">
    <div>
      <a href="#" target="_blank">eatas</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} eatas</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="#">eatas</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
