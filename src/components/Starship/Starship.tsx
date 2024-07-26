import React, { useState } from 'react';
import { Column, Grid, Button } from '@carbon/react';
import { StarshipType } from '../../app/home/page';
import { NumberInput } from 'carbon-components-react';

export interface StarshipProps {
  starship: StarshipType;
  onBuy: (name: string, quantity: number) => void;
}

const Starship: React.FC<StarshipProps> = ({ starship, onBuy }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleBuy = () => {
    onBuy(starship.name, quantity);
  };

  const handleChange = (e, { value }) => {
    setQuantity(value);
  };

  return (
    <Grid className="starship" fullWidth>
      <Column lg={16} md={8} sm={4}>
        <h1 className="starship__title">{starship.name}</h1>
        <p className="starship__p">
          <strong>Model:</strong> {starship.model}
        </p>
        <p className="starship__p">
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p className="starship__p">
          <strong>Cost:</strong> {starship.cost_in_credits} credits
        </p>
        <Grid className="starship__button-group">
          <Column lg={2} md={2} sm={2} className="starship__number-input">
            <NumberInput
              id={`quantity-${starship.name}`}
              min={1}
              value={quantity}
              onChange={handleChange}
              size="lg"
            />
          </Column>
          <Column lg={2} md={2} sm={2}>
            <Button
              onClick={handleBuy}
              size="lg"
              className="starship__buy-button">
              BUY
            </Button>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default Starship;
