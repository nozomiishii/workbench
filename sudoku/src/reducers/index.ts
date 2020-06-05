import reducer from "./reducer";
export * from "./actions";
export * from "./interfaces";

export type Ireducer = ReturnType<typeof reducer>;

export default reducer;
