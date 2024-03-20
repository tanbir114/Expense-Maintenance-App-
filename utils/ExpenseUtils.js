export const newExpense = (attrs) => {
  const randomId = Math.floor(Math.random() * 1000000);
  const expense = {
    title: attrs.title || "Expense",
    date: attrs.date || "Date",
    id: randomId,
    elapsed: 0,
    isRunning: false,
  };

  return expense;
};
