import fetcher from "./fetcher";

export const movieApi = {
  getMovieList: async () => {
    try {
      const response = await fetcher.get(
        "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      );
      return response.data.content;
    } catch (error) {
      throw error;
    }
  },
  getBannerMovie: async () => {
    try {
      const response = await fetcher.get("QuanLyPhim/LayDanhSachBanner");
      return response.data.content;
    } catch (error) {
      throw error;
    }
  },
};
