import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../store/User";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/",
  }),
  endpoints: (builder) => ({
    getListUsers: builder.query<User[], void>({
      query: () => "",
      // providesTags: (result: any) => {
      //   if (result) {
      //     const final = [
      //       ...result.map(({ id }: User) => [{ type: "user", id }]),
      //       { type: "user", id: "LIST" },
      //     ];
      //     return final;
      //   }
      //   return [{ type: "user", id: "LIST" }];
      // },
    }),
  }),
});
export const { useGetListUsersQuery } = userApi;
