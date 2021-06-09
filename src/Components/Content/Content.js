import React from 'react'
import image1 from '../../Images/Food-Pizza-Basil-Tomato.jpg';
import image2 from '../../Images/573517_642X428.jpg';
const Content = () => {
    return (
        <div>
            <div className="flex flex-col justify-content items-center bg-white h-screen font-mono">
                <img src={image1} alt="piz" className="h-full rounded mb-40 shadow w-400" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Chicken Pizza</h2>
                    <p className="mb-2">$150</p>
                </div>
            </div>
            <div className="flex flex-col justify-content items-center bg-white h-screen font-mono">
                <img src={image2} alt="piz" className="h-full rounded mb-20 shadow my-4 w-400" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Mashroom Pizza</h2>
                    <p className="mb-2">$150</p>
                </div>
            </div>
        </div>
    )
}

export default Content
