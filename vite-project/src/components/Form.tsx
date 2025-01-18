import { useState } from 'react';

function Form() {
  const [signUp, setSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (signUp) {
      fetch('../data/users.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: '',
          password: '',
        }),
      });
    }
  }

  return (
    <div className="formLog">
      <div>
        <button
          onClick={() => setSignUp((sig) => !sig)}
          className="registerButton text-1xl font-bold "
          disabled={signUp}
        >
          Register
        </button>
        <button
          onClick={() => setSignUp((sig) => !sig)}
          className="registerButton text-1xl font-bold "
          disabled={!signUp}
        >
          Login
        </button>
      </div>
      {signUp ? (
        <>
          <label>Email</label>
          <input
            type="email"
            placeholder="your_email@gmail.com"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />

          <label>Password</label>
          <input type="password" placeholder="****" />

          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            placeholder="re-type password"
          />
        </>
      ) : (
        <>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            placeholder="your_email@gmail.com"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
            placeholder=""
          />
        </>
      )}
      <button
        onClick={(e) => onSubmit(e)}
        className="text-1xl font-bold "
        disabled={false}
      >
        {signUp ? 'Create Account' : 'Login'}
      </button>
    </div>
  );
}

export default Form;
