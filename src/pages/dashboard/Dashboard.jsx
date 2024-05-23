import CategoryTable from './components/CategoryTable';
import ItemsTable from './components/ItemsTable';

export default function Dashboard() {
  return (
    <div className="bg-[#ccc] flex flex-col justify-center min-h-screen items-center">
      <div className="w-[75%] bg-white my-5 rounded-lg shadow-md">
        <CategoryTable />
        <hr className=" my-6" />
        <ItemsTable />
      </div>
    </div>
  );
}
