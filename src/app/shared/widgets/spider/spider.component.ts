import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HC_more from "highcharts/highcharts-more"; // Import the highcharts-more module


@Component({
  selector: "app-widget-spider",
  templateUrl: "./spider.component.html",
  styleUrls: ["./spider.component.scss"],
})
export class SpiderComponent implements OnInit {
  
  Highcharts = Highcharts;
  chartOptions: {};
  // constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        polar: true,
        type: "line",
      },

      accessibility: {
        description:
          "A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.",
      },

      title: {
        text: "PCR vs Virgin",
        x: -80,
      },

      pane: {
        size: "80%",
      },

      xAxis: {
        categories: [
          "Tensile modulus *100",
          "Tesnile strees@yeild",
          "Tensile stress@break",
          "Izod@260C/23C ave",
          "Izod@260C/-30C ave.",
          "Vicat",
          "MVR@260C",
          "iMVR@260C"
        ],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },

      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
      },

      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
      },

      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
      },

      series: [
        {
          name: "PCR",
          data: [22, 54.3, 46.5, 53, 40, 133,12.4,15.1],
          pointPlacement: "on",
        },
        {
          name: "Virgin",
          data: [22.1, 53.4, 48.8, 54, 41, 134,13.8,15.2],
          pointPlacement: "on",
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
              pane: {
                size: "70%",
              },
            },
          },
        ],
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
    };
    HC_exporting(Highcharts);
    HC_more(Highcharts); 

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
