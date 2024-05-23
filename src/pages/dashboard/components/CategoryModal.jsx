import Modal from '@common/components/modal/Modal';
import React from 'react';
import { CustomInput } from '@common/components';

const CategoryModal = ({ onOpen, setOnOpen, values, handleChange, handleSubmit, errors, touched, editMode }) => {
  return (
    <Modal showModal={onOpen} setShowModal={setOnOpen}>
      <div className="bg-white pb-4 px-4 w-96 rounded-md">
        <div className="flex justify-end py-4">
          <button className="cursor-pointer" onClick={() => setOnOpen(false)}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <CustomInput
              labelClassName="block text-sm font-medium leading-5 text-gray-700"
              inputClassName="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              id="name"
              placeHolder="Name"
              label="Category name"
              onChange={handleChange}
              touched={touched['name']}
              error={errors['name']}
              value={values['name']}
              name="name"
            />
          </div>
          <div>
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                {editMode ? 'Update category' : 'Add category'}
              </button>
            </span>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CategoryModal;
