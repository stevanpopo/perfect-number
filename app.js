$(() => {

  console.log('JS Loaded');

  function handleSubmit(){
    const integer = $('input').val();
    console.log(integer);
  }

  const $form = $('form');

  $form.submit(handleSubmit);

});
