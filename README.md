# [WIP] SnapTable 

Plugin for [jsPDF](https://github.com/MrRio/jsPDF) to write a table to pdf written with typescript. 

```
const  doc = new  jsPDF({ unit:  "px" });
const  snapTable = new  SnapTable(doc)
snapTable.writeTable(data);
const  output = doc.output("datauri");
```
> Sample output: Splitting the outspaced columns to multiple pages

<img src="https://github.com/DharanBro/tablesnap/raw/master/src/images/0002-min.jpg" width="250" height="400">
<img src="https://github.com/DharanBro/tablesnap/raw/master/src/images/0003-min.jpg" width="250" height="400">
<img src="https://github.com/DharanBro/tablesnap/raw/master/src/images/0004-min.jpg" width="250" height="400">
<img src="https://github.com/DharanBro/tablesnap/raw/master/src/images/0005-min.jpg" width="250" height="400">
