// src/components/BarChart.js

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = svg.node().clientWidth;
        const height = svg.node().clientHeight;

        svg.selectAll('*').remove(); // Clear previous drawings

        // Slice the data to show only the first 20 entries
        const slicedData = data.slice(0, 20);

        // Set up margins and dimensions
        const margin = { top: 20, right: 120, bottom: 80, left: 60 }; // Increased right margin for legend
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        // Create scales
        const x = d3.scaleBand()
            .domain(slicedData.map(d => d.topic))
            .range([margin.left, chartWidth + margin.left])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(slicedData, d => Math.max(d.intensity, d.likelihood, d.relevance))])
            .nice()
            .range([chartHeight, margin.top]);

        const color = d3.scaleOrdinal()
            .domain(['Intensity', 'Likelihood', 'Relevance'])
            .range(['steelblue', 'orange', 'green']);

        // Draw bars for Intensity
        svg.append('g')
            .selectAll('.bar')
            .data(slicedData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.topic) - x.bandwidth() / 3) // Adjust x position for spacing
            .attr('y', d => y(d.intensity))
            .attr('width', x.bandwidth() / 3)
            .attr('height', d => chartHeight - y(d.intensity))
            .attr('fill', color('Intensity'))
            .append('title') // Tooltip for bar
            .text(d => `Intensity: ${d.intensity}`);

        // Draw bars for Likelihood
        svg.append('g')
            .selectAll('.bar')
            .data(slicedData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.topic) - x.bandwidth() / 3 + x.bandwidth() / 3) // Adjust x position for spacing
            .attr('y', d => y(d.likelihood))
            .attr('width', x.bandwidth() / 3)
            .attr('height', d => chartHeight - y(d.likelihood))
            .attr('fill', color('Likelihood'))
            .attr('opacity', 0.7)
            .append('title') // Tooltip for bar
            .text(d => `Likelihood: ${d.likelihood}`);

        // Draw bars for Relevance
        svg.append('g')
            .selectAll('.bar')
            .data(slicedData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.topic) - x.bandwidth() / 3 + 2 * (x.bandwidth() / 3)) // Adjust x position for spacing
            .attr('y', d => y(d.relevance))
            .attr('width', x.bandwidth() / 3)
            .attr('height', d => chartHeight - y(d.relevance))
            .attr('fill', color('Relevance'))
            .attr('opacity', 0.5)
            .append('title') // Tooltip for bar
            .text(d => `Relevance: ${d.relevance}`);

        // Add x-axis
        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x).tickSize(0))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end')
            .attr('class', 'text-gray-700');

        // Add y-axis
        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left}, 0)`) // Ensure y-axis is within margins
            .call(d3.axisLeft(y))
            .append('text')
            .attr('class', 'y-axis-label')
            .attr('text-anchor', 'middle')
            .attr('y', -margin.left + 10)
            .attr('x', -chartHeight / 2)
            .attr('transform', 'rotate(-90)')
            .text('Value')
            .attr('class', 'text-gray-700');

        // Add legend
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${chartWidth + margin.left + 20}, ${margin.top})`); // Adjust legend position

        legend.selectAll('rect')
            .data(color.domain())
            .enter()
            .append('rect')
            .attr('x', 0)
            .attr('y', (d, i) => i * 20)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', d => color(d));

        legend.selectAll('text')
            .data(color.domain())
            .enter()
            .append('text')
            .attr('x', 30)
            .attr('y', (d, i) => i * 20 + 15)
            .text(d => d)
            .attr('class', 'text-gray-700');
    }, [data]);

    return (
        <div className="overflow-x-auto p-4">
            <svg ref={svgRef} className="w-full h-96 border border-gray-300 rounded-lg shadow-lg">
                {/* Chart will be drawn here */}
            </svg>
        </div>
    );
};

export default BarChart;
