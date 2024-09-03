import { forwardRef } from "react";
import { createPortal } from "react-dom";
const ResultModal= forwardRef(function ResultModal({Reset,targetTime,remainingTime},ref){
    const userLost=remainingTime<=0;
    const time=(remainingTime/1000).toFixed(2);
    const score=Math.round((1-(remainingTime/(targetTime*1000)))*100);

    return createPortal(

        <dialog className="result-modal" ref={ref}>
            {userLost && <h2>You Lost </h2>}
            {!userLost && <h2>You Score: {score} </h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>You stopped the timmer with <strong>{time} seconds left. </strong></p>
            <form method="dialog" onSubmit={Reset}>
                <button>Close</button>
            </form>
        </dialog>
    ,
    document.getElementById('modal')
    );
}
)
export default ResultModal;