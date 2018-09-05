$(() => {
  console.log('JS Loaded');

  // grab html elements for manipulation later
  const $form = $('#form');
  const $answer = $('#answer');

  // call handle submit function when form is submitted
  $form.submit(function(event){
    event.preventDefault();
    handleSubmit();
  });

  // create getClassification function that will return correct response based on user inputted integer
  function getClassification(integer) {
    // error catchers
    if(isNaN(integer)) return 'Sorry, you need to input a number to get a correct evaluation.';
    if(integer < 0) return 'Sorry, you must input a positive number to get a correct evaluation.';

    const aliquot = [];
    // check each of the divisors. Can stop at int/2 for performance
    for(let i = 1; i <= integer/2; i ++){
      // if proper divisor push into array
      if(integer % i === 0) aliquot.push(i);
    }

    // sum numbers in array to find aliquotSum
    const aliquotSum = aliquot.reduce((a, b) => a + b);

    // return correct answer
    if (aliquotSum > integer) return 'Abundant';
    else if (aliquotSum < integer) return 'Deficient';
    else return 'Perfect';
  }

  // given returned answer, output answer on screen
  function handleSubmit(){
    const integer = $('#input').val();
    $answer.text('Answer: '+getClassification(integer));
  }
});
