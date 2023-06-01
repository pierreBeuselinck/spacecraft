import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.titleWrapper}>
        <Text variant="displayMedium">{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    titleWrapper: {
      minHeight: 200,
      width: '100%',
      backgroundColor: 'purple',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });