import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Button from "./Button";
import Form from "./Form";

export default function ToggleableForm({ onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    console.log("aaaaaaaaaaaaaaaaaaaa");
    setIsOpen(false);
  };

  const handleFormSubmit = (timer) => {
    onFormSubmit(timer);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <Form onFormClose={handleFormClose} onFormSubmit={handleFormSubmit} />
      ) : (
        <Button title="+" color="black" onPress={handleFormOpen} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
