const initialState = {
    servicies: {
        seo: false,
        ads: false,
        web: false,
    },
    pages: 1,
    languages: 1,
    totalPrice: 0,
};

function reducer(state, action){
    switch (action.type) {
        case "TOGGLE_SERVICE":
            const updatedServices = {
                ...state.services,
                [action.payload]: !state.services[action.payload],
            };
            return {
                ...state,
                services: updatedServices,
                totalPrice: calculateTotalPrice(updatedServices, state.pages, state.languages),
            };

        case "SET_PAGES":
            return {
                ...state,
                pages: action.payload,
                totalPrice: calculateTotalPrice(state.services, action.payload, state.languages),
            };
        case "SET_LANGUAGES":
            return {
                ...state,
                languages: action.payload,
                totalPrice: calculateTotalPrice(state.services, state.pages, action.payload),
            };
        default:
            return state;    
    }

    function calculateTotalPrice(services, pages, languages) {
        const webCost = services.web ? (pages + languages) * 30 : 0;
        return (
            (services.seo ? 300 : 0) +
            (services.ads ? 400 : 0) +
            (services.wev ? 500 : 0) +
            webCost
        );
    }
}