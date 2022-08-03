/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
    return (
        <button className="square"
                onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return (<Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : "O";
        this.setState({
                history: history.concat([{
                    squares: squares,
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,

            }
        );
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? `Перейти к ходу №${move}` : `К началу игры`;

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status;
        if (winner) {
            status = `Выиграл: ${winner}`
        } else {
            status = `Следующий ход: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);*/

import React from 'react';
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import './index.css';
import ReactDOM from "react-dom/client";
import './first.js';
import Basic from "./first.js";

// import './first.js';
// import HelloText from "./first";
// import ListOfName from "./first";
// import {names} from "./first";

//Рендер строки и картинки

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Basic></Basic>);

//Рендер списка

/*const names = ['Lisa', 'Anna', 'Mary'];

const ListItem = props => {
    return <li>{props.value}</li>

}

function ListOfName(props) {
    const names = props.names;
    const listItems = names.map((name) =>
        <ListItem key={name} value={name}/>);

    return (
        <ul>
            {listItems}
        </ul>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListOfName names={names}/>);*/

//

/*class Current extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.handleClick = this.handleClickIncrement.bind(this);
        this.handleClick = this.handleClickDecrement.bind(this);
    }


    handleClickIncrement() {
        this.setState(() => ({
            count: count++
        }))
    }

    handleClickDecrement() {
        this.setState(() => ({
            count: count--
        }))
    }


    render() {

        return (
            <div>
                <h1 {this.state.count}></h1>
                <button onClick={this.handleClickIncrement}>
                    +
                </button>
                <button onClick={this.handleClickDecrement}>
                    -
                </button>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Current/>);*/

//Инкремент и декремент

/*
function App() {

    // State to store count value
    const [count, setCount] = useState(0);

    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);
    };

    const decrementCount = () => {
        // Update state with incremented value
        setCount(count - 1);
    };

    return (
        <div className="app">
            <button onClick={incrementCount}>Click Here</button>
            <button onClick={decrementCount}>Click Here</button>
            {count}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
