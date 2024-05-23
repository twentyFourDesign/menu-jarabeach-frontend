import React, { useState } from 'react';
import ItemsModal from './ItemsModal';
import { apiEndpoints, queryKeys, useGetQuery, usePostMutation, usePutMutation, useDeleteMutation } from '@services';
import { itemsInitialValues, itemsValidationSchema } from '@utils';
import { useFormikForm } from '@common/hooks';
import { toast } from 'react-toastify';
import { ITEM_CREATE_ERROR, ITEM_EDIT_ERROR, ITEM_DELETE_ERROR, SUCCESS_TOAST } from '@constants';

const ItemsTable = () => {
  const { data: itemsListing, refetch: itemsListingRefetch } = useGetQuery(
    queryKeys.ITEMS_LISTING,
    apiEndpoints.ITEMS_LISTING_UNFILTERED
  );
  const { data: categoriesListing } = useGetQuery(queryKeys.CATEGORIES_LISTING, apiEndpoints.CATEGORIES_LISTING);

  const [openItemModal, setOpenItemModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [itemId, setItemId] = useState(null);

  const { mutate: createItemMutation } = usePostMutation(apiEndpoints.CREATE_ITEM, onSuccess, onError);
  const { mutate: updateItemMutation } = usePutMutation(apiEndpoints.EDIT_ITEM(itemId), onSuccess, onError);
  const { mutate: deleteItemMutation } = useDeleteMutation(
    apiEndpoints.DELETE_ITEM(itemId),
    onSuccessDelete,
    onErrorDelete
  );

  const { values, handleChange, handleSubmit, errors, touched, resetForm, setValues } = useFormikForm(
    itemsInitialValues,
    onSubmit,
    itemsValidationSchema
  );

  function onSubmit(values) {
    if (editMode) {
      updateItemMutation({ payload: values });
    } else {
      createItemMutation({ payload: values });
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
    toast.error(editMode ? ITEM_EDIT_ERROR : ITEM_CREATE_ERROR);
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
    setValues({
      name: item.name,
      price: item.price,
      categoryName: item.categoryId.name,
    });
    setItemId(item.id);
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
            resetForm();
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
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        onOpen={openItemModal}
        setOnOpen={setOpenItemModal}
        categoriesListing={categoriesListing}
        editMode={editMode}
      />
    </div>
  );
};

export default ItemsTable;
