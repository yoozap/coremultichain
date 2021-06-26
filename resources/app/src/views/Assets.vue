<template>
    <div class="body-container">
        <AssetsMainContainer />
    </div>
</template>

<script>
import AssetsMainContainer from "@/components/AssetsMainContainer.vue";

export default {
    name: "Assets",
    components: {
        AssetsMainContainer
    }
};
</script>
<style scoped>
.body-container {
    padding-left: 210px;
}
/*Ipad 768*/
@media (max-width: 1023px) {
    .body-container {
        padding-left: 180px;
    }
}
/*Mobile 320*/
@media (max-width: 767px) {
    .body-container {
        padding-left: 0px;
    }
}
</style>
