const test = async() => {
  try {
    await (await fetch('/.netlify/dist/test')).json();
  }
  catch(e) {
    console.log('ERROR', e)
  }
};

test();
