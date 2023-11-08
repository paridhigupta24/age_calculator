import React, { useState } from 'react';

const App = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (birthdate) {
            const birthdateTimestamp = new Date(birthdate).getTime();
            const nowTimestamp = Date.now();
            const ageMilliseconds = nowTimestamp - birthdateTimestamp;
            const ageDate = new Date(ageMilliseconds);
            const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
            setAge(calculatedAge);
        }
    };

    return (
        <div className="text-center flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Age Calculator</h1>
            <div className="flex justify-center items-center flex-col">
                <label htmlFor="birthdate" className="mb-2">
                    Enter Your Birthdate:
                </label>
                <input
                    type="date"
                    id="birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded-md"
                />
                <button
                    onClick={calculateAge}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Calculate Age
                </button>
                {age !== null && (
                    <div className="mt-4">
                        <p className={'text-lg font-bold'}>Your Age is: {age} years</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;