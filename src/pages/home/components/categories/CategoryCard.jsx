// import { useState } from 'react';

// export default function CategoryCard({ items }) {
//   // State to track modal visibility and selected item
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Function to handle click on the title
//   const handleTitleClick = (item) => {
//     setSelectedItem(item);
//     setModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedItem(null);
//   };

//   return (
//     <div className="my-8 px-4">
//       {/* Check if there are any results */}
//       {items?.data?.results?.length === 0 ? (
//         <p>No Items.</p>
//       ) : (
//         items?.data?.results
//           .filter((category) => category.list.length > 0)
//           .map((category, index) => (
//             <div key={index}>
//               {/* Category name */}
//               <div className="flex my-8 items-center gap-2">
//                 <p className="text-[#01A3D2]">{category.category}</p>
//                 <div className="border border-[#01A3D2] flex-1"></div>
//               </div>
//               {/* Cards */}
//               <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {category.list.map((item) => (
//                   <div key={item.id} className="p-4 text-[14px] border-2 border-black flex flex-col rounded-xl bg-white gap-2">
//                     {/* Title with click event */}
//                     <p onClick={() => handleTitleClick(item)} className="cursor-pointer">{item.name}</p>
//                     {/* End of Title */}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//       )}
//       {/* Modal */}
//       {modalOpen && selectedItem && (
//         <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4">
//           <div className="bg-white p-8 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
//             <img src={selectedItem.image} alt={selectedItem.name} className="w-full object-contain h-48 sm:h-64 md:h-80 lg:h-96" />
//             <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">{selectedItem.price}</p>
//             <p className="mt-2 text-sm sm:text-base md:text-lg">{selectedItem.description}</p>
//             <button onClick={closeModal} className="mt-4 bg-[#01A3D2] text-white px-4 py-2 rounded-md">Close</button>
//           </div>
//         </div>
//       )}
//       {/* End of Modal */}
//     </div>
//   );
// }



import { useState } from 'react';

export default function CategoryCard({ items }) {
  // State to track modal visibility and selected item
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle click on the title
  const handleTitleClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="my-8 px-4">
      {/* Check if there are any results */}
      {items?.data?.results?.length === 0 ? (
        <p>No Items.</p>
      ) : (
        items?.data?.results
          .filter((category) => category.list.length > 0)
          .map((category, index) => (
            <div key={index}>
              {/* Category name */}
              <div className="flex my-8 items-center gap-2">
                <p className="text-[#01A3D2]">{category.category}</p>
                <div className="border border-[#01A3D2] flex-1"></div>
              </div>
              {/* Cards */}
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.list.map((item) => (
                  <div key={item.id} className="p-4 text-[14px] border-2  flex flex-col rounded-xl bg-white gap-2">
                    {/* Title with click event */}
                    <p onClick={() => handleTitleClick(item)} className="cursor-pointer">{item.name}</p>
                    {/* End of Title */}
                    <div className="flex items-center">
                      <span className="text-[9px] font-raleway text-[#7C8F96]">NGN</span>
                      <p className="text-[25px] p-2 font-raleway leading-6 font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
      )}
      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 p-4">
          <div className="bg-white p-8 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full object-contain h-48 sm:h-64 md:h-80 lg:h-96" />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">{selectedItem.price}</p>
            <p className="mt-2 text-sm sm:text-base md:text-lg">{selectedItem.description}</p>
            <button onClick={closeModal} className="mt-4 bg-[#01A3D2] text-white px-4 py-2 rounded-md">Close</button>
          </div>
        </div>
      )}
      {/* End of Modal */}
    </div>
  );
}

