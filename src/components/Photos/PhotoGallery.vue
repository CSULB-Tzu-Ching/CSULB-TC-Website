<template>
  <div class="gallery_section">
    <h2
      class="event_namedate_header"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {{ event.name }}, {{ event.date }}
    </h2>
    <AnimateFadeIn>
      <v-row>
        <v-col
          v-for="photo in event.photos"
          :key="photo"
          cols="6"
          lg="4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <PhotoCard :photo="photo" />
        </v-col>
      </v-row>
    </AnimateFadeIn>
  </div>
</template>

<script>
import PhotoCard from './PhotoCard.vue';
import AnimateFadeIn from '../Animations/AnimateFadeIn';

export default {
  components: {
    PhotoCard,
    AnimateFadeIn,
  },
  props: {
    event: Object,
  },
};
</script>

<style>
.event_namedate_header {
  color: #34be82;
}
.gallery_section {
  margin: 3rem 0px;
}
</style>
