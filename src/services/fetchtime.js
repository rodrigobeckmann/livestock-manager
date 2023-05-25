export const fetchTime = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Bahia');
    const data = await response.json();

    return data;
}