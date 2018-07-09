'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    this.queue.unshift(animal);
    return this;
  }

  dequeue(pref) {
    const queueLength = this.queue.length - 1;
    if (!pref || this.queue.type === pref) {
      this.queue.pop();
      return this;
    } 
    for (let i = queueLength; i >= 0; i--) {
      if (this.queue[i].type === pref) {
        this.queue.splice(1, i);
        return this;
      }
    }
    return undefined;
  }
}

export default AnimalShelter;
