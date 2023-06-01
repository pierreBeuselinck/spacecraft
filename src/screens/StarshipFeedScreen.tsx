import React from "react";
import { StyleSheet, StatusBar, View, FlatList, Text } from "react-native";
import {Card} from 'react-native-paper';

import { default as data } from "../../api/data.json";

export const StarshipFeedScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <FlatList
                    data={data.results}
                    renderItem={({ item, index }) => 
                    <Card mode="contained">
                        <Card.Title title={item.name} subtitle={item.model} />
                        <Card.Content>
                            <Text>{item.crew}</Text>
                            <Text>{item.hyperdrive_rating}</Text>
                            <Text>{item.cost_in_credits}</Text>
                        </Card.Content>
                    </Card>}
                    keyExtractor={(item, index) => item.name + '-' + index}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    },
    headerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});