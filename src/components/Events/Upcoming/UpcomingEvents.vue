<template>
  <!-- The array of events passed in will be displayed in this component.
      The only time the array will be empty is if the events have ended.
      In that case, then the app will notify the user that there are
      no events currently scheduled -->

  <v-container id="recent_events_section">
    <PageHeader>Upcoming Events</PageHeader>
    <v-row v-if="events.length">
      <v-col v-for="(event, i) in events" :key="i" cols="12" md="6" lg="4">
        <UpcomingEventCard v-if="Date.now() < event.date" :event="event" />
      </v-col>
    </v-row>
    <p v-else>
      There are no events scheduled at this time. Please check back soon, or
      feel free to email us at
      <a href="mailto:tcca.csulb@gmail.com">tcca.csulb@gmail.com</a> to see if
      we have any upcoming plans!
    </p>
    <center>
      <router-link to="/events" class="events_btn_hover">
        <v-btn x-large class="events_btn">View More Events</v-btn>
      </router-link>
    </center>
  </v-container>
</template>

<script>
import UpcomingEventCard from './UpcomingEventCard';
import PageHeader from '../../UI/Header/PageHeader';
import { august } from '../../Helpers/EventData';

const today = Date.now();
const allEvents = [...august];
const availableEvents = [];

/* Loop through all events. If the current event has not happened yet,
 then that event will be added to the availableEvents array

 Events are pushed to the front array rather than the back so that
 the most upcoming event will be displayed first
 */
for (let i = 0; i < allEvents.length; i++) {
  if (today < allEvents[i].date) {
    availableEvents.unshift(allEvents[i]);
  }
}

export default {
  components: {
    UpcomingEventCard,
    PageHeader,
  },
  data: () => ({
    events: availableEvents,
  }),
};
</script>

<style scoped>
#recent_events_section {
  width: 100%;
}
.recent_events_month {
  color: #3babd4;
}
.events_btn {
  margin: 3rem 0px;
}
.events_btn_hover:hover {
  text-decoration: none;
}
</style>
