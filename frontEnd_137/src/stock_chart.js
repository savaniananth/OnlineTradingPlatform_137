import React, { useState, useEffect } from "react";
import './home.css';

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("TSCO.LON");
  const apiKey = "X84U6JMRPRYLFG47";
  const apiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=TSCO.LON&apikey=demo";

  useEffect(() => {
    fetchData();
  }, [selectedCompany]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}?apikey=${apiKey}&symbol=${selectedCompany}`);
      if (!response.ok) {
        throw new Error("Network response err");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  return (
    <div>
      <h1>SIKE live STOCKS TRACKER</h1>
      <div>
       {/* <ResponsiveAppBar/> */}
        <label htmlFor="companySelect">Select a Company: </label>
        <select id="companySelect" value={selectedCompany} onChange={handleCompanyChange}>
          <option value="TSCO.LON">TSCO.LON</option>
          <option value="MSFT">MSFT</option>
          <option value="AAPL">AAPL</option>
          {/* <option value="FB">FB</option>
          <option value="GOOGL">GOOGL</option> */}
        </select>
      </div>
      {data && data["Weekly Adjusted Time Series"] && (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
          <tr>
            <th style={headerCellStyle}>Date</th>
            <th style={headerCellStyle}>Open</th>
            <th style={headerCellStyle}>High</th>
            <th style={headerCellStyle}>Low</th>
            <th style={headerCellStyle}>Close</th>
            <th style={headerCellStyle}>Adjusted Close</th>
            <th style={headerCellStyle}>Volume</th>
            <th style={headerCellStyle}>Dividend Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data["Weekly Adjusted Time Series"]).map((date) => (
            <tr key={date}>
              <td style={cellStyle}>{date}</td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["1. open"]}
              </td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["2. high"]}
              </td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["3. low"]}
              </td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["4. close"]}
              </td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["5. adjusted close"]}
              </td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["6. volume"]}
              </td>
              <td style={cellStyle}>
                {data["Weekly Adjusted Time Series"][date]["7. dividend amount"]}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      )}
    </div>
  );
};
const headingStyle = {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
  };
  
  const labelStyle = {
    fontSize: "18px",
    marginRight: "10px",
    fontWeight: "bold",
  };
  
  const selectStyle = {
    fontSize: "16px",
    padding: "5px 10px",
  };
  
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };
  
  const headerCellStyle = {
    backgroundColor: "black",
    color: "azure",
    padding: "12px",
    borderBottom: "3px solid #ccc",
    textAlign: "left",
  };
  
  const cellStyle = {
    padding: "12px",
    borderBottom: "1px solid #ccc",
    textAlign: "left",
    backgroundColor: "azure",
  };
export default ApiDataDisplay;
