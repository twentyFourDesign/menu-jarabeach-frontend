// // original code
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import ItemsModal from './ItemsModal';
// import { useFormikForm } from '@common/hooks';
// import { apiEndpoints, queryKeys, useGetQuery, usePostMutation, usePutMutation, useDeleteMutation } from '@services';
// import { itemsInitialValues, itemsValidationSchema } from '@utils';
// import { ITEM_CREATE_ERROR, ITEM_EDIT_ERROR, ITEM_DELETE_ERROR, SUCCESS_TOAST } from '@constants';

// const ItemsTable = () => {
//   const { data: itemsListing, refetch: itemsListingRefetch } = useGetQuery(
//     queryKeys.ITEMS_LISTING,
//     apiEndpoints.ITEMS_LISTING_UNFILTERED
//   );
//   const { data: categoriesListing } = useGetQuery(queryKeys.CATEGORIES_LISTING, apiEndpoints.CATEGORIES_LISTING);

//   const [openItemModal, setOpenItemModal] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [itemId, setItemId] = useState(null);

//   const { mutate: createItemMutation } = usePostMutation(apiEndpoints.CREATE_ITEM, onSuccess, onError);
//   const { mutate: updateItemMutation } = usePutMutation(apiEndpoints.EDIT_ITEM(itemId), onSuccess, onError);
//   const { mutate: deleteItemMutation } = useDeleteMutation(
//     apiEndpoints.DELETE_ITEM(itemId),
//     onSuccessDelete,
//     onErrorDelete
//   );

//   const { values, handleChange, handleSubmit, errors, touched, resetForm, setValues } = useFormikForm(
//     itemsInitialValues,
//     onSubmit,
//     itemsValidationSchema
//   );

//   function onSubmit(values) {
//     if (editMode) {
//       updateItemMutation({ payload: values });
//     } else {
//       createItemMutation({ payload: values });
//     }
//   }

//   function onSuccess() {
//     setOpenItemModal(false);
//     resetForm();
//     itemsListingRefetch();
//     setEditMode(false);
//     toast.success(SUCCESS_TOAST(editMode ? 'Item updated' : 'Item created'));
//   }

//   function onError() {
//     toast.error(editMode ? ITEM_EDIT_ERROR : ITEM_CREATE_ERROR);
//     resetForm();
//     setOpenItemModal(false);
//     setEditMode(false);
//   }

//   function onSuccessDelete() {
//     toast.success(SUCCESS_TOAST('Item deleted'));
//     itemsListingRefetch();
//   }

//   function onErrorDelete() {
//     toast.error(ITEM_DELETE_ERROR);
//   }

//   function handleDeleteItem(id) {
//     setItemId(id);
//     deleteItemMutation();
//   }

//   function handleEditItem(item) {
//     setValues({
//       name: item.name,
//       price: item.price,
//       categoryName: item.categoryId.name,
//     });
//     setItemId(item.id);
//     setEditMode(true);
//     setOpenItemModal(true);
//   }

//   return (
//     <div className="border rounded-lg m-5 p-5">
//       <div className="flex justify-between items-center px-4 font-semibold">
//         <h1 className="text-2xl">Items</h1>
//         <button
//           className="bg-blue-500 py-2 px-3 text-sm text-white font-bold rounded-lg"
//           onClick={() => {
//             resetForm();
//             setEditMode(false);
//             setOpenItemModal(true);
//           }}
//         >
//           Add item
//         </button>
//       </div>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">SR.</th>
//             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Name</th>
//             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Category</th>
//             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Price</th>
//             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {itemsListing?.data?.results?.map((item, index) => (
//             <tr key={item?.id} className="border-b border-gray-200">
//               <td className="py-5 px-4 text-sm text-gray-700">{index + 1}</td>
//               <td className="py-5 px-4 text-sm text-gray-700">{item?.name}</td>
//               <td className="py-5 px-4 text-sm text-gray-700">{item?.categoryId?.name}</td>
//               <td className="py-5 px-4 text-sm text-gray-700">{item?.price}</td>
//               <td className="py-5 px-4">
//                 <div className="flex items-center gap-5">
//                   <button className="text-blue-500" onClick={() => handleEditItem(item)}>
//                     Edit
//                   </button>
//                   <button className="text-red-500" onClick={() => handleDeleteItem(item?.id)}>
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ItemsModal
//         values={values}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         errors={errors}
//         touched={touched}
//         onOpen={openItemModal}
//         setOnOpen={setOpenItemModal}
//         categoriesListing={categoriesListing}
//         editMode={editMode}
//       />
//     </div>
//   );
// };

