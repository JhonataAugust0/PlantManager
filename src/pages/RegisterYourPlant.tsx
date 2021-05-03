import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Header } from "../components/Header";

export function RegisterYourPlant() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.subtitle}>Página em desenvolvimento!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
});
