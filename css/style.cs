/*
Brandon Nguyen
Brandon_Nguyen4@student.uml.edu
*/

/* Background styles */
#body {
  background-color: #fff;
  color: #000;
  height: 100%;
  margin: 0;
  text-align: center;
}

/* Main styles */
#maindiv {
  background-color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
}

/* Header styles */
#header {
  background-color: #000;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #fff;
}

/* Delete button styles */
#btn-delete {
  background: #000;
  color: #fff;
}

/* Submit button styles */
#submit {
  background: #000;
  color: #fff;
}

/* Error message styles */
.error {
  color: #f00;
  font-weight: normal;
}

/* Column table styles */
#coltable {
  overflow-y: scroll;
  overflow-x: scroll;
  height: 420px;
  background-color: #000;
  color: #fff;
}

/* Tabs navigation styles */
.ui-tabs .ui-tabs-nav {
  background: #000;
}

/* Tab links styles */
#coltable .ui-tabs-nav a {
  background-color: #000;
  color: #fff;
}

/* Tab item styles */
.ui-tabs .ui-tabs-nav li {
  background-color: #000;
  color: #fff;
}

/* Active tab link styles */
#coltable .ui-state-active a {
  color: #fff;
  background-color: #000;
}

/* Active main tab link styles */
#coltable .ui-state-active #maina {
  color: #fff;
  background-color: #000;
}

/* Main tab link styles */
.ui-tabs .ui-tabs-nav #maina {
  font-weight: bold;
  color: #000;
  background-color: #fff;
}

/* Table styles */
table {
  margin: 50px auto;
  color: #fff;
  width: 100%;
}

/* Table header styles */
thead > tr > th:not(th:nth-child(1)) {
  background-color: #000;
  color: #fff;
  padding: 3px;
  text-align: center;
  border: 1px solid #fff;
}

/* Table row header styles */
tbody > tr > th {
  background-color: #000;
  color: #fff;
  padding: 3px;
  text-align: center;
  border: 1px solid #fff;
}

/* Table cell styles */
tbody > tr > td {
  border: 1px solid #000;
}

/* Even row styles */
tr:nth-child(even) {
  background-color: #000;
}

/* Odd row styles */
tr:nth-child(odd) {
  background-color: #fff;
  color: #000;
}

/* Slider container styles */
.background-slider {
  margin: 2px 0px 0px 42px;
}

/* Slider styles */
#minCSlider,
#maxCSlider,
#minRSlider,
#maxRSlider {
  width: 179px;
  height: 20px;
  border: none;
  background: #000;
}

/* Slider handle styles */
#minCSlider .ui-slider-handle,
#maxCSlider .ui-slider-handle,
#minRSlider .ui-slider-handle,
#maxRSlider .ui-slider-handle {
  width: 20px;
  height: 20px;
  background: yellow;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 10px;
}
