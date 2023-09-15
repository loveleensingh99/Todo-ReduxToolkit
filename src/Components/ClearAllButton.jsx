import React from 'react'
import { clearAllTasks } from '../store/TaskSlice'
import { useDispatch } from 'react-redux'

const ClearAllButton = () => {
    const dispatch = useDispatch();


    const handleClearAll = () => {
        console.log('click');
        dispatch(clearAllTasks())
    }
    return (
        <>

            <button
                className="float-right px-4 py-2 my-4 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={handleClearAll}
            >
                Clear All
            </button>
        </>
    )
}

export default ClearAllButton