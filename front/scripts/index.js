const render = require("./render");
const axios = require("axios");

const main = async () => {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        const data = response.data;
        render(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

main();