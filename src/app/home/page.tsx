'use client';
import React, { useState } from 'react';
import './_page.scss';
import { PaginationNav } from 'carbon-components-react';
import Starship from '../../components/Starship/Starship';
import Notification from '../../components/Shared/Notification';
import { useQuery } from 'react-query';

export interface StarshipType {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  url: string;
}

const HomePage: React.FC = () => {
  const [notification, setNotification] = useState('');
  const [page, setPage] = useState(0);
  const { data, error, isLoading } = useQuery(['starships', page], () =>
    fetch(`https://swapi.dev/api/starships/?page=${page + 1}`).then((res) =>
      res.json()
    )
  );
  const starships = data?.results || [];
  const totalPages = data ? Math.ceil(data.count / 10) : 0;

  // const handleBuy = (name: string, quantity: number) => {
  const handleBuy = (name, quantity) => {
    setNotification(`${quantity} x ${name} added to your basket`);
  };

  const onCloseNotification = () => {
    setNotification('');
    return true;
  };

  return (
    <>
      {notification && (
        <Notification message={notification} onClose={onCloseNotification} />
      )}
      <div className="starship-list">
        {starships.map((starship) => (
          <Starship key={starship.name} starship={starship} onBuy={handleBuy} />
        ))}
      </div>
      <PaginationNav
        totalItems={totalPages}
        itemsShown={10}
        onChange={setPage}
        page={page}
        className="starship-pagination"
      />
    </>
  );
};

export default HomePage;
