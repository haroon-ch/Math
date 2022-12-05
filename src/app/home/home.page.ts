import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  d:any;

  public data:{next:''}

  // public chart: any;
  // public chart2:any;
  // public chart3:any;
  // public chart4:any;
  // public chart5:any;
  // public chart6:any;
  // public chart7:any;
  // public chart8:any;
  // public chart9:any;

  constructor(public route:Router){

  }
 
  picker(){
    this.route.navigate(['image-picker'])
  }

  ngOnInit(){
    // this.createChart();
    // this.createChart2();
    // this.createChart3();
    // this.createChart4();
    // this.createChart5();
    // this.createChart6();
    // this.createChart7();
    
    // this.createChart8();
    // this.createChart9();
    this.netxdate();
  }


  netxdate(){
    const date = new Date();
    const next =  new Date(date.getFullYear(), date.getMonth() + 1, 1);
   console.log(next);
   
    // console.log(date);
   
  }
 


  // createChart(){
  
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
  //                '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
  //        datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467','576', '572', '79', '92',
  //                '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
  //                  '0.00', '538', '541'],
  //           backgroundColor: 'limegreen'
  //         }  
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }
  // createChart2(){
  
  //   this.chart2 = new Chart("MyChart2", {
  //     type: 'line', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
	// 							 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	//        datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467','576', '572', '79', '92',
	// 							 '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
	// 								 '0.00', '538', '541'],
  //           backgroundColor: 'limegreen'
  //         }  
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }
  // createChart3(){
  
  //   this.chart3 = new Chart("MyChart3", {
  //     type: 'line',
  //     data: {
  //       labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //       datasets: [{ 
  //         data: [86,114,106,106,107,111,133],
  //         label: "Total",
  //         borderColor: "rgb(62,149,205)",
  //         backgroundColor: "rgb(62,149,205,0.1)",
  //         borderWidth:2
  //         }, { 
  //           data: [70,90,44,60,83,90,100],
  //           label: "Accepted",
  //           borderColor: "rgb(60,186,159)",
  //           backgroundColor: "rgb(60,186,159,0.1)",
  //           borderWidth:2
  //         }, { 
  //           data: [10,21,60,44,17,21,17],
  //           label: "Pending",
  //           borderColor: "rgb(255,165,0)",
  //           backgroundColor:"rgb(255,165,0,0.1)",
  //           borderWidth:2
  //         }, { 
  //           data: [6,3,2,2,7,0,16],
  //           label: "Rejected",
  //           borderColor: "rgb(196,88,80)",
  //           backgroundColor:"rgb(196,88,80,0.1)",
  //           borderWidth:2
  //         }
  //       ]
  //     },
      
  //   });
  // }
  // createChart4(){

  //   this.chart4 = new Chart("MyChart4", {
  //     type: 'radar',
  //     data: {
  //       labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //       datasets: [{ 
  //           data: [86,114,106,106,107,111,133],
  //           label: "Total",
  //           borderColor: "#3e95cd",
  //           backgroundColor: "rgb(62,149,205,0.1)",
  //           borderWidth:2,
           
  //         }, { 
  //           data: [70,90,44,60,83,90,100],
  //           label: "Accepted",
  //           borderColor: "#3cba9f",
  //           backgroundColor: "rgb(60,186,159,0.1)",
  //           borderWidth:2,
            
  //         }, { 
  //           data: [10,21,60,44,17,21,17],
  //           label: "Pending",
  //           borderColor: "#ffa500",
  //           backgroundColor:"rgb(255,165,0,0.1)",
  //           borderWidth:2,
            
  //         }, { 
  //           data: [6,3,2,2,7,0,16],
  //           label: "Rejected",
  //           borderColor: "#c45850",
  //           backgroundColor:"rgb(196,88,80,0.1)",
  //           borderWidth:2,
            
  //         }
  //       ]
  //     },
  //     options: {
  //        scales: {
  //         //  xAxes: [{ 
  //         //     display: false,
  //         //  }],
  //        }
  //      },
      
  //   });

  // }
  // createChart5(){

  //   this.chart5 = new Chart("MyChart5", {
  //     type: 'doughnut',
  //         data: {
  //           labels: ["Accepted","Pending", "Rejected"],
  //           datasets: [{ 
  //               data: [70,10,6],
  //               borderColor:[
  //                 "#3cba9f",
  //                 "#ffa500",
  //                 "#c45850",
  //               ],
  //               backgroundColor: [
  //                 "rgb(60,186,159,0.1)",
  //                 "rgb(255,165,0,0.1)",
  //                 "rgb(196,88,80,0.1)",
  //               ],
  //               borderWidth:2,
  //             }]
  //         },
  //       options: {
  //         scales: {
  //           // xAxes: [{ 
  //           //    display: false,
  //           // }],
  //           // yAxes: [{
  //           //    display: false,
  //           // }],
  //         }
  //       },
  //   });

  // }
  // createChart6(){

  //   this.chart6 = new Chart("MyChart6", {
  //     type: 'bubble',
  //     data: {
  //       datasets: [{ 
  //           data: [
  //             {x: 17, y: 3, r:11},
  //           ],
  //           label: "Blue Team",
  //           borderColor: "#3e95cd",
  //           backgroundColor: "rgb(62,149,205,0.1)",
  //           borderWidth:2,
           
  //         }, { 
  //           data: [
  //             {x: 10, y: 3, r:20},
  //           ],
  //           label: "Green Team",
  //           borderColor: "#3cba9f",
  //           backgroundColor: "rgb(60,186,159,0.1)",
  //           borderWidth:2,
            
  //         }, { 
  //           data: [
  //           {x: 4, y: 4, r:30},
  //           ],
  //           label: "Yellow Team",
  //           borderColor: "#ffa500",
  //           backgroundColor:"rgb(255,165,0,0.1)",
  //           borderWidth:2,
            
  //         }, { 
  //           data: [
  //           {x: 14, y: 0, r:9}
  //           ],
  //           label: "Red Team",
  //           borderColor: "#c45850",
  //           backgroundColor:"rgb(196,88,80,0.1)",
  //           borderWidth:2,
  //         }
  //       ]
  //     },
  //     options: {
  //       scales: {
  //         // xAxes: [{ 
  //         //   scaleLabel: {
  //         //     display: true,
  //         //     labelString: '# of wins'
  //         //   }
  //         // }],
  //         // yAxes: [{
  //         //   scaleLabel: {
  //         //     display: true,
  //         //     labelString: '# of games'
  //         //   }
  //         // }],
  //       }
  //     },
  //   });

  // }
  // createChart7(){

  //   this.chart7 = new Chart("MyChart7", {
  //     type: 'bar',
  //     data: {
  //       labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //       datasets: [{ 
  //           data: [86,114,106,106,107,111,133],
  //           label: "Total",
  //           borderColor: "#3e95cd",
  //           backgroundColor: "rgb(62,149,205)",
  //           borderWidth:2,
  //           type: 'line',
  //           fill:false
  //         }, { 
  //           data: [70,90,44,60,83,90,100],
  //           label: "Accepted",
  //           borderColor: "#3cba9f",
  //           backgroundColor: "#3cba9f",
  //           borderWidth:2
  //         }, { 
  //           data: [10,21,60,44,17,21,17],
  //           label: "Pending",
  //           borderColor: "#ffa500",
  //           backgroundColor:"#ffa500",
  //           borderWidth:2,
  //         }, { 
  //           data: [6,3,2,2,7,0,16],
  //           label: "Rejected",
  //           borderColor: "#c45850",
  //           backgroundColor:"#c45850",
  //           borderWidth:2
  //         }
  //       ]
  //     },
  //   });

  // }
  // createChart8(){

  //   this.chart8 = new Chart("MyChart8", {
  //     type: 'pie',
  //     data: {
  //       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  //       datasets: [{
  //         label: "Population (millions)",
  //         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
  //         data: [2478,5267,734,784,433]
  //       }]
  //     },
  //     // options: {
  //     //   title: {
  //     //     display: true,
  //     //     text: 'Predicted world population (millions) in 2050',
  //     //   }
  //     // }
  //   });

  // }
  // createChart9(){

  //   this.chart9 = new Chart("MyChart9", {
  //     type: 'bar',
  //     data: {
  //       labels: ["1900", "1950", "1999", "2050"],
  //       datasets: [{
  //           label: "Europe",
  //           type: "line",
  //           borderColor: "#2b2d3e",
  //           data: [408,547,675,734],
  //           fill: false
  //         }, {
  //           label: "Africa",
  //           type: "line",
  //           borderColor: "#3e95cd",
  //           data: [133,221,783,2478],
  //           fill: false
  //         }, {
  //           label: "Europe",
  //           type: "bar",
  //           backgroundColor: "#ff0000",
  //           data: [408,547,675,734],
  //         }, {
  //           label: "Africa",
  //           type: "bar",
  //           // backgroundColor: "rgba(0,0,0,0.2)",
  //           backgroundColor:"#2b2d3e",
  //           hoverBackgroundColor: "#3e95cd",
  //           data: [133,221,783,2478]
  //         }
  //       ]
  //     },
  //     options: {
  //       // title: {
  //       //   // display: true,
  //       //   // text: 'Population growth (millions): Europe & Africa'
  //       // },
  //       // legend: { display: false }
  //     }
  //   });

  // }

  





  // display = '0';
  // firstval: number = null;
  // operator: any = null;
  // newcursor = false;
  // isc = false;
  // iscomma = false;

  // click(val: any) {
  //   switch (val) {
  //     case 'ac':
  //       this.display = '0';
  //       this.firstval = null;
  //       this.operator = null;
  //       this.newcursor = false;
  //       break;
  //     case 'c':
  //       this.display = '0';
  //       this.isc = false;
  //       break;
  //     case '+/-':
  //       if (Math.sign(parseInt(this.display, 0)) === 1) {
  //         const sign = -Math.abs(parseInt(this.display, 0));
  //         this.display = sign.toString();
  //       } else if (Math.sign(parseInt(this.display, 0)) === -1) {
  //         const sign = Math.abs(parseInt(this.display, 0));
  //         this.display = sign.toString();
  //       } else {
  //         this.display = this.display;
  //       }
  //       break;
  //     case '%':
  //       this.addpercent();
  //       break;
  //     case ':':
  //       this.addoperator(':');
  //       break;
  //     case 'X':
  //       this.addoperator('X');
  //       break;
  //     case '-':
  //       this.addoperator('-');
  //       break;
  //     case '+':
  //       this.addoperator('+');
  //       break;
  //     case '=':
  //       if (this.firstval !== null && this.operator !== null) {
  //         this.calclast();
  //       }
  //       this.operator = null;
        
  //       break;
  //     case '0':
  //       this.addnumber('0');
  //       break;
  //     case '1':
  //       this.addnumber('1');
  //       break;
  //     case '2':
  //       this.addnumber('2');
  //       break;
  //     case '3':
  //       this.addnumber('3');
  //       break;
  //     case '4':
  //       this.addnumber('4');
  //       break;
  //     case '5':
  //       this.addnumber('5');
  //       break;
  //     case '6':
  //       this.addnumber('6');
  //       break;
  //     case '7':
  //       this.addnumber('7');
  //       break;
  //     case '8':
  //       this.addnumber('8');
  //       break;
  //     case '9':
  //       this.addnumber('9');
  //       break;
  //     case ',':
  //       this.addcomma();
  //       break;
  //   }
  // }


  // addcomma() {
  //   if (this.iscomma === false) {
  //     this.iscomma = true;
  //   } else {
  //     this.iscomma = false;
  //   }
  // }

  // addnumber(nbr: string) {
  //   if (nbr === '0') {
  //     if (this.newcursor === true) {
  //       this.display = nbr;
  //       this.newcursor = false;
  //     } else if (this.display !== '0') {
  //       if (this.iscomma === true) {
  //         this.display = `${this.display.toString()}.${nbr}`;
  //       } else {
  //         this.display = this.display.toString() + nbr;
  //       }
  //     } else if (this.display === '0') {
  //       if (this.iscomma === true) {
  //         this.display = `${this.display.toString()}.${nbr}`;
  //       }
  //     }
  //   } else {
  //     if (this.newcursor === true) {
  //       this.display = nbr;
  //       this.newcursor = false;
  //     } else if (this.display === '0') {
  //       if (this.iscomma === true) {
  //         if (this.display.toString().indexOf('.') > -1) {
  //           this.display = this.display.toString() + nbr;
  //         } else {
  //           this.display = `${this.display.toString()}.${nbr}`;
  //         }
  //       } else {
  //         this.display = nbr;
  //       }
  //     } else {
  //       if (this.iscomma === true) {
  //         if (this.display.toString().indexOf('.') > -1) {
  //           this.display = this.display.toString() + nbr;
  //         } else {
  //           this.display = `${this.display.toString()}.${nbr}`;
  //         }
  //       } else {
  //         this.display = this.display.toString() + nbr;
  //       }
  //     }
  //   }
  //   this.isc = true;
  // }

  // addpercent() {
  //   this.iscomma = false;
  //   const dispval = parseInt(this.display, 0) / 100;
  //   this.display = dispval.toString();
  // }

  // addoperator(op: string) {
  //   if (this.newcursor === false) {
  //     if (this.firstval === null) {
  //       if (this.iscomma === true) {
  //         this.firstval = parseFloat(this.display);
  //       } else {
  //         this.firstval = parseInt(this.display, 0);
  //       }
  //     }
  //     if (this.firstval !== null && this.operator !== null) {
  //       this.calclast();
  //     }
  //   }
  //   this.iscomma = false;
  //   this.operator = op;
  //   this.newcursor = true;
  // }

  // calclast() {
  //   switch (this.operator) {
  //     case ':':
  //       if (this.iscomma === true) {
  //         this.firstval = (this.firstval / parseFloat(this.display));
  //       } else {
  //         this.firstval = (this.firstval / parseInt(this.display, 0));
  //       }
  //       break;
  //     case 'X':
  //       if (this.iscomma === true) {
  //         this.firstval = (this.firstval * parseFloat(this.display));
  //       } else {
  //         this.firstval = (this.firstval * parseInt(this.display, 0));
  //       }
  //       break;
  //     case '-':
  //       if (this.iscomma === true) {
  //         this.firstval = (this.firstval - parseFloat(this.display));
  //       } else {
  //         this.firstval = (this.firstval - parseInt(this.display, 0));
  //       }
  //       break;
  //     case '+':
  //       if (this.iscomma === true) {
  //         this.firstval = (this.firstval + parseFloat(this.display));
  //       } else {
  //         this.firstval = (this.firstval + parseInt(this.display, 0));
  //       }
  //       break;
  //   }
  //   this.display = this.firstval.toString();
  // }

}