import { useState } from 'react'
import DutyApi from '../api/DutyApi'

const Input = () => {
    const [duty, setDuty] = useState('')

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const onSubmitForm = async (e: any) => {
        e.preventDefault()

        DutyApi.createDuty(duty)
            .then(() => {
                window.location.href = '/'
            })
            .catch(err => console.error((err as Error).message))
    }

    return (
        <>
            <h1 className="text-center">Duty List</h1>
            <form action="" className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={duty} onChange={e => setDuty(e.target.value)} />&nbsp;
                <button className="btn btn-success rounded-right">Add</button>
            </form>
        </>

    )
}

export default Input