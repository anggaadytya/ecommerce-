"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { userServices } from "@/common/services/axios";
import { FiTrash2, FiEdit, FiX, FiAlertCircle } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";
import Modal from "../components/Modal";
import Input from "@/common/components/elements/Input";
import Select from "@/common/components/elements/Select";
import ButtonAuth from "@/modules/auth/components/ButtonAuth";
import { useSession } from "next-auth/react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [modalUdateUser, setModalUdateUser] = useState<any>("");
  const [deleteUser, setDeleteUser] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession();

  const getAllUsers = async () => {
    try {
      const { data } = await userServices.getAllUsers();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;
    const data: any = {
      role: form.role.value,
    };

    const result = await userServices.updateUser(
      modalUdateUser.id,
      data,
      session.data?.accessToken
    );
    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      setModalUdateUser("");
      getAllUsers();
    } else {
      setIsLoading(false);
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleDeleteUser = async () => {
    const result = await userServices.deleteUser(
      deleteUser.id,
      session.data?.accessToken
    );
    if (result.status === 200) {
      setIsLoading(false);
      setDeleteUser("");
      getAllUsers();
    } else {
      setIsLoading(false);
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="flex flex-col gap-y-5">
      <section className="bg-white p-5 rounded-2xl">
        <h1 className="pb-2"># Users Admin Page</h1>
        <table aria-label="Table User">
          <th>
            <th>#</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </th>
          <tbody>
            {users.map((user: any, index: number) => (
              <th key={index}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <div className="flex gap-x-3 text-white">
                    <button
                      className="bg-blue-400 p-2 rounded-md"
                      aria-label="Edit"
                      onClick={() => setModalUdateUser(user)}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="bg-red-400 p-2 rounded-md"
                      aria-label="Delete"
                      onClick={() => setDeleteUser(user)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </th>
            ))}
          </tbody>
        </table>
      </section>
      {modalUdateUser !== "" && (
        <Modal>
          <h1 className="text-xl py-2">Update User</h1>
          <form onSubmit={handleUpdateUser}>
            <Input
              label="Fullname"
              name="fullname"
              type="text"
              defaultValue={modalUdateUser.fullname}
              disabled
            />
            <Input
              label="Email"
              name="email"
              type="email"
              defaultValue={modalUdateUser.email}
              disabled
            />
            <Input
              label="Phone"
              name="phone"
              type="text"
              defaultValue={modalUdateUser.phone}
              disabled
            />
            <Select
              label="Role"
              name="role"
              defaultValue={modalUdateUser.role}
              options={[
                { label: "Member", value: "member" },
                { label: "Admin", value: "admin" },
              ]}
            />
            <ButtonAuth type="submit" className="bg-blue-400 text-white">
              {isLoading ? "Loading..." : "Update"}
            </ButtonAuth>
          </form>
          <button
            className="absolute top-3 right-3 bg-red-400 p-2 rounded-md text-white"
            aria-label="Close"
            onClick={() => setModalUdateUser("")}
          >
            <FiX />
          </button>
        </Modal>
      )}
      {deleteUser !== "" && (
        <Modal>
          <h1 className="text-xl py-2 text-center">Delete User</h1>
          <div className="flex items-center justify-center py-10">
            <FiAlertCircle size={100} className="text-yellow-400" />
          </div>
          <h2 className="text-center py-3 text-neutral-500">
            Are you sure you want to delete this user?
          </h2>
          <h3 className="text-center font-semibold text-neutral-500">
            {deleteUser.fullname}
          </h3>
          <div className="flex items-center gap-x-9 text-white absolute bottom-10 left-[50%] translate-x-[-50%]">
            <button
              className="bg-blue-400 w-20 h-10 rounded-md"
              onClick={() => setDeleteUser("")}
            >
              Cancel
            </button>
            <button
              className="bg-red-400 w-20 h-10 rounded-md"
              onClick={handleDeleteUser}
            >
              Sure
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Users;
