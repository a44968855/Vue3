import axios from 'axios';

export default ({
  strick: true,
  namespaced: true,
  state: {
    messages: [],
  },
  mutations: {
    MESSAGES(state, payload) {
      state.messages.push(payload);
    },
  },
  actions: {
    updateMessage(context, message) {
      const timestamp = Math.floor(new Date() / 1000);
      context.commit('MESSAGES', { ...message, timestamp });
      this.dispatch('message/removeMessageWithTiming', timestamp);
    },
    removeMessage(context, num) {
      context.state.messages.splice(num, 1);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.state.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
});
