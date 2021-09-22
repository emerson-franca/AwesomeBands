import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const BandWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  align-items: center;
`;

export const BandInfoWrapper = styled.View`
  align-items: center;
`;

export const BandInfo = styled.Text`
  padding: 15px 0;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  margin-bottom: 20px;

  border-radius: 10px;
`;
