<template>
  <section class="container" data-aos="fade-up">
    <div class="releases_section">
      <h2 class="releases_ttl font-51">Latest Releases</h2>
      <div class="releases_container">
        <router-link
          to="##"
          class="release_item"
          v-for="(release, index) in itemData"
          :key="index"
          @click.native="openSuccess"
          v-if="filterItems(release.topics)"
        >
          <div class="img_box">
            <img :src="require(`@/assets/img/releases/${release.img}`)" alt="" class="img_absolute" />
            <div class="item_topics">
              <div
                class="topic"
                v-for="(topic, index) in release.topics"
                :key="index"
              >
                {{ topic.name }}
              </div>
            </div>
          </div>
          <div class="release_details">
            <div class="release_ttl">
              {{ release.title }}
            </div>
            <div class="release-bottom__details">
              <div class="release_lvl">
                <div class="lvl_circle beginner"></div>
                {{ release.level }}
              </div>
              <div class="release_time">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M12.25 1.75H11.6667V0.583298C11.6667 0.261368 11.4053 0 11.0833 0H10.5C10.178 0 9.9167 0.261368 9.9167 0.583298V1.75H4.0833V0.583298C4.0833 0.261368 3.82204 0 3.5 0H2.9167C2.59467 0 2.3333 0.261368 2.3333 0.583298V1.75H1.75C0.785172 1.75 0 2.53517 0 3.5V12.25C0 13.2148 0.785172 14 1.75 14H12.25C13.2148 14 14 13.2148 14 12.25V3.5C14 2.53517 13.2148 1.75 12.25 1.75ZM12.8333 12.25C12.8333 12.5714 12.5714 12.8333 12.25 12.8333H1.75C1.4286 12.8333 1.1667 12.5714 1.1667 12.25V5.85669H12.8333V12.25Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {{ release.date }}
              </div>
              <div class="release_minutes">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C3.14026 0 0 3.14026 0 7C0 10.8597 3.14026 14 7 14C10.8597 14 14 10.8597 14 7C14 3.14026 10.8597 0 7 0ZM8.23773 9.47503L6.125 7.36229V3.49999H7.875V6.63769L9.47503 8.23772L8.23773 9.47503Z"
                    fill="white"
                  />
                </svg>
                {{ release.minutes }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        itemData: {
            type: Array
        }
    },
  data() {
    return {
        filter: null
    };
  },
    methods: {
        openSuccess () {
            this.$store.commit('setPageSuccess', true)
        },
        filterItems(topics){
            let findTopic = false;
            for(let i = 0; i < topics.length;i++){
                if(topics[i].name == this.$store.state.firstTopic || this.$store.state.firstTopic == null){
                    findTopic = true
                }
            }
            if(findTopic == true){
                return true
            }else{
                return false
            }
        }
    }
};
</script>

<style scoped>
.releases_section {
  margin-top: 100px;
  max-width: 1072px;
    width: 100%;
}
.releases_container {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.release_item {
  display: flex;
  flex-direction: column;
}
.release_item:nth-child(-n + 3) {
  width: calc(33.3% - 27.3px);
  margin-right: 41px;
  margin-bottom: 51px;
}
.release_item:nth-child(3) {
  margin-right: 0;
}
.release_item:nth-child(4) {
  width: calc(66.6% - 13.6px);
  margin-right: 41px;
}
.release_item:nth-child(5) {
  width: calc(33.3% - 27.3px);
}
.img_box {
  position: relative;
  /* padding-top: 65.16%; */
  height: 230px;
  overflow: hidden;
}
.img_absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.6s;
}
.release_item:hover img {
  transform: scale(1.1);
}
.release_details {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
}
.release_ttl {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 42px;
}
.release-bottom__details {
  display: flex;
  margin-top: auto;
}
.release-bottom__details * {
  font-size: 12px;
  text-transform: uppercase;
}
.release_lvl,
.release_time,
.release_minutes {
  display: flex;
  align-items: center;
}
.release_lvl,
.release_time {
  margin-right: 16px;
}
.lvl_circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #53704f;
  margin-right: 6px;
}
.release_time svg,
.release_minutes svg {
  margin-right: 6px;
}
.item_topics {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  flex-wrap: wrap;
}
.topic {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 4px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 22px;
  background: #fff;
  color: #00050f;
  cursor: pointer;
  transition: 0.6s;
}

@media (max-width: 1200px) {
  .releases_section {
    max-width: 752px;
  }
  .release_item:nth-child(-n + 4) {
    width: calc(50% - 15px);
    margin-bottom: 40px;
  }
  .release_item:nth-child(-n + 3) {
    margin-right: 0;
  }
  .release_item:nth-child(odd) {
    margin-right: 30px;
  }
  .release_item:nth-child(4) {
    margin-right: 0;
  }
  .release_item:last-child {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
  }
  .release_lvl,
  .release_time {
    margin-right: 10px;
  }
}
@media (max-width: 1023px) {
  .releases_section {
    margin-top: 70px;
  }
  .releases_container {
    margin-top: 30px;
  }
  .release_item:nth-child(-n + 4) {
    margin-bottom: 30px;
  }
  .release_ttl {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  .topic,
  .release-bottom__details * {
    font-size: 10px;
  }
  .topic {
    padding: 4px 8px;
  }
}
@media (max-width: 620px) {
  .releases_section {
    margin-top: 50px;
  }
  .release_item:nth-child(-n + 4) {
    width: 100%;
  }
  .release_item:nth-child(odd) {
    margin-right: 0px;
  }
}
</style>
