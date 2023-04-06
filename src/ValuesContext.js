import { createContext } from "react";
const ValuesContext = createContext({
    tableValues: [],
    setTableValues: () => {},
});
export default ValuesContext;