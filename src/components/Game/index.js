import React from "react";
import Cell from "../Cell";

const cellsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(''),
            playerNext: true
        };
        this.handleUpdateCell = this.handleUpdateCell.bind(this);
        this.resetTable = this.resetTable.bind(this);
    }

    handleUpdateCell(number) {
        const cellsCopy = this.state.cells.slice();
        if ((cellsCopy[number] != "X" && cellsCopy[number] != "O")) {
            cellsCopy[number] = this.state.playerNext ? "X" : "O";
            this.setState({
                cells: cellsCopy,
                playerNext: !this.state.playerNext
            });
        }
    }

    showWinner(winner) {
        return (
            <div className="reset-dialog">
                <h1>
                {(winner.length > 0 ? 
                `Ha ganado el jugador ${winner}`
                : "Te has quedado sin movimientos")}
                </h1>                    
                <button onClick={this.resetTable}>Reiniciar</button>
            </div>
        )
    }

    resetTable() {
        this.setState({
            cells: Array(9).fill(''),
            playerNext: true
        });
    }

    render() {
        const leftMoves = this.state.cells.find((v) => v === '')
        const winner = calculateWinner(this.state.cells);
        if (winner) {
            return (
                this.showWinner(winner)   
            )
        } else {
            if (leftMoves === undefined) {
                return (
                    this.showWinner('')
                )
            }
            return (
                <div>
                    <div className="historic">
                        {games.map(game => (
                            <button>{game}</button>
                        ))}
                    </div>
                    <div className="table-game">
                        {cellsArray.map(number => (
                            <Cell
                            key= {number}
                            position={number}
                            value={this.state.cells[number]}
                            onSelectedCell={this.handleUpdateCell}
                            />
                        ))}
                    </div> 
                </div>
            );
        }
            
    }

}

function calculateWinner(cells) {
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
}



export default Game;