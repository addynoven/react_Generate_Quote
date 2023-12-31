import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
    const [AllQuote, setAllQuote] = useState(null);
    const [Quote, setQuote] = useState(" Try using an old idea.");

    const btn_style = {
        backgroundColor: "rgb(100, 182, 172)",
    };
    useEffect(() => {
        api_caller();
    }, []);
    async function api_caller() {
        try {
            const res = (await Axios.get("https://type.fit/api/quotes")).data;
            await setAllQuote(res);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    const handler_fun = () => {
        setQuote(AllQuote[Math.round(Math.random() * 17)].text);
    };

    return (
        <>
            <div className="w-screen h-screen bg-red-200 flex justify-center items-center">
                <div className="w-1/2 h-2/3 p-5 bg-white rounded-3xl flex justify-center items-center flex-col gap-9">
                    <button
                        style={btn_style}
                        className="px-6 py-5 rounded-xl shadow-xl uppercase text-xl font-bold text-white "
                        onClick={handler_fun}
                    >
                        generate quote
                    </button>
                    <div
                        className="text-2xl bg-gray-100 rounded-md p-5"
                        style={{ fontFamily: "helvetica" }}
                    >
                        <q>{Quote}</q>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
