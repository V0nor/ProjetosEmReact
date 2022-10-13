import React, { useState, useEffect } from 'react';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { Tours } from '../Tours';

const url = 'https://course-api.com/react-tours-project';

export function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <Error />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1 className="title">Vazio</h1>
        <div className="underline"></div>
        <button className="refresh__btn" onClick={fetchTours}>
          Atualizar
        </button>
      </main>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
      <button
        className="tour__btn"
        onClick={() => {
          setTours([]);
        }}
      >
        Limpar
      </button>
    </div>
  );
}
