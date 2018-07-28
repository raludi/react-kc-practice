
import { initialState } from "../initialState"


export const rootReducer  = (state= initialState, action) => {
    switch (action.type) {
        case "UPDATE_BOARD":
            const copyBoard = state.board.slice();
            const index = action.index;
            if ((copyBoard[index] != "X" &&copyBoard[index] != "O")) {
                copyBoard[index] = state.player ? 'X' : 'O';
                return {
                    ...state,
                    player: !state.player,
                    board: copyBoard
                }
            } else {
                return state;
            }
        case "RESET_BOARD":
            return {
                ...initialState
            }
        default:
            return state;
    }
}
