import { apiEndpoints, queryKeys, useGetQuery } from '@services';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryCard from './CategoryCard';

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState('all');
  let category = searchParams.get('category');

  const { data: itemsListing, refetch: itemsListingRefetch } = useGetQuery(
    queryKeys.ITEMS_LISTING,
    apiEndpoints.ITEMS_LISTING_FILTERED,
    {
      category,
    }
  );

  const { data: categoriesListing } = useGetQuery(queryKeys.CATEGORIES_LISTING, apiEndpoints.CATEGORIES_LISTING);

  function handleCategorySelect(category) {
    setSelected(category);
    setSearchParams({
      category,
    });
  }

  useEffect(() => {
    itemsListingRefetch();
    if (!category) setSearchParams({});
  }, [category]);

  return (
    <div className="mt-[4.25rem] px-[6.25rem] font-raleway">
      <p className="text-[2rem] font-normal leading-10 font-inter">Categories</p>
      <p className="leading-5 mt-3 font-inter">Explore menu items under each category </p>
      <p
        onClick={() => handleCategorySelect('all')}
        className={`text-[2rem]  leading-9 ${
          selected === 'all' ? 'bg-[#FFD664] text-black' : ''
        }  font-normal mt-10 mb-8`}
      >
        All Categories
      </p>
      {/* categories list slection */}
      <div className="my-8">
        <ul className="flex gap-3 flex-wrap">
          <li
            onClick={() => handleCategorySelect('')}
            className="rounded-full  cursor-pointer text-black list-none border border-sky-100  px-[10px]  py-0.5  bg-[#ffd664]"
          >
            All Categories
          </li>
          {categoriesListing?.data?.results?.map(category => (
            <li
              onClick={() => handleCategorySelect(category?.name)}
              className={`rounded-full ${
                selected === category.name ? 'bg-[#FFD664] text-black' : ''
              }  cursor-pointer text-[#01A3D2] list-none border border-sky-100  px-[10px]  py-0.5  bg-[#EEEEEE]`}
              key={category?.id}
            >
              {category?.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <CategoryCard items={itemsListing} />
      </div>
    </div>
  );
}
