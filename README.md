# COVID-19 REPORTS

### (Stand up meeting May 20, 2020)

## Instructions

For this project we're going to use the data repository updated and maintained by the Johns Hopkins University (JHU) Center for Systems Science and Engineering.
[Link to their Github repo](https://github.com/CSSEGISandData/COVID-19)

**Step 1**
Download data from JHU and name it `reports.csv`

**Step 2**
Create a database file `data.db3` to store the downloaded data

**Step 3**
In SQLite Studio, create a table inside `data.db3`, then import `reports.csv` to the new table

**Step 4**
Write 2 GET endpoints

- **GET /** to get all records.

```
// Sample success response
{
    "Providence_State": "Alabama",
    "Confirmed": 30,
    "Deaths": 0,
    "Recovered": 20,
    "People_Tested": 4038
}
```

- **GET /top5** to get top 5 states that have the most confirmed cases
