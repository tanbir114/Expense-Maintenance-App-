import { Text, View, StyleSheet, ScrollView } from "react-native";
import * as Crypto from "expo-crypto";
import { useState, useEffect } from "react";

import EditableExpense from "./components/EditableExpense";
import ToggleableForm from "./components/ToggleableForm";
import { newExpense } from "./utils/ExpenseUtils";
// import ClassButton from "./components/ClassButton";
import Expense from "./components/Expense";
import TotalExpense from "./components/TotalExpense";

const TIME_INTERVAL = 1000;

const App = () => {
  const [expenses, setexpenses] = useState([
    {
      title: 112,
      date: "18 March 2024",
      id: 10000,
    },
  ]);

  const [totalExpense, setTotalExpense] = useState(0);
  const [expensePerDay, setExpensePerDay] = useState(0);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let total = 0;

    let startDate = null;
    let endDate = null;

    expenses.forEach((expense) => {
      total = total + parseInt(expense.title);

      const parts = expense.date.split(" ");
      const month = parts[1];
      const day = parseInt(parts[0]);
      const year = parseInt(parts[2]);

      const currentDate = new Date(year, months.indexOf(month), day);

      if (!startDate || currentDate <= startDate) {
        startDate = currentDate;
      }
      if (!endDate || currentDate >= endDate) {
        endDate = currentDate;
      }
    });

    console.log(startDate, endDate);
    setTotalExpense(total);

    if (startDate && endDate) {
      const totalTimeDiff = endDate.getTime() - startDate.getTime();
      const totalDays = totalTimeDiff / (1000 * 3600 * 24) + 1;
      console.log(totalTimeDiff);
      console.log(totalDays);
      const avgExpensePerDay = total / totalDays;
      setExpensePerDay(avgExpensePerDay);
    } else {
      setExpensePerDay(0);
    }
  }, [expenses]);

  const handleCreateFormSubmit = (expense) => {
    setexpenses([newExpense(expense), ...expenses]);
  };

  const handleFormUpdate = (expenseP) => {
    setexpenses(
      expenses.map((expense) => {
        if (expense.id === expenseP.id) {
          return {
            ...expense,
            title: expenseP.title,
            date: expenseP.date,
          };
        }
        return expense;
      })
    );
  };

  const handleRemove = (expenseId) => {
    setexpenses(expenses.filter((t) => t.id !== expenseId));
  };

  const handleTogglerunning = (expenseId) => {
    setexpenses(
      expenses.map((expense) => {
        if (expense.id === expenseId) {
          return {
            ...expense,
          };
        }

        return expense;
      })
    );
  };

  // const [tt,setTt] = useState('Atiq')

  // const handleBack = () => {
  //   tt == "Atiq" ? setTt("Rahman") : setTt("Atiq")
  // }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Expense Tracker</Text>
      </View>
      <ScrollView style={styles.expenseList}>
        <ToggleableForm isOpen={false} onFormSubmit={handleCreateFormSubmit} />
        <TotalExpense expense={totalExpense} per_day_expense={expensePerDay} />
        {expenses.map(({ title, date, id }) => (
          <EditableExpense
            key={id}
            id={id}
            title={title}
            date={date}
            onFormSubmit={handleFormUpdate}
            onRemove={handleRemove}
            onToggleRunning={handleTogglerunning}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  expenseList: {
    paddingBottom: 15,
  },
});
