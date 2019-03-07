// const fetchUsers = async() => {
//   try {
//     await (await fetch('/.netlify/functions/getusers')).json();
//   }
//   catch(e) {
//     console.log('ERROR', e)
//   }
// };

console.log('fetch users');
// fetchUsers()
//   .then(data => {
//     let userList = document.querySelector('#users');
//
//     data.forEach(user => {
//       const li = document.createElement('li');
//       const link = document.createElement('a');
//
//       li.class = 'list-group-item';
//       link.appendChild(document.createTextNode(user.login));
//       link.href = user.html_url;
//       link.target = '_blank';
//       li.appendChild(link);
//       userList.appendChild(li);
//     })
//   });
