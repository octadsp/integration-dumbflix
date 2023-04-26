// Import API Config
import { API } from "../config/api";

// Import react-query
import { useQuery } from "react-query";

import PolygonImg from "../assets/dropdown/polygon.png";
import Navbar from "../components/pages/Navbar";

const ListTransaction = () => {
  // Fetching data films from database
  let { data: transactions, refetch } = useQuery(
    "transactionCache",
    async () => {
      const response = await API.get("/transactions");
      return response.data.data;
    }
  );
  console.log(transactions);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="flex mx-auto w-3/4">
          <h1 className="py-5 text-white text-xl font-bold">
            Incoming Transaction
          </h1>
        </div>

        {/* LIST TRANSACTION*/}
        <div>
          {/* HEAD */}
          <div className="flex mx-auto bg-black gap-3 w-3/4 text-red-600">
            <div className="w-14 px-1 py-3">
              <p>No</p>
            </div>
            <div className="w-48 px-1 py-3">
              <p>Users</p>
            </div>
            <div className="w-48 px-1 py-3">
              <p>Remaining Active</p>
            </div>
            <div className="w-48 px-1 py-3">
              <p>Status User</p>
            </div>
            <div className="w-48 px-1 py-3">
              <p>Status Payment</p>
            </div>
            <div className="w-20 px-1 py-3">
              <p>Action</p>
            </div>
          </div>

          {/* SUB HEAD */}
          {transactions?.map((item, index) => (
            <div key={index}>
              <hr className="flex mx-auto w-3/4"></hr>
              <div className="flex mx-auto bg-gray-600 gap-3 w-3/4 text-white">
                <div className="w-14 px-1 py-3">
                  <p>{item.id}</p>
                </div>
                <div className="w-48 px-1 py-3">
                  <p>{item.user.fullname}</p>
                </div>
                <div className="w-48 px-1 py-3">
                  <p>Active</p>
                </div>
                <div className="w-48 px-1 py-3">
                  <p className="text-green-500">{item.user.subscribe}</p>
                </div>
                <div className="w-48 px-1 py-3">
                  <p className="text-green-500">{item.status}</p>
                </div>
                <div className="w-20 px-1 py-3">
                  <div className="dropdown flex justify-center pt-1">
                    <label tabIndex={0} className="">
                      <img src={PolygonImg}></img>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-light-black rounded-box w-28"
                    >
                      <li>
                        <a className="text-green-500">Approve</a>
                      </li>
                      <li>
                        <a className="text-red-600">Cancel</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListTransaction;
