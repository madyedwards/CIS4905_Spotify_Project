import {useState} from 'react';
import React from 'react';
 
export default function  ControlledComponent()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
   <div className='form'>
		<form>
			<input  type="text"  
			value={inputValue} 
			onChange={handleChange} />
		</form>
	</div>
)};
