import React from 'react'

function VisibleDta({clearAll , users}) {
    return (
        <>
            <>
                <div className="form-floating">
                    <div className="form-control" id="floatingTextarea"
                        style={{height: '700px'}}>
                <pre>
                    {JSON.stringify(users, null, 2)}
                </pre>
                    </div>
                </div>
            </>
    <button type='button' className='btn btn-warning' onClick={clearAll}>Clear All</button>
</>
)
}

export default VisibleDta
