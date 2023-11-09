import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuth } from "../store/slices/authSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }
  const logOut = () => {
    api.dispatch(setAuth(null));
    // localStorage.removeItem("auth");
    // window.location.href("/auth");
  };

  const { auth } = api.getState();

  if (!auth.refresh) {
    return logOut();
  }

  const refreshToken = await baseQuery(
    {
      url: "user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  );

  if (!refreshToken.data.access) {
    return logOut();
  }

  api.dispatch(setAuth({ ...auth, access: refreshToken.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return logOut();
  }
  return retryResult;
};

export const tracksQuery = createApi({
  reducerPath: "tracksQuery",
  tagTypes: ["Tracks", "Favorites", "Selections"],
  baseQuery: baseQueryWithReauth,

  endpoints: (build) => ({
    getTracksAll: build.query({
      query: () => "catalog/track/all/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),
    getFavouriteTracksAll: build.query({
      query: () => "catalog/track/favorite/all/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),

    setLike: build.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
        { type: "Selections", id: "LIST" },
      ],
    }),

    setDislike: build.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
        { type: "Selections", id: "LIST" },
      ],
    }),

    getSelections: build.query({
      query: (id) => `catalog/selection/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: "Selections", id })),
              { type: "Selections", id: "LIST" },
            ]
          : [{ type: "Selections", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTracksAllQuery,
  useGetFavouriteTracksAllQuery,
  useSetLikeMutation,
  useSetDislikeMutation,
  useGetSelectionsQuery,
} = tracksQuery;
