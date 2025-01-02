import React, { useCallback, useState } from 'react'
import Age from './ex7Sub/Age';
import AgeInfo from './ex7Sub/AgeInfo';

const Ex7 = () => {
    const [age, setAge] = useState(10);

    const incrementAge = () => {
        setAge(age + 1);
    }

    const userAge = `React age is ${age} years`;

    const memoizedIncrementAge = useCallback(()=>{
        return userAge;
    }, [userAge]);
    
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col text-center">
                <h3 className="display-3">useCallback Hook</h3>
                <p>useCallback will return a memoized version of the callback that only changes if one of the inputs has changed</p>
            </div>
        </div>

        <hr />
        <Age age={age} ageHandler = {incrementAge}/>
        <hr />
        <AgeInfo ageInfo  = {memoizedIncrementAge}/>
    </div>
  )
}

export default Ex7