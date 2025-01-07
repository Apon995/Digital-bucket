import React from 'react';
import { ThreeDots } from "react-loader-spinner"



function StartOnLoad() {
    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#635fc7"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

        </div>

    )
}

export default StartOnLoad