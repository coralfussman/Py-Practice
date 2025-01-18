import { useState } from 'react';
import coral_logo from '../assets/images/coral_logo.svg';
export default function Home() {
  const [count, setCount] = useState(0);
  const [col, setColor] = useState(false);
  return (
    <>
      <br />
      <h1>Save the Coral Reefs</h1>

      <button onClick={() => setCount((count) => count + 1)}>
        Commitments {count}
      </button>
      <img
        src={coral_logo}
        alt="coral"
        width="300"
        height="300"
        style={{ display: 'block', margin: '0 auto' }}
      />
      <button
        onClick={() => setColor((col) => !col)}
        style={{ backgroundColor: col ? '#ff485d' : '#9fffdc' }}
      >
        Click to Donate
      </button>

      <p>Thank you for your commitment to saving the coral reefs!</p>
    </>
  );
}
