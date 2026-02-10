const LOCAL_STORAGE_KEY = 'tshirtOrdersData';

export const saveOrders = function(orders) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Data Saved to Local Storage! Look at you go!');
    } catch (error) {
        console.error(`Error saving to local storage ${error}`);
    }
};


export const loadOrders = function () {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(dataString) {
            return JSON.parse(dataString);
        }
            return[];
    } catch (e) {
        console.error(`Error loading orders from localStorage ${e}`)
        locasStorage.removeItem(LOCAL_STORAGE_KEY);
    }
};

