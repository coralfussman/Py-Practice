import { useHelpContext } from '../state/context';

import Card from './Card';

function Locations() {
  const { locations, search } = useHelpContext();
  const filteredList = locations.filter((loc) =>
    loc.name.toLowerCase().includes(search.toLowerCase())
  );
  const listItems = (search.length > 0 ? filteredList : locations).map(
    (loc) => (
      <Card
        key={loc.name}
        img={loc.img}
        name={loc.name}
        count={loc.volunteerCount}
      />
    )
  );
  return (
    <>
      <div className="cards">{listItems}</div>
    </>
  );
}

export default Locations;
