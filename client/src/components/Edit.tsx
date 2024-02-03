import { useState } from 'react'
import DutyApi from '../api/DutyApi'

type Duty = {
    id: number;
    name: string;
}

const Edit = (props: Duty) => {
    const [name, setName] = useState(props.name)

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const updateDuty = async (e: any) => {
        e.preventDefault()
        const body = { name }

        DutyApi.updateDuty(props.id, body)
            .then(() => {
                window.location.href = '/'
            })
            .catch(err => console.error((err as Error).message))
    }

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#duty-detail-${props.id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                &nbsp;Edit
            </button>

            <div className="modal" id={`duty-detail-${props.id}`} onClick={() => setName(props.name)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Duty</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setName(props.name)}></button>
                        </div>

                        <div className="modal-body">
                            <input type='text' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateDuty(e)}>Edit</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setName(props.name)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit