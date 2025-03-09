import React from 'react'
import BtnClear from "./BtnClear.jsx";

function VisibleData({clearAll , users}) {
    return (
        <>
            <>
                <>
                    <div className="form-control" id="floatingTextarea"
                        style={{height: '700px'}}>
                <pre>
                    {JSON.stringify(users, null, 2)}
                </pre>
                    </div>
                </>
            </>

            <BtnClear clearAll={clearAll}/>
</>
)
}

export default VisibleData
