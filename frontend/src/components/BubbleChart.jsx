// src/components/BubbleChart.js

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BubbleChart = ({ data }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = svg.node().clientWidth;
        const height = svg.node().clientHeight;

        svg.selectAll('*').remove(); // Clear previous drawings

        // Slice the data to show only the first 20 entries
        const slicedData = data.slice(0, 20);

        // Set up margins and dimensions
        const margin = { top: 20, right: 20, bottom: 80, left: 80 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        // Create scales
        const x = d3.scaleBand()
            .domain(slicedData.map(d => d.topic))
            .range([margin.left, chartWidth + margin.left])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(slicedData, d => d.impact || 0)])
            .nice()
            .range([chartHeight, margin.top]);

        const radiusScale = d3.scaleLinear()
            .domain([0, d3.max(slicedData, d => d.impact || 0)])
            .range([5, 20]);

        const color = d3.scaleOrdinal(d3.schemeCategory10)
            .domain([...new Set(slicedData.map(d => d.pestle))]);

        // Draw bubbles
        svg.append('g')
            .selectAll('circle')
            .data(slicedData)
            .enter()
            .append('circle')
            .attr('cx', d => x(d.topic) + x.bandwidth() / 2)
            .attr('cy', d => y(d.impact))
            .attr('r', d => radiusScale(d.impact))
            .attr('fill', d => color(d.pestle))
            .attr('opacity', 0.7)
            .append('title')
            .text(d => `Impact: ${d.impact}\nPestle: ${d.pestle}`);

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
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y))
            .append('text')
            .attr('class', 'y-axis-label')
            .attr('text-anchor', 'middle')
            .attr('y', -margin.left + 10)
            .attr('x', -chartHeight / 2)
            .attr('transform', 'rotate(-90)')
            .text('Impact')
            .attr('class', 'text-gray-700');

        // Add legend
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${width - margin.right - 150}, ${margin.top})`);

        const legendItems = [...new Set(slicedData.map(d => d.pestle))];
        legendItems.forEach((pestle, i) => {
            legend.append('rect')
                .attr('x', 0)
                .attr('y', i * 30)
                .attr('width', 20)
                .attr('height', 20)
                .attr('fill', color(pestle));

            legend.append('text')
                .attr('x', 30)
                .attr('y', i * 30 + 15)
                .text(pestle)
                .attr('class', 'text-gray-700');
        });

    }, [data]);

    return (
        <div className="overflow-x-auto p-4">
            <svg ref={svgRef} className="w-full h-96 border border-gray-300 rounded-lg shadow-lg">
                {/* Chart will be drawn here */}
            </svg>
        </div>
    );
};

export default BubbleChart;
