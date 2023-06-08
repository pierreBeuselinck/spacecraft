import React from "react";
import { Card, Text } from "react-native-paper";

import { useImage } from "../hooks/useImage";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
}

export function Cardproduct(props: StarshipCardProps) {
  const { name, model, cost_in_credits, crew, hyperdrive_rating } = props;
  const image = useImage(name);

  return (
    <Card
    >
      <Card.Cover source={image} />
      <Card.Title title={name} subtitle={model} />
      <Card.Content>
        <Text>Crew : {crew}</Text>
        <Text>HR : {hyperdrive_rating}</Text>
        <Text>Cost in credits : {cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};

