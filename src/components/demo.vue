<template>
    <div> {{ env }} </div>
    
</template>

<script>
export default {
    props:{
        env: {
            type: String,
            default: 'Hello World'
        }
    }
}
</script>