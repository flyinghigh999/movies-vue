<template>
    <div>
        <h2>Welcome to use movies-admin</h2>
    </div>
</template>
<script>
export default {
    name: 'welcome',
    mounted: function() {
        // this.$parent.activeSidebar("welcome-sidebar");
        this.$emit('select',"welcome-sidebar")
    }
}
</script>