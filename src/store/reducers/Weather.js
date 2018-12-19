import * as actions from "../actions";

console.log("Weather reducer");

const initialState = {
    loading: false,
    weatherId: null,
    name: "",
    temperature: "",
    weather_state_name: "",
    latitude: null,
    longitude: null,
    data: {}
};

const toF = c => (c * 9) / 5 + 32;

const startLoading = (state, action) => {
    console.log("Weather loading");
    return { ...state, loading: true };
};

const weatherIDReceived = (state, action) => {
    console.log("Weather id");
    return { ...state, weatherId: action.id };
};

const weatherDataRecevied = (state, action) => {
    console.log("Weather data");
    const { data } = action;
    if (!data["consolidated_weather"]) return state;
    const weather = data.consolidated_weather[0];
    const { weather_state_name, the_temp } = weather;
    const { latt_long, title: name } = data;
    const [latitude, longitude] = latt_long.split(",");

    return {
        ...state,
        loading: false,
        latitude,
        longitude,
        temperatureinCelsius: the_temp,
        temperatureinFahrenheit: toF(the_temp),
        weather_state_name,
        name,
        data: action.data
    };
};

const handlers = {
    [actions.FETCH_WEATHER]: startLoading,
    [actions.WEATHER_ID_RECEIVED]: weatherIDReceived,
    [actions.WEATHER_DATA_RECEIVED]: weatherDataRecevied
};

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};