"use client";
// import React, { useState, useCallback, useEffect } from "react";

// const page = () => {
//   const [length, setLength] = useState(6);
//   const [numberAllowed, setnumberAllowed] = useState(false);
//   const [charAllowed, setcharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [setLength, setPassword, setnumberAllowed, setcharAllowed]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);

//   return (
//     <>
//       <h1 className="flex text-2xl justify-center mt-5">Pass Generator</h1>

//       <div className="w-full max-w-lg mx-auto rounded-lg p-11 my-8 text-white bg-gray-600">
//         <div className="flex shadow mb-4">
//           <input
//             className="outline-none text-black w-full rounded-l-lg px-2 py-1"
//             type="text"
//             value={password}
//             placeholder="password"
//             readOnly
//           />

//           <button className="outline-none text-blue-500 text-sm px-1 rounded-r-md bg-white">
//             Copy
//           </button>
//         </div>

//         <div className="flex text-sm gap-x-2">
//           <div className=" flex items-center gap-x-1">
//             <input
//               type="range"
//               name=""
//               id="range"
//               min={6}
//               max={18}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label htmlFor="range">Length: {length}</label>
//           </div>

//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setnumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                 setcharAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

import { useState, useCallback, useEffect, useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast';


function App() {
    const tost = ()=>{
        toast.success('Copied to clipboard',
        {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        )
    }
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-52 bg-gray-800 ">
      <h1 className='text-white text-3xl text-center my-1'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={()=>{
            copyPasswordToClipboard()
                tost()
        }}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={18}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    <div><Toaster/></div>
</div>
    
  )
}

export default App
