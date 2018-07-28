import React from "react";
import Cell from "../Cell";
import { connect } from "react-redux";
import { updateBoard } from "../../redux/actions"
import { resetBoard } from "../../redux/actions"

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

const mapDispatchToProps = dispatch => ({  
        updateBoard: index => dispatch(updateBoard(index)),
        resetBoard: () => dispatch(resetBoard())
})

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index) {
        this.props.updateBoard(index)
     }

    showWinner(winner) {
        return (
            <div className="reset-dialog">
                <h1>
                {(winner.length > 0 ? 
                `Ha ganado el jugador ${winner}`
                : "Te has quedado sin movimientos")}
                </h1>                    
                <button onClick={this.props.resetBoard}>Reiniciar</button>
            </div>
        )
    }

    checkMoves() {
        return this.props.table.find((v) => v === '');
    }

    render() {
        const winner = checkWinner(this.props.table);
        if (winner) {
            return (
                this.showWinner(winner)   
            )
        } else {
            if (this.checkMoves() === undefined) {
                return (
                    this.showWinner('') 
                )
            }
            return (
                <div className="table-game">
                {cellsArray.map(number => (
                    <Cell
                        key= {number}
                        position={number}
                        value={this.props.table[number]}
                        onSelectedCell={this.handleChange}
                    />
                ))}
                </div> 
            );
        }   

    }

}

function checkWinner(cells) {
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
}

export default connect(null, mapDispatchToProps)(Game);