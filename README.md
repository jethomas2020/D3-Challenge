# D3-Challenge

# Data Journalism and D3 at Work 

------------------
# Background

Welcome to the newsroom! We've just accepted a data visualization project for a major metro paper. We're tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand our findings.

The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on us to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the project is based on 2014 ACS 1-year estimates from the US Census Bureau, but we are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

----------------------
# Project Overview 

    This project utilizes both html and Javascript for the necessary files. These will be the main 
    files to run for analysis.

 
----------------------
# Our Task

Core Project Work: D3 Dabbler

Created a scatter plot between two of the data variables such as Healthcare vs. Poverty. 
The data can also be used to compare other relationships, i.e. Healthcare vs. Smokers, vs. Age.

Using the D3 techniques we know, created a scatter plot that represents each state with circle elements. 

As we coded this graphic in the app.js file of the repository directory, we pulled in the data from data.csv 
    by using the d3.csv function. The scatter plot image is in the Images Folder. 
    
    Included state abbreviations in the circles.

    Created and situated our axes and labels to the left and bottom of the chart.

    Note: We need to use python -m http.server to run the visualization. This will host the page at 
        localhost:8000 in your web browser.


---------------------------------------------
# Bonus: Impress the Boss (Optional)

Why make a static graphic when D3 lets you interact with your data?

**1. More Data, More Dynamics**

You're going to include more demographics and more risk factors. Place additional labels in your scatter plot and give them click events so that your users can decide which data to display. Animate the transitions for your circles' locations as well as the range of your axes. Do this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis.

    Hint: Try binding all of the CSV data to your circles. This will let you easily determine their x or y values when you click the labels.

**2. Incorporate d3-tip**

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to your circles and display each tooltip with the data that the user has selected. Use the d3-tip.js plugin developed by Justin Palmer—we've already included this plugin in your assignment directory.

Tooltip

    Check out David Gotz's example to see how you should implement tooltips with d3-tip.

Assessment

Your final product will be assessed on the following metrics:

    Creation of a new repository on GitHub called D3-Challenge (note the kebab-case). Do not add to an already existing repo.

    Completion of all steps in the core assignment

    Coherency of scatter plot (labels, ticks)

    Visual attraction

    Professionalism

    Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file