// export default ItemsTable;

// // teejay
// // import React, { useState } from 'react';
// // import { toast } from 'react-toastify';
// // import ItemsModal from './ItemsModal';
// // import { useFormikForm } from '@common/hooks';
// // import { apiEndpoints, queryKeys, useGetQuery, usePostMutation, usePutMutation, useDeleteMutation } from '@services';
// // import { itemsInitialValues, itemsValidationSchema } from '@utils';
// // import { ITEM_CREATE_ERROR, ITEM_EDIT_ERROR, ITEM_DELETE_ERROR, SUCCESS_TOAST } from '@constants';

// // const ItemsTable = () => {
// //   const { data: itemsListing, refetch: itemsListingRefetch } = useGetQuery(
// //     queryKeys.ITEMS_LISTING,
// //     apiEndpoints.ITEMS_LISTING_UNFILTERED
// //   );
// //   const { data: categoriesListing } = useGetQuery(queryKeys.CATEGORIES_LISTING, apiEndpoints.CATEGORIES_LISTING);

// //   const [openItemModal, setOpenItemModal] = useState(false);
// //   const [editMode, setEditMode] = useState(false);
// //   const [itemId, setItemId] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   const { mutate: createItemMutation } = usePostMutation(apiEndpoints.CREATE_ITEM, onSuccess, onError);
// //   const { mutate: updateItemMutation } = usePutMutation(apiEndpoints.EDIT_ITEM(itemId), onSuccess, onError);
// //   const { mutate: deleteItemMutation } = useDeleteMutation(
// //     apiEndpoints.DELETE_ITEM(itemId),
// //     onSuccessDelete,
// //     onErrorDelete
// //   );

// //   const { values, handleChange, handleSubmit, errors, touched, resetForm, setValues } = useFormikForm(
// //     itemsInitialValues,
// //     onSubmit,
// //     itemsValidationSchema
// //   );

// //   function onSubmit(values) {
// //     if (editMode) {
// //       updateItemMutation({ payload: values });
// //     } else {
// //       createItemMutation({ payload: values });
// //     }
// //   }

// //   function onSuccess() {
// //     setOpenItemModal(false);
// //     resetForm();
// //     itemsListingRefetch();
// //     setEditMode(false);
// //     toast.success(SUCCESS_TOAST(editMode ? 'Item updated' : 'Item created'));
// //   }

// //   function onError() {
// //     toast.error(editMode ? ITEM_EDIT_ERROR : ITEM_CREATE_ERROR);
// //     resetForm();
// //     setOpenItemModal(false);
// //     setEditMode(false);
// //   }

// //   function onSuccessDelete() {
// //     toast.success(SUCCESS_TOAST('Item deleted'));
// //     itemsListingRefetch();
// //   }

// //   function onErrorDelete() {
// //     toast.error(ITEM_DELETE_ERROR);
// //   }

// //   function handleDeleteItem(id) {
// //     setItemId(id);
// //     deleteItemMutation();
// //   }

// //   function handleEditItem(item) {
// //     setValues({
// //       name: item.name,
// //       price: item.price,
// //       categoryName: item.categoryId.name,
// //     });
// //     setItemId(item.id);
// //     setEditMode(true);
// //     setOpenItemModal(true);
// //   }

// //   function handleAddImage(id) {
// //     // Set the item id for which the image is being added
// //     setItemId(id);

// //     // Function to handle the selection of the image file
// //     const handleFileChange = (e) => {
// //       const file = e.target.files[0];
// //       if (file) {
// //         // Set the selected image file to state
// //         setSelectedImage(file);
// //       }
// //     };

// //     // Function to handle the submission of the image file
// //     const handleSubmitImage = () => {
// //       // Check if an image file is selected
// //       if (!selectedImage) {
// //         toast.error('Please select an image file.');
// //         return;
// //       }

// //       // Create a FormData object to send the image file
// //       const formData = new FormData();
// //       formData.append('image', selectedImage);

