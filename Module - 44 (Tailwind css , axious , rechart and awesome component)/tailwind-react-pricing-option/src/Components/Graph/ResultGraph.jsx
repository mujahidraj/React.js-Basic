import React from 'react';
import {  Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = 
  [
  {
    "id": "s1001",
    "studentName": "Ali Hassan",
    "marks": {
      "physics": 85,
      "chemistry": 92,
      "math": 78,
      "biology": 88,
      "english": 90
    }
  },
  {
    "id": "s1002",
    "studentName": "Fatima Ahmed",
    "marks": {
      "physics": 90,
      "chemistry": 81,
      "math": 95,
      "biology": 92,
      "english": 86
    }
  },
  {
    "id": "s1003",
    "studentName": "David Chen",
    "marks": {
      "physics": 76,
      "chemistry": 88,
      "math": 82,
      "biology": 79,
      "english": 91
    }
  },
  {
    "id": "s1004",
    "studentName": "Sophia Williams",
    "marks": {
      "physics": 88,
      "chemistry": 95,
      "math": 90,
      "biology": 81,
      "english": 89
    }
  },
  {
    "id": "s1005",
    "studentName": "Rohan Kumar",
    "marks": {
      "physics": 72,
      "chemistry": 79,
      "math": 85,
      "biology": 80,
      "english": 83
    }
  },
  {
    "id": "s1006",
    "studentName": "Emily Johnson",
    "marks": {
      "physics": 95,
      "chemistry": 90,
      "math": 88,
      "biology": 94,
      "english": 92
    }
  },
  {
    "id": "s1007",
    "studentName": "Michael Brown",
    "marks": {
      "physics": 81,
      "chemistry": 83,
      "math": 76,
      "biology": 85,
      "english": 80
    }
  },
  {
    "id": "s1008",
    "studentName": "Aisha Khan",
    "marks": {
      "physics": 89,
      "chemistry": 91,
      "math": 93,
      "biology": 88,
      "english": 87
    }
  },
  {
    "id": "s1009",
    "studentName": "James Wilson",
    "marks": {
      "physics": 78,
      "chemistry": 85,
      "math": 80,
      "biology": 77,
      "english": 82
    }
  },
  {
    "id": "s1010",
    "studentName": "Priya Sharma",
    "marks": {
      "physics": 92,
      "chemistry": 86,
      "math": 91,
      "biology": 90,
      "english": 88
    }
  }
]


const ResultGraph = () => {
  return (
    <div>
      <LineChart height={400} width={1250} data={resultData.map(items=>items)}>
        <CartesianGrid strokeDasharray="1 1"></CartesianGrid>
        <XAxis  dataKey="studentName"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        <Line   type="monotone" dataKey="marks.math" stroke='#FFFFFF'></Line>
        <Legend></Legend>
        <Line   type="monotone" dataKey="marks.english" stroke='red'></Line>
      </LineChart>





      <BarChart height={500} width="100%"  data={resultData.map(items=>items)} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}>

        <XAxis  dataKey="studentName"></XAxis>
    <Tooltip></Tooltip>
        <YAxis></YAxis>
        <Line type="monotone"  dataKey="marks.math" stroke='#FF0000' ></Line>
       <Bar type="monotone" dataKey="marks.math" stroke='#FF0000' ></Bar>
       <Bar type="monotone" dataKey="marks.english" stroke='#FF0000' ></Bar>

      </BarChart>
      
    </div>
  );
};

export default ResultGraph;