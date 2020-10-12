const test = 'i am learning TDD';

const capitalizeFirstLetters = (test) => {
  let tempArray = test.split(' ');
  let output = '';
  if (test === '') {
    return test;
  } else if (tempArray.length === 1) {
    return test[0].toUpperCase() + test.slice(1);
  } else if (tempArray.length > 1) {
    output = tempArray.map((word) => word[0].toUpperCase() + word.slice(1));
    return output.join(' ');
  }
};

module.exports = capitalizeFirstLetters;
