export default socket => store => next => (action) => {
    if (action.meta && action.remote) {
        socket.emit('action', action);
    }
    return next(action);
};
