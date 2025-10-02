import { API } from '@/src/api/productsApi';

export async function getListBgPage(pageNumber: number) {
  const res = await API.get(`beers?page=${pageNumber}`,);
  return res.data;
}

export async function getItemDetails(id: number) {
  const res = await API.get(`beers/${id}`);
  return res.data;
}
