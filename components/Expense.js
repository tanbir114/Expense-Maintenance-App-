import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

const Expense = ({
  id,
  title,
  date,
  onEditFormOpen,
  onRemove,
  onToggleRunning,
}) => {
  return (
    <View style={styles.expenseContainer}>
      <Text style={styles.title}>Expense: {title}</Text>
      <Text style={styles.date}>Date: {date}</Text>
      <View style={styles.buttonGroup}>
        <Button color="blue" small title="edit" onPress={onEditFormOpen} />
        <Button
          color="blue"
          small
          title="Remove"
          onPress={() => onRemove(id)}
        />
      </View>
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
  expenseContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    paddingTop: 40,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 22,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    fontSize: 14,
    textAlign: "center",
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
