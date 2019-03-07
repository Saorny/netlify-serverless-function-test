const axios = require('axios');

exports.handler = function(event, context, callback) {

  // const { API_URL, API_CLIENT_ID, API_CLIENT_SECRET } = process.env;
  // const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;
  //
  // const send = (body) => {
  //   console.log('C')
  //   try {
  //     console.log('D')
  //     console.log(body)
  //     callback(null, {
  //       statusCode: 200,
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //       },
  //       body: JSON.stringify({res: 'ok'})
  //     })
  //   }
  //   catch(e) {
  //     console.log('ERROR', e)
  //   }
  // };


  // const getUsers = () => {
  //   console.log('B')
  //   try {
  //     axios.get(URL)
  //       .then(res => send(res.data))
  //       .catch(err => send(err));
  //     }
  //     catch(e) {
  //       console.log('FATAL ERROR', e)
  //     }
  // }

  if (event.httpMethod == 'GET') {
    console.log('A')
    // getUsers();
  }
}
