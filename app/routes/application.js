import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create() {
      const user = this.store.createRecord("user", {
        name: "Tomasz"
      });
      const event = this.store.createRecord("event", {
        name: "New Test event"
      });
      event.get("users").addObject(user);
      event.save();
    }
  }
});
