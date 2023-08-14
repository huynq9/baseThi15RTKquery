import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../types/products";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["products"],
  endpoints: (build) => ({
    getProducts: build.query<IProducts[], void>({
      query: () => "products",
      providesTags: ["products"],
    }),
    getProduct: build.query<IProducts, number>({
      query: (id) => `products/${id}`,
      providesTags: ["products"],
    }),
    addProduct: build.mutation<IProducts, Partial<IProducts>>({
      query(body) {
        return {
          url: "products",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: build.mutation<IProducts, IProducts>({
      query(body) {
        return {
          url: `products/${body.id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: build.mutation<{ id: number }, number>({
      query(id) {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});
export const {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productsApi;
