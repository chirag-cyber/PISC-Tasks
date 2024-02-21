import {useEffect, useState} from "react";

export default function Weather() {

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=8826c0464a0cbe77756742c5a063027f`

    const [temp, setTemp] = useState(0);
    const [deg, setDeg] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setTemp(data.main.temp);
                setDeg(data.main.feels_like);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
                <h1>Temp in london:{temp}F</h1>
                <h1>Feels like:{deg}F</h1>
        </div>
    )
}