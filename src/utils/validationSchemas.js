import * as Yup from 'yup';

export const categoryValidationSchema = Yup.object({
  name: Yup.string().required().label('Category'),
});

export const itemsValidationSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  price: Yup.string().required().label('Price'),
  categoryName: Yup.string().required().label('Category name'),
});
