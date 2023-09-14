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
            data: []
          }
        ]
      };
    }
  
    render() {
      for (let i = 1906; i <= 2023; i++) {
        this.state.options.xaxis.categories.push(i)
      }
      console.log(data[0].endsWith('0101'));
      let asfs = []
      // get array with indexes of certain date
      for (let i = 0; i < data.length; i++) {
        // TODO limit input date to valid dates
        if (data[i].endsWith('0314') === true)
        {
          asfs.push(i)
        }
      }
      // get temperature of said date
      for (let i = 0; i < asfs.length; i++) {
        console.log(asfs)      
        this.state.series[0].data.push(temp[asfs[i]]/10)
      }
      // console.log(this.state.series[0].data.push(asfs[2]))
      console.log(asfs)


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