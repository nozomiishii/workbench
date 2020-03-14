import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("abc123", { note: "sexy" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      note: "sexy"
    }
  });
});

test("should setup add expense action object with default", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

test("should setup add expense action object with provides value", () => {
  const expenseData = {
    description: "rent",
    amount: 4000,
    createdAt: 1000,
    note: "yay"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
