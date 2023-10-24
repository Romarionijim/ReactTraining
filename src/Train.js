import React from "react";
import UseEffectBasis from "./UseEffectBasis";
import UseEffectCleanup from './UseEffectCleanup'

const Train = () => {
    return (
        <div className="useEffect">
        <UseEffectBasis/>
        <UseEffectCleanup/>
        </div>
    )
}

export default Train