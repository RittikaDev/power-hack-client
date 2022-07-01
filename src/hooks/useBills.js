import axios from "axios";
import React, { useEffect, useState } from "react";

const useBills = () => {
  const [bill, setBill] = useState([]);
  useEffect(() => {
    const getBills = async () => {
      const url = "http://localhost:5000/billing-list";
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setBill(data);
      } catch (error) {}
    };
    getBills();
  }, []);

  return [bill, setBill];
};

export default useBills;
