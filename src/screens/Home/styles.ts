import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const BandList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const Band = styled.TouchableOpacity.attrs({
  elevation: 4,
})`
  align-self: center;
  width: 80%;
  padding: 30px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: 10px;
  border-color: #ddd;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #000;
`;
