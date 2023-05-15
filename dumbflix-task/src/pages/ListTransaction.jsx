// Import API Config
import { API } from "../config/api";

// Import react-query
import { useQuery } from "react-query";
import Navbar from "../components/Navbar";

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
        <div className="flex px-72">
          <h1 className="py-5 text-white text-xl font-bold">
            Incoming Transaction
          </h1>
        </div>

        {/* LIST TRANSACTION*/}
        <div className="px-80">
          {/* HEAD */}
          <div className="flex mx-auto border bg-black gap-2 text-red-600">
            <div className="w-14 px-1 py-3">
              <p>No</p>
            </div>
            <div className="w-52 px-1 py-3">
              <p>Users</p>
            </div>
            <div className="w-40 px-1 py-3">
              <p>Remaining Active</p>
            </div>
            <div className="w-40 px-1 py-3">
              <p>Status User</p>
            </div>
            <div className="w-40 px-1 py-3">
              <p>Status Payment</p>
            </div>
          </div>

          {/* SUB HEAD */}
          {transactions?.map((item, index) => (
            <div key={index} className="border">
              <div className="flex mx-auto bg-gray-600 gap-2 text-white">
                <div className="w-14 px-1 py-3">
                  <p>{index + 1}</p>
                </div>
                <div className="w-52 px-1 py-3">
                  <p>{item.user.fullname}</p>
                </div>
                <div className="w-40 px-7 py-3">
                  <p>30 / Hari</p>
                </div>
                <div className="w-40 py-3 px-5">
                  <p className="text-green-500">{item.user.subscribe}</p>
                </div>
                <div className="w-40 px-8 py-3">
                  <p className="text-green-500">{item.status}</p>
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
