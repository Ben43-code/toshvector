# Créer un fichier `app.js` (API basique)
cat > app.js <<EOF
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello LAB 3!'));
app.listen(3000, () => console.log('API running on port 3000'));
EOF

# Ajouter un test unitaire (ex: avec Jest)
npm install --save-dev jest
cat > test.js <<EOF
const app = require('./app');
const request = require('supertest');

test('GET / returns "Hello LAB 3!"', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello LAB 3!');
});
EOF

# Modifier `package.json` pour ajouter le script de test
sed -i '/"test":/d' package.json  # Supprimer la ligne test existante si elle existe
sed -i '/"scripts":/a \    "test": "jest"' package.json
