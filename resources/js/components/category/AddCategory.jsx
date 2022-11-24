import React, { useRef, useState } from "react";
import Button from "../Button";
import Label from "../Label";

function AddCategory({
    backButton,
    register,
    errors,
    handleSubmit,
    onSubmit,
    previewImage,
    setPreviewImage,
}) {
    const imageFile = useRef(null);
    const [isUpload, setIsUpload] = useState(false);

    const selectImage = () => {
        imageFile.current.click();
    };

    const pickFile = () => {
        console.log("hello");
        console.log(register);
        // setPreviewImage(null);
        // let file = imageFile.current.files;
        // console.log(file);
        // if (file && file[0]) {
        //     let reader = new FileReader();
        //     reader.onloadstart = (e) => {
        //         console.log("start");
        //         setIsUpload(true);
        //     };
        //     reader.onload = (e) => {
        //         setPreviewImage(e.target.result);
        //     };
        //     reader.onloadend = (e) => {
        //         console.log("end");
        //         setIsUpload(false);
        //     };
        //     reader.readAsDataURL(file[0]);
        //     setUrlImage(file[0]);
        // }
    };

    const styleImagePreview = {
        width: "250px",
        height: "250px",
        display: "block",
        cursor: "pointer",
        margin: "0 auto 30px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${previewImage})`,
    };

    return (
        <>
            <div className="max-w-md mx-auto">
                <div className="flex flex-row justify-end mb-6">
                    <Button
                        onClick={() => backButton()}
                        classess="bg-stone-600 hover:bg-stone-800"
                    >
                        Back
                    </Button>
                </div>
                <h2 className="text-lg font-bold text-center mb-10">
                    Add category
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 flex flex-col">
                        <Label value="Title" />
                        <input
                            className="text-md px-2 py-2 border border-solid border-slate-200 rounded-md shadow-md hover:border-slate-500 focus:border-slate-500"
                            placeholder="Please fill your email .."
                            {...register("title", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                        {errors.title ? (
                            <span className="text-red-500">
                                {errors.title.type == "required"
                                    ? "Field title is required!"
                                    : ""}
                                {errors.title.type == "minLength"
                                    ? "Field title must more than 3 character"
                                    : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="mb-3 flex flex-col">
                        <Label value="Meta Info" />
                        <textarea
                            className="text-md px-2 py-2 border border-solid border-slate-200 rounded-md shadow-md hover:border-slate-500 focus:border-slate-500"
                            placeholder="meta Info category .."
                            {...register("meta_info", {
                                required: true,
                                minLength: 3,
                                maxLength: 250,
                            })}
                            cols="30"
                            rows="5"
                        ></textarea>

                        {errors.meta_info ? (
                            <span className="text-red-500">
                                {errors.meta_info.type == "required"
                                    ? "Field title is required!"
                                    : ""}
                                {errors.meta_info.type == "minLength"
                                    ? "Field title must more than 3 character"
                                    : ""}
                                {errors.meta_info.type == "maxLength"
                                    ? "Field meta info can not more than 250 character"
                                    : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="mb-3 flex flex-col">
                        <Label value="Image" />
                        <input
                            type="file"
                            ref={imageFile}
                            onInput={() => pickFile()}
                            className="text-md px-2 py-2 border border-solid border-slate-200 rounded-md shadow-md hover:border-slate-500 focus:border-slate-500"
                            {...register("urlimage", {
                                required: true,
                            })}
                        />
                        {errors.urlimage ? (
                            <span className="text-red-500">
                                {errors.urlimage.type == "required"
                                    ? "Field urlimage is required!"
                                    : ""}
                            </span>
                        ) : (
                            ""
                        )}
                        {isUpload && <p>Wait for uploading ...</p>}
                        <div
                            style={previewImage && styleImagePreview}
                            onClick={() => selectImage()}
                        ></div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-600 inline-flex justify-center items-center text-white font-bold rounded-md shadow-md hover:bg-green-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddCategory;
