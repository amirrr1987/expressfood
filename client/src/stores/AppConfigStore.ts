import { defineStore } from 'pinia';

export const useAppConfigStore = defineStore('counter', {
  state: () => ({
    bar: null,
  }),
 
  actions: {
    trigger() {
      const barRef = this.bar
      barRef.start()
      setTimeout(() => {
        const barRef = bar.value
        if (barRef) {
          barRef.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  },
});
