<template>
    <div class="body-container academy-page">
        <AcademyMainContainer />
        <AcademyTopics />
        <AcademyReleases />
        <AcademyTradingMaterials />
        <AcademyTopics />
        <AcademyEssentials />
        <AcademyAuthors />
        <AcademyBanner />
        <AcademyBlockchain />
    </div>
</template>

<script>
import AcademyMainContainer from "@/components/AcademyMainContainer.vue";
import AcademyTopics from "@/components/AcademyTopics.vue";
import AcademyReleases from "@/components/AcademyReleases.vue";
import AcademyTradingMaterials from "@/components/AcademyTradingMaterials.vue";
import AcademyEssentials from "@/components/AcademyEssentials.vue";
import AcademyAuthors from "@/components/AcademyAuthors.vue";
import AcademyBanner from "@/components/AcademyBanner.vue";
import AcademyBlockchain from "@/components/AcademyBlockchain.vue";

export default {
    name: "BugBounty",
    components: {
        AcademyMainContainer,
        AcademyTopics,
        AcademyReleases,
        AcademyTradingMaterials,
        AcademyEssentials,
        AcademyAuthors,
        AcademyBanner,
        AcademyBlockchain
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
