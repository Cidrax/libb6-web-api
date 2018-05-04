import React, { Component } from 'react';
const socketReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case 'BATTERY_CONNECTION_STATUS': {
            newState = {...state, BATTERY_CONNECTION_STATUS: action.payload };
            break;
        }
        case 'BATTERY_SOCKET_CONNECTION_STATUS': {
            newState = {...state, BATTERY_SOCKET_CONNECTION_STATUS: action.payload };
            break;
        }
        case 'BATTERY_CHARGING_STATUS': {
            newState = {...state, BATTERY_CHARGING_STATUS: action.payload };
            break;
        }
    }
    return newState;
};
export default socketReducer;