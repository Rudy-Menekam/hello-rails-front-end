import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const greeting = useSelector((state) => state.greeting);
  return (
    <>
      <h1>
        Random Greetings
      </h1>
      <div>
        <h2>{greeting?.greeting}</h2>
      </div>
    </>
  );
}

export default Greeting;
