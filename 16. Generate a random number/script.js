function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  let result = getRandomInt(1,100);
  console.log(result);