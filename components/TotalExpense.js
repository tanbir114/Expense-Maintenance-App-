import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

const TotalExpense = ({ expense, per_day_expense }) => {
  return (
    <View style={styles.expenseContainer}>
      <Text style={styles.title}>Total Expense: {expense}</Text>
      <Text style={styles.date}>Per Day Expense: {per_day_expense}</Text>
    </View>
  );
};

export default TotalExpense;

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
