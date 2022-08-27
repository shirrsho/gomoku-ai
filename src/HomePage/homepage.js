import React from 'react'
import { Link } from "react-router-dom";
import './homepage.css';
import { FaRegPlayCircle } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="gomoku.png" alt="logo" id="logo"/>
                    <img src="chess.png" alt="board" id="board"/>
                </div>
                <div class="col-6">
                    <Link to="/board"><button class="btnd">PLAY <FaRegPlayCircle /></button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;

