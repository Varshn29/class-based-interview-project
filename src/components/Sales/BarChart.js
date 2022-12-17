import { Bar } from "react-chartjs-2";

export const BarChart = ({ details }) => {
    { console.log(details) }

    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            {/* <Bar
                data={details}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Chart"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            /> */}
        </div>
    );
};