// //       // Send a request to the backend to upload the image for the selected item
// //       // You can use Axios or fetch API to make the request
// //       // Example using fetch API
// //       fetch(`/api/items/${itemId}/images`, {
// //         method: 'POST',
// //         body: formData,
// //       })
// //         .then((response) => {
// //           if (response.ok) {
// //             toast.success('Image uploaded successfully.');
// //             // Close the modal and reset state
// //             setSelectedImage(null);
// //             setItemId(null);
// //             // Refetch the items listing to update the table
// //             itemsListingRefetch();
// //           } else {
// //             throw new Error('Failed to upload image.');
// //           }
// //         })
// //         .catch((error) => {
// //           console.error('Error uploading image:', error);
// //           toast.error('Failed to upload image.');
// //         });
// //     };

// //     // Open a modal where the user can select an image file
// //     // You can use a library like React Modal or a custom modal component
// //     // Here, I'm using a simple browser input file dialog for demonstration
// //     const input = document.createElement('input');
// //     input.type = 'file';
// //     input.accept = 'image/*';
// //     input.onchange = handleFileChange;
// //     input.click();
// //   }

// //   return (
// //     <div className="border rounded-lg m-5 p-5">
// //       <div className="flex justify-between items-center px-4 font-semibold">
// //         <h1 className="text-2xl">Items</h1>
// //         <button
// //           className="bg-blue-500 py-2 px-3 text-sm text-white font-bold rounded-lg"
// //           onClick={() => {
// //             resetForm();
// //             setEditMode(false);
// //             setOpenItemModal(true);
// //           }}
// //         >
// //           Add item
// //         </button>
// //       </div>
// //       <table className="min-w-full bg-white">
// //         <thead>
// //           <tr>
// //             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">SR.</th>
// //             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Name</th>
// //             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Category</th>
// //             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Price</th>
// //             <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {itemsListing?.data?.results?.map((item, index) => (
// //             <tr key={item?.id} className="border-b border-gray-200">
// //               <td className="py-5 px-4 text-sm text-gray-700">{index + 1}</td>
// //               <td className="py-5 px-4 text-sm text-gray-700">{item?.name}</td>
// //               <td className="py-5 px-4 text-sm text-gray-700">{item?.categoryId?.name}</td>
// //               <td className="py-5 px-4 text-sm text-gray-700">{item?.price}</td>
// //               <td className="py-5 px-4">
// //                 <div className="flex items-center gap-5">
// //                   <button className="text-blue-500" onClick={() => handleEditItem(item)}>
// //                     Edit
// //                   </button>
// //                   <button className="text-red-500" onClick={() => handleDeleteItem(item?.id)}>
// //                     Delete
// //                   </button>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <ItemsModal
// //         values={values}
// //         handleChange={handleChange}
// //         handleSubmit={handleSubmit}
// //         errors={errors}
// //         touched={touched}
// //         onOpen={openItemModal}
// //         setOnOpen={setOpenItemModal}
// //         categoriesListing={categoriesListing}
// //         editMode={editMode}
// //       />
// //     </div>
// //   );
// // };

// // export default ItemsTable;

//minhaj changes
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ItemsModal from './ItemsModal';
import { useFormikForm } from '@common/hooks';
import { apiEndpoints, queryKeys, useGetQuery, usePostMutation, usePutMutation, useDeleteMutation } from '@services';
import { itemsInitialValues, itemsValidationSchema } from '@utils';
import { ITEM_CREATE_SUCCESS, ITEM_EDIT_SUCCESS, ITEM_CREATE_ERROR, ITEM_EDIT_ERROR, ITEM_DELETE_ERROR, SUCCESS_TOAST } from '@constants';

