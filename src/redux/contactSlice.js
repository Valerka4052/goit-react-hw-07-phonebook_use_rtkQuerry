import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://641bfdd29b82ded29d5d49e1.mockapi.io/' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts`,
            providesTags: (result) => result
              ? [
                  ...result.map(({ id }) => ({ type: 'Contacts', id })),
                  { type: 'Contacts', id: 'LIST' },
                ]
              : [{ type: 'Contacts', id: 'LIST' }],
        }),
        addContact: builder.mutation({
            query: (body) => ({
                url: `contacts`,
                method: 'POST',
                body,
            }),
             invalidatesTags: (result, error, id) => [{ type: 'Contacts', }],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
             invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
        }),
    }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;