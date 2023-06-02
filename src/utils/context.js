import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {

    const [comment, setComment] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [audio, setAudio] = useState("");
    const [objectData, setObjectData] = useState({});

    return (
        <Context.Provider
            value={{
                comment,
                setComment,
                selectedValue,
                setSelectedValue,
                audio,
                setAudio,
                objectData,
                setObjectData,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
