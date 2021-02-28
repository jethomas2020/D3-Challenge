// SVG container
var svgWidth = 825;
var svgHeight = 625;


// Create margins
var margin = {
  top: 50,
  bottom: 125,
  right: 50,
  left: 125
};

// Chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

// Create SVG container/wrapper
var svg = d3.select("#scatter").append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Create SVG group "g" and move things over by the margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Import and load Data with D3
// Read csv file in Data folder
d3.csv("assets/data/data.csv").then(function(censusData) {

  // Data
  console.log(censusData);

  // Parse Data and set as numbers 
    // for each
    censusData.forEach(function(data) {
      data.healthcare = +data.healthcare;
      data.poverty = +data.poverty;
    });

  // Create scale functions
    // Set the y scale

    var yLinearScale = d3.scaleLinear()
    .domain([d3.min(censusData, d => d.healthcare) -2, d3.max(censusData, d => d.healthcare) + 2])
    .range([chartHeight, 0]);
    
    // set the x scale 
    var xLinearScale = d3.scaleLinear()
      .domain([d3.min(censusData, d => d.poverty) - 1, d3.max(censusData, d => d.poverty) + 1])
      .range([0, chartWidth]);

  // Step 3: Create axis functions 
    // For left and bottom axis 
    var yAxis = d3.axisLeft(yLinearScale);
    var xAxis = d3.axisBottom(xLinearScale);
    
  // Step 4: Append Axes to the chart
    // x axis
    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(xAxis);
    // y axis
    chartGroup.append("g")
      .call(yAxis);

  // Create Circles
    // Scatterplot Data 
    var circlesGroup = chartGroup.selectAll("circle")
      .data(censusData)
      .enter()
      .append("circle")
      .attr("cy", d => yLinearScale(d.healthcare))
      .attr("cx", d => xLinearScale(d.poverty))
      .attr("r", "10")
      .attr("opacity", "0.75")
      .attr("class", "stateCircle")
      .attr("stroke", "black");


  // Create Tooltip
    // initiate function
    var toolTip = d3.tip()
      .attr("class", "d3-tip")
      .offset([0, 0])
      .html(function(d) {
        return (`<strong>${d.state}</br></br>Lacks Healthcare (%):</br>${d.healthcare}</br></br>Poverty (%):</br> ${d.poverty}<strong>`);
      });

  // Create Tooltip in the chart
  // Call Tooltip
    svg.call(toolTip);

  // Create event listeners to display and hide the Tooltip
  // ==============================
    // mouseclick event
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    });
    // onmouseover event
    circlesGroup.on("mouseover", function(data) {
      toolTip.show(data, this);
    });
    // onmouseout event
    circlesGroup.on("mouseout", function(data) {
      toolTip.hide(data, this);
    });

  // Create axes labels
    // x axis
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (chartHeight / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Lacks Healthcare (%)");

    // y axis    
    chartGroup.append("text")
      .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + margin.top + 30})`)
      .attr("class", "axisText")
      .text("In Poverty (%)");

    // Create State abbreviations within the Circles
    chartGroup.append("text")
      .attr("class", "stateText")
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .selectAll("tspan")
      .data(censusData)
      .enter()
      .append("tspan")
      .attr("x", function(data) {
          return xLinearScale(data.poverty);
      })
      .attr("y", function(data) {
          return yLinearScale(data.healthcare -0.2);
      })
      .text(function(data) {
          return data.abbr
      });
    
}).catch(function(error) {
  console.log(error);

});