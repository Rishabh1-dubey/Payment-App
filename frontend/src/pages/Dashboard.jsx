import React, { useEffect, useState } from "react";
import { Appbar } from "./dashboard/Appbar";
import { Balance } from "./dashboard/Balance";
import Users from "./dashboard/Users";
import axios from "axios";

const Dashboard = () => {
  
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const fetchBalance = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
     
      setBalance(res.data.balance);
    };
    fetchBalance();
  }, [balance]);

  return (
    <div className="h-full">
      <Appbar />
      <Balance balance={"Your Balance is"} rs={balance} />
      <Users />
    </div>
  );
};

export default Dashboard;
