import React from "react";
import bands from "../../data/bands.json";
import { LinearGradient } from "expo-linear-gradient";

import { Band, BandList, Container, Header, Separator } from "./styles";

import { AsyncStorage, Text } from "react-native";

type Band = {
  name: string;
  id: string;
};

const BANDS: Band[] = bands.bands;

export function Home(props) {
  const handleClick = async (id) => {
    const bandDetails = await AsyncStorage.getItem(id);

    if (bandDetails) {
      props.navigation.navigate("Details", JSON.parse(bandDetails));
    } else {
      fetch(
        `https://iws-brazil-labs-iws-recruiting-bands-mobile.iwsbrazil.io/api/bands/${id}`
      )
        .then((resp) => resp.json())
        .then(async (bandDetails) => {
          await AsyncStorage.setItem(id, JSON.stringify(bandDetails));
          props.navigation.navigate("Details", bandDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <LinearGradient style={{ flex: 1 }} colors={["#464769", "transparent"]}>
        <Header>
          <Text>AWESOME BANDS</Text>
        </Header>

        <BandList
          data={BANDS}
          style={{ flex: 1, width: "100%" }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Band onPress={() => handleClick(item.id)}>
              <Text>{item.name}</Text>
            </Band>
          )}
        />
      </LinearGradient>
    </Container>
  );
}
