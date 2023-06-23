<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    setup() {
        useHead({
            title: 'Test app',
        })
    },
}
</script>
