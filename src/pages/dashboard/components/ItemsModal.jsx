import { CustomInput } from '@common/components';
import Modal from '@common/components/modal/Modal';
import React from 'react';

const ItemsModal = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched,
  onOpen,
  setOnOpen,
  categoriesListing,
  editMode,
}) => {
  return (
    <Modal setShowModal={setOnOpen} showModal={onOpen}>
      <div className="bg-white pb-4 px-4 w-96 rounded-md">
        <div className="flex justify-end py-4">
          <button onClick={() => setOnOpen(false)} className="cursor-pointer">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} action="#" className="flex flex-col gap-4">
          <div>
            <CustomInput
              label="Item name"
              placeHolder="Item name"
              id="name"
              name="name"
              onChange={handleChange}
              error={errors['name']}
              touched={touched['name']}
              value={values['name']}
              labelClassName="block text-sm font-medium leading-5 text-gray-700"
              inputClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <div>
            <CustomInput
              label="Price"
              placeHolder="Price"
              id="price"
              name="price"
              onChange={handleChange}
              error={errors['price']}
              touched={touched['price']}
              value={values['price']}
              labelClassName="block text-sm font-medium leading-5 text-gray-700"
              inputClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-5 text-gray-700">
              Category
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <select
                name="categoryName"
                id="categoryName"
                onChange={handleChange}
                value={values['categoryName']}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value="">Select category</option>
                {categoriesListing?.data?.results?.map(category => (
                  <option key={category?.id} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </select>
              {touched['categoryName'] && errors['categoryName'] ? (
                <div className="text-red-300">{errors['categoryName']}</div>
              ) : null}
            </div>
          </div>
          <div>
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                {editMode ? 'Update Item' : 'Upload Item'}
              </button>
            </span>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ItemsModal;
