import { useState } from 'react';

import api from '../../api';

function SiteModel() {
  const [siteForm, setSiteForm] = useState({
    name: '',
    volunteerCount: '',
    img: '',
  });
  const [submit, setSubmit] = useState(false);

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post('/create', {
        name: siteForm.name,
        volunteerCount: siteForm.volunteerCount,
        img: siteForm.img,
      });

      if (response.status === 200 || response.status === 201) {
        setSubmit(true);
        setSiteForm({
          name: '',
          volunteerCount: '',
          img: '',
        });
      }
    } catch (error) {
      console.error('Error submitting site:', error);
      // You might want to add error handling state and UI here
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const { name, value } = e.target;
    setSiteForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      {submit ? (
        <div className="modal-form">
          <h2>Location added successfully </h2>
          <button className="modal-form" onClick={() => setSubmit(!submit)}>
            Add Another Location
          </button>
        </div>
      ) : (
        <>
          <h2>Add a Site</h2>
          <form className="modal-form" onSubmit={(e) => handleForm(e)}>
            <label>Site Name</label>
            <input
              name="name"
              value={siteForm.name}
              onChange={(e) => handleChange(e)}
              placeholder="name"
            ></input>
            <label>Volunteer Effort</label>
            <input
              name="volunteerCount"
              value={siteForm.volunteerCount}
              onChange={(e) => handleChange(e)}
            ></input>
            <label>Image URL</label>
            <input
              name="img"
              value={siteForm.img}
              onChange={(e) => handleChange(e)}
            ></input>
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default SiteModel;
