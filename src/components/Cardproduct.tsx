import { Card, Text } from "react-native-paper";

export const Cardproduct = ({ props }: { props: any }) => {
  return (
    <Card
    >
      <Card.Title title={props.name} subtitle={props.model} />
      <Card.Content>
        <Text>{props.crew}</Text>
        <Text>{props.hyperdrive_rating}</Text>
        <Text>{props.cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};