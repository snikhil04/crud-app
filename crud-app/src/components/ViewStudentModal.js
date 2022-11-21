import React,{useEffect} from 'react'

function ViewStudentModal(props) {

    console.log(props)
    const handleButtonEvent = () => {
        document.getElementById('btn34').click();
    }

    useEffect(() => {
      handleButtonEvent();
    }, [])
    
    return (
        <>
            <button type="button" style={{display : 'none'}} id='btn34' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" onClick={e => props.handleCancel(e)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={e => props.handleCancel(e)} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={e => props.handleOk(e)}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewStudentModal