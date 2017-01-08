<script>
import routes from '../routes';

export default {
  name: 'Router',
  computed: {
    ViewComponent () {
      const matchingView = routes[this.$root.currentRoute];
      return matchingView
        ? require('../pages/' + matchingView + '.vue')
        : require('../pages/404.vue');
    }
  },
  render (h) {
    return h(this.ViewComponent);
  }
};
</script>
