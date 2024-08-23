import React, { useEffect } from 'react';
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';

function Dashboard(props) {
    useEffect(() => {
        console.log(props.data);
    }, [props.data]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Dashboard</h1>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bar Chart</h2>
                <div className="">
                    <BarChart data={props.data} />
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bubble Chart</h2>
                <div className="">
                    <BubbleChart data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
