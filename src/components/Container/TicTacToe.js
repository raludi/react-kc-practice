import React from "react"
import Game from "../Game"
import { connect } from "react-redux";


const mapStateToProps = state => ({
    table: state.board
}) 


const TicTacToe = ({ table }) => {
    return (
        <Game table= {table}/>
    )
}

export default connect(mapStateToProps)(TicTacToe);

