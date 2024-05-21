'use client'
import { useState, useEffect } from "react";

// Initial data and conversion to array
const initialData = 'abcdefghijklmnopqabcdefghiijklmnopqabcdefghiabcdefghijklmnopqrstuxyzijklmnopq';
const arrayData: string[] = initialData.split("");
console.log(arrayData);

interface Counts {
  [key: string]: number;
}

export default function CountingAlphabet() {
  const [data, setData] = useState<string[]>(arrayData);
  const [counts, setCounts] = useState<Counts>({});

  // Find duplicates and count them
  const findDuplicates = () => {
    const countObj: Counts = {};
    data.forEach((char) => {
      countObj[char] = (countObj[char] || 0) + 1;
    });
    setCounts(countObj);
  };

  useEffect(() => {
    findDuplicates();
  }, [data]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counting Duplicate Alphabet</h1>
      <div className="bg-red-500 text-white font-bold p-2 mb-4 border border-black">
        <span>Source</span>
        <div className="whitespace-pre-line">
          {arrayData.map((item, index) => (
            <span key={index}>{`[${item}]\n`}</span>
          ))}
        </div>
      </div>
      <div className="border border-black p-2 mb-4">
        <span>Counting Duplicate</span>
        <p className="font-semibold">
          {Object.keys(counts).map((char, index) => (
            <div key={index}>{`${char}: ${counts[char]}`}</div>
          ))}
        </p>
      </div>
    </div>
  );
}
