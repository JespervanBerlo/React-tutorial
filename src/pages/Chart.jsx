import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { data } from '../Data/Chartdata'
import { temp } from '../Data/ChartTemp'


class Charttest extends Component {
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: []
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
    }
  
    render() {
      for (let i = 1906; i <= 2023; i++) {
        this.state.options.xaxis.categories.push(i)
      }
      console.log(data);

      console.log(this.state.options.xaxis.categories)
      return (
        <div className="content">
          <div>
            <div>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="1500"
              />
            </div>
          </div>
        </div>
      );
    }
  }



// function Chart() {
//     return (
//         <div className='content'>
//             <h1>Hello World!</h1>
//         </div>
//     );
// }

export default Charttest;