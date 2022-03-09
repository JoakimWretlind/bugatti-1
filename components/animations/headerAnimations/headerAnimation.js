import { useState } from "react";

const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)

    setArray(array.join(" "))


}