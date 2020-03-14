import moment from "moment";

export default [
  {
    id: 1,
    description: "gum",
    note: "",
    amount: 20,
    createdAt: 0
  },
  {
    id: 2,
    description: "rent",
    note: "",
    amount: 104500,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "creadit card",
    note: "",
    amount: 4500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
