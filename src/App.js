import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Highcharts from "highcharts";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarHidden: false,
      sidebarMinimized: false,
      sidebarMobileShow: false,
      changeChart: false
    };

    this.chart = null;

    this.sidebarToggle = this.sidebarToggle.bind(this);
    this.mobileSideBarToggle = this.mobileSideBarToggle.bind(this);
    this.minimize = this.minimize.bind(this);
    this.changeChartData1 = this.changeChartData1.bind(this);
    this.changeChartData2 = this.changeChartData2.bind(this);
    this.changeChartData3 = this.changeChartData3.bind(this);
  }

  sidebarToggle() {
    this.setState({
      sidebarHidden: !this.state.sidebarHidden
    });
  }

  mobileSideBarToggle() {
    this.setState({
      sidebarMobileShow: !this.state.sidebarMobileShow
    });
  }

  minimize() {
    this.setState({
      sidebarMinimized: !this.state.sidebarMinimized
    });
  }

  componentDidMount() {
    let that = this;
    let data = [12, 12, 23, 23];
    let series = ['item1', 'item2', 'item3', 'item4']
    this.chart = Highcharts.chart('container', {
      chart: {
          type: 'bar',
          height: 290
      },
      title: {
          text: ''
      },
      xAxis: {
          categories: series,
          labels: {
              formatter: function () {
                  return '<a href="">' +
                      this.value + ', ' + data[this.pos] + '%</a>';
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: '',
          },
          labels: {
              overflow: 'justify',
              formatter: function () {
                  return '<a href="">' +
                      this.value + '%</a>';
              }
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: false
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          showInLegend: false,
          name: 'Year 1800',
          data: data,
          colorByPoint: true
      }]
    });
  }

  changeChartData1() {
    let data = [10, 20, 30, 40 ,50 ,60, 70];
    this.chart.update({
      xAxis: {
        categories: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6' ,'item7'],
        labels: {
          formatter: function () {
              return '<a href="">' +
                  this.value + ', ' + data[this.pos] + '%</a>';
          }
        }
      },
      series: [{
        data: data
      }]
    });
  }

  changeChartData2() {
    let data = [10, 20, 30, 40 ,50 ,60, 70, 80, 45, 67]
    this.chart.update({
      xAxis: {
        categories: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6' ,'item7', 'item8', 'item9', 'item10'],
        labels: {
          formatter: function () {
              return '<a href="">' +
                  this.value + ', ' + data[this.pos] + '%</a>';
          }
        }
      },
      series: [{
        data: data
      }]
    });
  }

  changeChartData3() {
    let data = [10, 20, 30, 40];
    this.chart.update({
      xAxis: {
        categories: ['item1', 'item2', 'item3', 'item4'],
        labels: {
          formatter: function () {
              return '<a href="">' +
                  this.value + ', ' + data[this.pos] + '%</a>';
          }
        }
      },
      series: [{
        data: data
      }]
    });
  }

  render() {

    let appClass = classNames({
      'sidebar-hidden': this.state.sidebarHidden,
      'sidebar-minimized': this.state.sidebarMinimized,
      'sidebar-mobile-show': this.state.sidebarMobileShow,
      'app': true
    });

    return (
      <div className={appClass}>
        <header className="app-header navbar">
          <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" onClick={this.mobileSideBarToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </header>
        <div className="app-body">
          <div className="sidebar">
            <nav className="sidebar-nav"></nav>
            <button className="sidebar-minimizer" type="button" onClick={this.minimize}></button>
          </div>
          <main className="main">
            <div style={{height: '3000px', width: '100%'}}>
              <div className="card" style={{height: '350px', width: '650px'}}>
                <div className="card-header">
                  Bar Chart
                  <button className="padding-right" onClick={this.changeChartData1}>7 bars</button>
                  <button className="padding-right" onClick={this.changeChartData2}>10 bars</button>
                  <button className="padding-right" onClick={this.changeChartData3}>4 bars</button>
                </div>
                <div className="card-body" style={{padding: 0}}>
                  <div id="container" height="300px" width="650px"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
