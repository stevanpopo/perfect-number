$(() => {

  console.log('JS Loaded');

  function getClassification(integer) {
    // returns 'perfect', 'abundant', or 'deficient'
    console.log('in classification');
    const aliquot = [];
    for(let i = 1; i <= integer/2; i ++){
      // console.log(i); goes through all even though max half
      if(integer % i === 0) aliquot.push(i);
    }

    const aliquotSum = aliquot.reduce((a, b) => a + b);

    console.log(integer, aliquot, aliquotSum);
    if (aliquotSum > integer) return 'Abundant';
    else if (aliquotSum < integer) return 'Deficient';
    else return 'Perfect';
  }

  function handleSubmit(){
    const integer = $('input').val();
    // console.log(getClassification(integer));
  }

  const $form = $('form');
  $form.submit(handleSubmit);

});
