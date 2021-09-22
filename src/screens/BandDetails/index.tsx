import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { BandInfo, BandWrapper, Container, Photo } from "./styles";

export function BandDetails({ route }) {
  const { genre, image, name, numPlays } = route.params;

  return (
    <Container>
      <LinearGradient style={{ flex: 1 }} colors={["#464769", "transparent"]}>
        <BandWrapper>
          <Photo
            source={{
              uri: image,
            }}
          />
          <BandInfo>{name}</BandInfo>
          <BandInfo>Genre: {genre}</BandInfo>
          <BandInfo>Number of plays: {numPlays}</BandInfo>
        </BandWrapper>
      </LinearGradient>
    </Container>
  );
}
