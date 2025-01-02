import React, { useMemo, useState } from 'react'
import Age from './ex8Sub/Age';
import AgeInfo from './ex8Sub/AgeInfo';

const Ex8 = () => {
    const [age, setAge] = useState(30);

    const incrementAge = () => {
        setAge(age +1);
    }
    const updateAge = () => {
        return `my age is ${age} years`
    }

    useMemo(()=>{
        return updateAge();
    }, [updateAge]);

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col">
                <h5 className="display-3">useMemo Hook</h5>
                <p className="text-secondary">
                    useCallback returns the memorized callback response.
                </p>
                <p className="text-secondary">
                    useMemo will only recompute the memoized value when one of the deps has changed
                </p>
            </div>
        </div>

        <hr />

        <Age age = {age} ageHandler = {incrementAge}/>

        <hr />

        <AgeInfo updateAge = {updateAge}/>
    </div>
  )
}

export default Ex8