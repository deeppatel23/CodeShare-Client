import { io } from 'socket.io-client';
const BACKEND_URL = process.env.SERVER_URL || 'http://localhost:5004'

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    return io(BACKEND_URL, options);
};
