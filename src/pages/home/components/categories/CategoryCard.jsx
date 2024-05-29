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
            <div key={index} className="my-8 mx-auto max-w-screen-lg px-4">
              {/* Category name */}
              <div className="flex items-center gap-2">
                <p className="text-[#01A3D2]">{category.category}</p>
                <div className="border border-[#01A3D2] flex-1"></div>
              </div>
              {/* Cards */}
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.list.map(item => (
                  <div key={item.id} className="p-4 text-[14px] border-2 border-black flex flex-col rounded-xl border-1 bg-white gap-2">
                    <p>{item.name}</p>
                    <div className="flex items-center">
                      <span className="text-[9px] font-raleway text-[#7C8F96]">NGN</span>
                      <p className="text-[25px] p-2 font-raleway leading-6 font-bold">{item.price}</p>
                      <p><img src={item.image} alt="" /></p>
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