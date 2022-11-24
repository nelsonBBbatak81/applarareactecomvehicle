import React from "react";
import Button from "../Button";

function ListCategory({ categories, showFormAdd }) {
    return (
        <>
            <div className="table w-full p-2">
                <div className="flex flex-row justify-end mb-1">
                    <Button
                        onClick={() => showFormAdd()}
                        classess="bg-blue-600 hover:bg-blue-800"
                    >
                        Create Category
                    </Button>
                </div>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    ID
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Name
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Email
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Address
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                            <td className="p-2 border-r">1</td>
                            <td className="p-2 border-r">John Doe</td>
                            <td className="p-2 border-r">john@gmail.com</td>
                            <td className="p-2 border-r">Sydney, Australia</td>
                            <td>
                                <a
                                    href="#"
                                    className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                                >
                                    Remove
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListCategory;
