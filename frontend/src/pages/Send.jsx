import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import swal from "sweetalert";

const Send = () => {
  const [amount, setAmount] = useState(0);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  //for navigation to dashboard
  const navigate= useNavigate()
  return (
    <div class="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div class="flex flex-col space-y-1.5 p-6">
            <h2 class="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div class="p-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span class="text-2xl text-white">{name[0].toUpperCase()}</span>
              </div>
              <h3 class="text-2xl font-semibold">{name}</h3>
            </div>
            <div class="space-y-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button
                onClick={async () => {
                  try {
                    const responese = await axios.post(
                      "http://localhost:3001/api/v1/account/transfer",
                      {
                        to: id,
                        amount,
                      },
                      {
                        headers: {
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    );

                    //show when my transfer successful
                    if (responese.status === 200) {
                      swal({
                        title: "Are you sure?",
                        text: "you want to make a Payment!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          swal("Tranasction successful!", {
                            icon: "success",
                          }).then((
                            navigate('/dashboard')
                          ));
                        } else {
                          swal("Transction Denied");
                        }
                      });
                    }
                  } catch (error) {
                    console.error("Error during transfer:", error);
                    swal ( "Oops" ,  "Something went wrong!" ,  "error" )
                  }
                }}
                class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 mx-auto ml-20  bg-green-500 text-white"
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
