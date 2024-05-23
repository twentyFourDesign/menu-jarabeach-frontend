import React, { useState } from 'react';
import CategoryModal from './CategoryModal';
import { apiEndpoints, queryKeys, useDeleteMutation, useGetQuery, usePostMutation, usePutMutation } from '@services';
import { categoryValidationSchema, categoryInitialValues } from '@utils';
import { useFormikForm } from '@common/hooks';
import { toast } from 'react-toastify';
import { CATEGORY_CREATE_ERROR, CATEGORY_EDIT_ERROR, SUCCESS_TOAST } from '@constants';

const CategoryTable = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const { data: categoriesListing, refetch: categoriesListingRefetch } = useGetQuery(
    queryKeys.CATEGORIES_LISTING,
    apiEndpoints.CATEGORIES_LISTING
  );

  const { mutate: createCategoryMutation } = usePostMutation(apiEndpoints.CREATE_CATEGORY, onSuccess, onError);
  const { mutate: updateCategoryMutation } = usePutMutation(apiEndpoints.EDIT_CATEGORY(categoryId), onSuccess, onError);

  const { values, handleChange, handleSubmit, errors, touched, resetForm, setValues } = useFormikForm(
    categoryInitialValues,
    onSubmit,
    categoryValidationSchema
  );

  const { mutate: deleteCategoryMutation } = useDeleteMutation(
    apiEndpoints.DELETE_CATEGORY(categoryId),
    onSuccessDelete,
    onErrorDelete
  );

  function onSubmit(values) {
    if (editMode) {
      updateCategoryMutation({ payload: values });
    } else {
      createCategoryMutation({ payload: values });
    }
  }

  function onSuccess() {
    setOpenCategoryModal(false);
    resetForm();
    categoriesListingRefetch();
    setEditMode(false);
    toast.success(SUCCESS_TOAST(editMode ? 'Category updated' : 'Category created'));
  }

  function onError() {
    toast.error(editMode ? CATEGORY_EDIT_ERROR : CATEGORY_CREATE_ERROR);
    resetForm();
    setOpenCategoryModal(false);
    setEditMode(false);
  }

  function onSuccessDelete() {
    toast.success(SUCCESS_TOAST('Category deleted'));
    categoriesListingRefetch();
  }

  function onErrorDelete() {
    toast.error(CATEGORY_CREATE_ERROR);
  }

  function handleDeleteCategory(id) {
    setCategoryId(id);
    deleteCategoryMutation();
  }

  function handleEditCategory(category) {
    setValues(category);
    setCategoryId(category.id);
    setEditMode(true);
    setOpenCategoryModal(true);
  }

  return (
    <div className="border rounded-lg m-5 p-5">
      <div className="flex justify-between items-center px-4 font-semibold">
        <h1 className="text-2xl">Categories</h1>
        <button
          className="bg-blue-500 py-2 px-3 text-sm text-white font-bold rounded-lg"
          onClick={() => {
            resetForm();
            setEditMode(false);
            setOpenCategoryModal(true);
          }}
        >
          Add category
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">SR.</th>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Category</th>
            <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoriesListing?.data?.results?.map((category, index) => (
            <tr key={category?.id} className="border-b border-gray-200">
              <td className="py-5 px-4 text-sm text-gray-700">{index + 1}</td>
              <td className="py-5 px-4 text-sm text-gray-700">{category?.name}</td>
              <td className="py-5 px-4">
                <div className="flex items-center gap-5">
                  <button className="text-blue-500" onClick={() => handleEditCategory(category)}>
                    Edit
                  </button>
                  <button className="text-red-500" onClick={() => handleDeleteCategory(category?.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CategoryModal
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        onOpen={openCategoryModal}
        setOnOpen={setOpenCategoryModal}
        editMode={editMode}
      />
    </div>
  );
};

export default CategoryTable;
