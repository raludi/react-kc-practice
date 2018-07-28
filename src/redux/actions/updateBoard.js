const updateBoard = function(index) {
    return { 
        type: "UPDATE_BOARD",
        index: index
    }
}
export default updateBoard;