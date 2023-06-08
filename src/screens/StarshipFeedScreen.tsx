import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";

import { Cardproduct } from "../components/Cardproduct";

async function fetchData() {
    const result = await fetch("https://swapi.py4e.com/api/starships/");
    const json = await result.json();
    return json;
}

export const StarshipFeedScreen = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["starships"],
        queryFn: fetchData,
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (isError) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <SafeAreaView>
    <FlatList
        data={data.results}
        renderItem={({ item, index }) => (
          <Cardproduct key={item.name + "-" + index} {...item} />
        )}
      />
        </SafeAreaView>
    );
};