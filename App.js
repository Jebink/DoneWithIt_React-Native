import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View, TextInput, Text } from "react-native";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [value, setvalue] = useState(false);
  const categories = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Cameras",
      value: 3,
    },
  ];
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email " placeholder="Email" />
    </Screen>
  );
  // return <WelcomeScreen />;
}
