import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound(){
    const navigate = useNavigate();
    const HandleNavigate = () =>{
        navigate("/")
    }
    return (
        <div>
        <h1>Not Found!</h1>
        <h1 onClick={HandleNavigate}>goto home</h1>
    </div>
    );
}
