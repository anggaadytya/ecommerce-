import instance from "../libs/axios";

export const authServices = {
  registerAccount: (data: any) => instance.post(`/auth/register`, data),
};

export const userServices = {
  getAllUsers: () => instance.get(`/api/register`),
  updateUser: (id: string, data: any, token: string) =>
    instance.patch(`/api/register`, {
      id,
      data,
      token,
    }),
  deleteUser: (id: string, token: string) =>
    instance.delete(`/api/register`, {
      data: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
