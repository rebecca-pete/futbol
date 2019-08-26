# Challenge Summary
Create a web based application that will calculate the ranking table for a soccer league.

Build two repos, server and client-side. This represents the server-side repo.

## Rules

In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A loss is worth 0 points. If two or more teams have the same number of points, they should have the same rank and be printed in alphabetical order (as in the tie for 3rd place in the sample data).

## Input/Output

The input contains results of games, one per line. See sample-input.txt for details. Your application should parse the provided data-input.txt file server side and provide JSON as output that may be requested by the client side application and displayed in a structured/tabular form. The output should be ordered from most to least points, following the format specified in data-output.txt.

* A text synopses on how to use your application.

## Requirements

This should be implemented using vanilla JavaScript, HTML, CSS

We prefer that you DO NOT use any JavaScript frameworks.

The user interface should have the ability to upload a data file.

The user interface should be able to generate a ranking table in a tabular form.

The ranking table should be generated using JavaScript by parsing the data from the uploaded file.# futbol
