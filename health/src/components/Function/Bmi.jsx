import React, { useState } from 'react';
import bmi from '../Images/bmi.png'

const BMICalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    let bmi = 0;
    if (unit === 'metric') {
      bmi = weight / ((height / 100) ** 2);
    } else {
      bmi = (weight / (height ** 2)) * 703;
    }

    let bmiCategory = '';
    if (bmi < 18.5) {
      bmiCategory = 'You are underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'You have a healthy weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'You are overweight';
    } else {
      bmiCategory = 'You are obese';
    }

    setResult(`Your BMI is ${bmi.toFixed(2)}. ${bmiCategory}`);
  };

  return (
    <div className="flex justify-evenly  h-screen ">
    
     <div className="bg-zinc-800 p-8 rounded shadow-custom w-[50%]">
        <h1 className="text-2xl font-bold mb-4 text-white">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block text-white">Age:</label>
          <input
            type="number"
            placeholder="2 Years to 120 Years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Gender:</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            <label className="mr-4 text-white">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            <label className="text-white">Female</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-white">Units:</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="unit"
              value="metric"
              checked={unit === 'metric'}
              onChange={(e) => setUnit(e.target.value)}
              className="mr-2"
            />
            <label className="mr-4 text-white">Metric (kg, cm)</label>
            <input
              type="radio"
              name="unit"
              value="us"
              checked={unit === 'us'}
              onChange={(e) => setUnit(e.target.value)}
              className="mr-2"
            />
            <label className="text-white">US (lbs, inches)</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-white">Weight:</label>
          <input
            type="number"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Height:</label>
          <input
            type="number"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
        >
          Calculate
        </button>
        <div className="mt-4 text-white">
          <h2 className="text-xl font-bold">Result</h2>
          <p>{result}</p>
        </div>
       
      </div>


      <div className='w-[30%]'> <center>  <br /><br /><br /><br /> <img className='w-[100%]' src={bmi} alt="" /></center></div>
    </div>
  );
};

export default BMICalculator;
