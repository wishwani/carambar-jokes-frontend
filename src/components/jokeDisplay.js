import React, { useState } from 'react';
import axios from 'axios';

const JokeDisplay = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://carambar-jokes-api-cf5j.onrender.com/jokes/random');
      setJoke(response.data.text);
    } catch (err) {
      setError('Impossible de récupérer une blague. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Carambar & Co Jokes</h1>
      <button onClick={fetchRandomJoke} style={{ margin: '20px', padding: '10px 20px' }}>
      Obtenez une blague au hasard
      </button>
      {loading && <p>Chargement...</p>}
      {joke && <p style={{ fontSize: '20px', fontStyle: 'italic' }}>{joke}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default JokeDisplay;
