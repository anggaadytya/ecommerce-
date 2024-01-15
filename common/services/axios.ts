import instance from "../libs/axios";

export const authServices = {
  registerAccount: (data: any) => instance.post(`/auth/register`, data),
};

export const userServices = {
  getAllUsers: () => instance.get(`/api/register`),
  updateUser: (id: string, data: any) =>
    instance.patch(`/api/register`, { id, data }),
  deleteUser: (id: string) => instance.delete(`/api/register`, { data: { id } }),
};
