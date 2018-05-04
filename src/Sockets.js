import React, { Component } from 'react';
import * as consts from './constants/SocketConsts';
import store from './redux-observable/reducers/Index';
import io from 'socket.io-client';

const Sockets = () => {
    let batteryStatusSocket = io(consts.SOCKET_SERVER + '/batteryStatus');   

    batteryStatusSocket.on('connect', () => {
        store.dispatch({type: 'BATTERY_CONNECTION_STATUS', payload: batteryStatusSocket.connected});
    });

    batteryStatusSocket.on('disconnect', msg => {        
        store.dispatch({type: 'BATTERY_CONNECTION_STATUS', payload: false});
    });

    batteryStatusSocket.on('connStatus', msg => {
        store.dispatch({type: 'BATTERY_SOCKET_CONNECTION_STATUS', payload: JSON.parse(msg)});        
    });

    batteryStatusSocket.on('updStatus', msg => {
        store.dispatch({type: 'BATTERY_CHARGING_STATUS', payload: JSON.parse(msg)});        
    });
}
export default Sockets;