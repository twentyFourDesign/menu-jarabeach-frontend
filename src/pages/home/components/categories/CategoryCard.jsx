export default function CategoryCard({ items }) {
  return (
    <div className="my-8">
      {/* Check if there are any results */}
      {items?.data?.results?.length === 0 ? (
        <p>No Items.</p>
      ) : (
        items?.data?.results
          .filter(category => category.list.length > 0)
          .map((category, index) => (
            <div key={index}>
              {/* Category name */}
              <div className="flex my-8 items-center gap-2">
                <p>{category.category}</p>
                <div className="border h-1 bg-[#01A3D2] flex-1"></div>
              </div>
              {/* Cards */}
              <div className="grid grid-cols-4 gap-6">
                {category.list.map(item => (
                  <div key={item.id} className="p-4 flex rounded-xl border-1 bg-white flex-col gap-2">
                    <p className="h-8">{item.name}</p>
                    <div className="flex items-center">
                      <span className="text-[9px]">NGN</span>
                      <p className="text-[22px] leading-6 font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
      )}
    </div>
  );
}
