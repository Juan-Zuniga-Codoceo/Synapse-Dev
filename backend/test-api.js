const http = require('http');

const PORT = process.env.PORT || 5000;
const URL = `http://localhost:${PORT}/api/posts`;
// Set a test password for the verification script
const AUTH_TOKEN = 'TestPassword123';

async function testAPI() {
  try {
    console.log('--- Probando GET (Lista vacía esperada) ---');
    const getRes1 = await fetch(URL);
    console.log('GET Status:', getRes1.status);
    console.log('GET Body:', await getRes1.json());

    console.log('\n--- Probando POST sin Auth (Debe fallar 401) ---');
    const postFail = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test', content: 'C', date: '2023', slug: 's' })
    });
    console.log('POST no-auth Status:', postFail.status);

    console.log('\n--- Probando POST con Auth ---');
    const postSuccess = await fetch(URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': AUTH_TOKEN
      },
      body: JSON.stringify({ 
        title: 'Mi Primer Post', 
        content: '<p>Hola Mundo!</p>', 
        date: new Date().toISOString(), 
        slug: 'mi-primer-post',
        image: 'https://via.placeholder.com/150'
      })
    });
    console.log('POST auth Status:', postSuccess.status);
    const createdPost = await postSuccess.json();
    console.log('Post creado:', createdPost);

    console.log('\n--- Probando GET único ---');
    const getSingle = await fetch(`${URL}/${createdPost.id}`);
    console.log('GET único Status:', getSingle.status);
    console.log('GET único Body:', await getSingle.json());

    console.log('\n--- Probando DELETE con Auth ---');
    const delRes = await fetch(`${URL}/${createdPost.id}`, {
      method: 'DELETE',
      headers: { 'Authorization': AUTH_TOKEN }
    });
    console.log('DELETE Status:', delRes.status);
    console.log('DELETE Response:', await delRes.json());
    
    console.log('\n--- Probando GET final (Lista vacía esperada de nuevo) ---');
    const getResFinal = await fetch(URL);
    console.log('GET final Body:', await getResFinal.json());

  } catch (err) {
    console.error('Error de prueba:', err);
  }
}

testAPI();
