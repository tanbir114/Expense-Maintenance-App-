import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";

import Button from "./Button";

export default Form = ({ id, title, date, onFormClose, onFormSubmit }) => {
  const submitText = id ? "update" : "create";

  const [stitle, setStitle] = useState(title);
  const [sdate, setSdate] = useState(date);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDate(today);

    setSdate(formattedDate);
  }, []);

  const handleTitle = (tt) => {
    setStitle(tt);
  };

  const handleDate = (pp) => {
    setSdate(pp);
  };

  const handleSubmit = () => {
    onFormSubmit({
      id: id,
      title: stitle,
      date: sdate,
    });

    setSdate("");
    setStitle(0);

  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Expense</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleTitle}
            value={stitle}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Date</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleDate}
            value={sdate}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#D6D7DA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
