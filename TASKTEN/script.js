console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
  console.log('wife: i have the tickets');
  console.log('husband: we should go in');
  console.log('wife: no, I am hungry');

  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});

const getButter = getPopcorn.then((t) => {
  console.log('husband: I got some popcorn');
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  return new Promise((resolve, reject) => {
    resolve(`${t} with butter`);
  });
});

const getColdDrinks = getButter.then((t) => {
  console.log('husband: I got the butter on the popcorn');
  console.log('husband: do you want any cold drinks, dear?');

  return new Promise((resolve, reject) => {
    resolve(`${t} and cold drinks`);
  });
});

getColdDrinks.then((t) => {
  console.log(t);
});

// Using async/await

(async () => {
  console.log('person1: shows ticket');
  console.log('person2: shows ticket');

  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000);
  });

  const t1 = await promiseWifeBringingTicks;
  console.log('wife: i have the tickets');
  console.log('husband: we should go in');
  console.log('wife: no, I am hungry');

  const t2 = `${t1} popcorn`;
  console.log('husband: I got some popcorn');
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  const t3 = `${t2} with butter`;
  console.log('husband: I got the butter on the popcorn');
  console.log('husband: do you want any cold drinks, dear?');

  const t4 = `${t3} and cold drinks`;

  const getColdDrinks = new Promise((resolve, reject) => {
    resolve(t4);
  });

  console.log(await getColdDrinks);
})();

// Handling Promise.all with async/await

(async () => {
  const promises = [
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
  ]})
