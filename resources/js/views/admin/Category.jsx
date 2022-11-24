import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminLayout from "../../layouts/AdminLayout";
import { ListCategory, AddCategory } from "../../components";

export default function Category() {
    const [isShowItemCategory, setShowItemCategory] = useState(false);
    const [isShowFormAddCategory, setShowFormAddCategory] = useState(false);
    const [isShowFormEditCategory, setShowFormEditCategory] = useState(false);
    const [isShowListCategory, setShowListCategory] = useState(true);
    const [categories, setCategories] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const [urlimage, setUrlImage] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const backButton = () => {
        setShowFormAddCategory(false);
        setShowFormEditCategory(false);
        setShowItemCategory(false);
        setShowListCategory(true);
    };

    const handleShowFormAddCategory = () => {
        setShowListCategory(false);
        setShowFormAddCategory(true);
    };

    const onSubmit = (data) => {
        // let rol = {
        //     title: data.title,
        //     meta_info: data.meta_info,
        //     urlimage: data.urlimage[0],
        // };
        // console.log(data);
    };

    return (
        <AdminLayout>
            {/** show item category */}

            {/** show add form category */}
            {isShowFormAddCategory && (
                <AddCategory
                    backButton={backButton}
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    previewImage={previewImage}
                    setPreviewImage={setPreviewImage}
                />
            )}

            {/** show edit form category */}

            {/** show list category */}
            {isShowListCategory && (
                <ListCategory
                    categories={categories}
                    showFormAdd={handleShowFormAddCategory}
                />
            )}
        </AdminLayout>
    );
}
