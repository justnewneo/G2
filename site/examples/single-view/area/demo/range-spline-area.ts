/**
 * A recreation of this demo: https://www.anychart.com/zh/products/anychart/gallery/Combined_Charts/Range_Spline-Area,_Spline_and_Marker_Chart.php
 */
import { Chart } from '@antv/g2';

const chart = new Chart({ container: 'container' });

const processData = (data) =>
  data.map((d) => ({
    x: d[0],
    low: d[1],
    high: d[2],
    v2: d[3],
    v3: d[4],
  }));

chart
  .data({
    type: 'fetch',
    value:
      'https://cdn.anychart.com/samples/combined-chart/range-spline-area-and-marker-chart/data.json',
    transform: [{ type: 'custom', callback: processData }],
  })
  .axis('y', { title: false })
  .scale('x', { type: 'linear', tickCount: 10 });

chart
  .area()
  .encode('x', 'x')
  .encode('y', ['low', 'high'])
  .encode('shape', 'smooth')
  .style('fillOpacity', 0.65)
  .style('fill', '#64b5f6')
  .style('lineWidth', 1);
chart
  .point()
  .encode('x', 'x')
  .encode('y', 'v2')
  .encode('size', 2)
  .encode('shape', 'point');
chart
  .line()
  .encode('x', 'x')
  .encode('y', 'v3')
  .encode('color', '#FF6B3B')
  .encode('shape', 'smooth');

chart.render();