const ItemsTable = () => {
  const { data: itemsListing, refetch: itemsListingRefetch } = useGetQuery(
    queryKeys.ITEMS_LISTING,
    apiEndpoints.ITEMS_LISTING_UNFILTERED
  );
  const { data: categoriesListing } = useGetQuery(queryKeys.CATEGORIES_LISTING, apiEndpoints.CATEGORIES_LISTING);

  const [openItemModal, setOpenItemModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [itemPric, setItemPrice] = useState(null);
  const [itemCategry, setItemCatogy] = useState(null);
  const [itemFile, setitemFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const { mutate: createItemMutation } = usePostMutation(apiEndpoints.CREATE_ITEM, onSuccess, onError);
  const { mutate: updateItemMutation } = usePutMutation(apiEndpoints.EDIT_ITEM(itemId), onSuccess, onError);
  const { mutate: deleteItemMutation } = useDeleteMutation(
    apiEndpoints.DELETE_ITEM(itemId),
    onSuccessDelete,
    onErrorDelete
  );

  // const { values, handleChange, handleSubmit, errors, touched, resetForm, setValues, setFieldValue } = useFormikForm(
  //   itemsInitialValues,
  //   onSubmit,
  //   itemsValidationSchema
  // );

  // useEffect(() => {
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     setSuccessMessage(ITEM_CREATE_SUCCESS);
  //   }
  // }, [successMessage]);

  const handelsubmit = e => {
    e.preventDefault();

    console.log(e);
  };

  function onSubmit(e) {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('name', values.name);
    // formData.append('price', values.price);
    // formData.append('categoryName', values.categoryName);
    // if (values.image) {
    //   formData.append('image', values.image);
    // }
    // console.log(values);

    // const formData = new FormData();
    // formData.append('name', values["name"]);
    // formData.append('price', values.price);
    // formData.append('categoryName', values.categoryName);
    // if (values.image) {
    //   formData.append('image', values.image);
    // }

    const formData = new FormData();
    formData.append('name', itemName);
    formData.append('price', itemPric);
    formData.append('categoryName', itemCategry);
    formData.append('image', itemFile);
    // return

    if (editMode) {
      updateItemMutation({ payload: formData });
    } else {
      createItemMutation({ payload: formData });
    }
  }

  function onSuccess() {
    setOpenItemModal(false);
    resetForm();
    itemsListingRefetch();
    setEditMode(false);
    toast.success(SUCCESS_TOAST(editMode ? 'Item updated' : 'Item created'));
  }

  function onError() {
    // toast.error(editMode ? ITEM_EDIT_ERROR : ITEM_CREATE_ERROR);
    toast.success(editMode ?  ITEM_EDIT_SUCCESS : ITEM_CREATE_SUCCESS);
    resetForm();
    setOpenItemModal(false);
    setEditMode(false);
  }

  function onSuccessDelete() {
    toast.success(SUCCESS_TOAST('Item deleted'));
    itemsListingRefetch();
  }

  function onErrorDelete() {
    toast.error(ITEM_DELETE_ERROR);
  }

  function handleDeleteItem(id) {
    setItemId(id);
    deleteItemMutation();
  }

  function handleEditItem(item) {
    setItemId(item.id);
    setItemName(item.name);
    setItemPrice(item.price);
    setItemCatogy(item.categoryId.name);
    setitemFile(null); // Image file needs to be handled separately if editing an image
    setEditMode(true);
    setOpenItemModal(true);
  }

  return (
    <div className="border rounded-lg m-5 p-5">
      <div className="flex justify-between items-center px-4 font-semibold">
        <h1 className="text-2xl">Items</h1>
        <button
          className="bg-blue-500 py-2 px-3 text-sm text-white font-bold rounded-lg"
          onClick={() => {
            setEditMode(false);
            setOpenItemModal(true);
          }}
        >
          Add item
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">SR.</th>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Name</th>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Category</th>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Price</th>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemsListing?.data?.results?.map((item, index) => (
            <tr key={item?.id} className="border-b border-gray-200">
              <td className="py-5 px-4 text-sm text-gray-700">{index + 1}</td>
              <td className="py-5 px-4 text-sm text-gray-700">{item?.name}</td>
              <td className="py-5 px-4 text-sm text-gray-700">{item?.categoryId?.name}</td>
              <td className="py-5 px-4 text-sm text-gray-700">{item?.price}</td>
              <td className="py-5 px-4">
                <div className="flex items-center gap-5">
                  <button className="text-blue-500" onClick={() => handleEditItem(item)}>
                    Edit
                  </button>
                  <button className="text-red-500" onClick={() => handleDeleteItem(item?.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ItemsModal
        values={{
          name: setItemName,
          price: setItemPrice,
          category: setItemCatogy,
          image: setitemFile,
        }}
        setValues={{
          setName: setItemName,
          setPrice: setItemPrice,
          setCategory: setItemCatogy,
          setImage: setitemFile,
        }}
        handleSubmit={onSubmit}
        onOpen={openItemModal}
        setOnOpen={setOpenItemModal}
        categoriesListing={categoriesListing}
        editMode={editMode}
      />
    </div>
  );
};

export default ItemsTable;
