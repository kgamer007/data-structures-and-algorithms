import AnimalShelter from '../fifo_animal_shelter';

describe('Animal Shelter class', () => {
  const dog = {
    type: 'dog',
  };
  
  const cat = {
    type: 'cat',
  };
  test('#enqueue adds objects to beginning of array', () => {
    const catDog = new AnimalShelter();
    
    catDog.enqueue(dog);
    catDog.enqueue(dog);
    catDog.enqueue(dog);
    catDog.enqueue(cat);
    catDog.enqueue(dog);
    expect(catDog.queue[0].type).toEqual('dog');
  });
  test('#dequeue removes from end of array', () => {
    const catDog = new AnimalShelter();

    catDog.enqueue(dog);
    catDog.enqueue(cat);
    catDog.enqueue(cat);
    catDog.dequeue(dog);
    expect(catDog.queue[1].type).toEqual('cat');
  });
  test('#dequeue with no pref removes longest waiting animal from end of array', () => {
    const catDog = new AnimalShelter();

    catDog.enqueue(dog);
    catDog.enqueue(cat);
    catDog.enqueue(dog);
    catDog.dequeue();
    expect(catDog.queue[1].type).toEqual('cat');
  });
});
