import React from "react";

export function NavBar(){

   return  <>
    <div className={'bg-white h-12 w-full fixed top-0 flex items-center justify-between'}>
        <h1 className="font-bold px-2">DEV SPEECH</h1>

        <ul className="flex w-2/5 justify-evenly">
            <li><a href="">Home</a> </li>
            <li><a href="">Account</a> </li>
            <li><a href=""> What is new</a></li>
            <li><a href=""> About us</a></li>
        </ul>
    </div>
    </>
}

