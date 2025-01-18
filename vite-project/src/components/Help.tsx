import { HelpContext } from '../state/context';
import Locations from './Locations';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import SiteModel from './SiteModel';

import api from '../../api';

interface Location {
  id: number;
  name: string;
  volunteerCount: string;
  img: string;
}

function Help() {
  const icons = {
    instagram:
      'https://images.credly.com/images/14029cdf-871d-49ed-907e-818254d87d6f/free-instagram-icon-hq-png-3.png',
    facebook:
      'https://www.iconarchive.com/download/i103484/paomedia/small-n-flat/social-facebook.1024.png',
    linkedin: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  };
  const iconCollection = Object.entries(icons).map(([icon, value]) => {
    return <img key={icon} alt={icon} src={value} width="50px" />;
  });

  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  //   const [locations, setLocations] = useState([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get('/');
        if (response.data && response.data.length > 0) {
          setLocations(response.data);
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
        // No need for fallback since we initialized with locationsList
      }
    };

    fetchLocations();
  }, []);

  function onClose() {
    setModal(!modal);
  }
  return (
    <div>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <button onClick={onClose}>x</button>
            <SiteModel />
          </div>
        </div>
      )}
      <HelpContext.Provider value={{ search, setSearch, locations }}>
        <div className="search flex m-10 mt-20 columns-1 justify-start">
          <h2>Step 1: Find your Nearest Project </h2>
          <SearchBar />
          <button onClick={() => setModal(!modal)}>Submit a new Site</button>
        </div>
        <Locations />
        <h2>Step 2: Connect with local groups on social media</h2>
        <div className="socials">{iconCollection}</div>
      </HelpContext.Provider>
    </div>
  );
}

export default Help;
