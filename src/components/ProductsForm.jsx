import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ProductsForm = ({
  createProductData,
  productSelectedData,
  updateProduct,
    }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

  const getFormData = (data) => {
        if (productSelectedData) {
        updateProduct(data);
        } else {
        createProductData(data);
        resetForm();
        }
    };

  useEffect(() => {
        if (productSelectedData !== null) {
        reset(productSelectedData);
        } else {
        resetForm();
        }
    }, [productSelectedData]);

  const resetForm = () => {
        reset({
        name: "",
        category: "",
        price: "",
        isAvailable: false,
        });
    };

  return (
        <div>
            <form onSubmit={handleSubmit(getFormData)}>
                <div className="input-wrapper">
                    <label htmlFor="product-name">Nombre</label>
                    <br />
                    <span>
                        <i className="fa-solid fa-house"></i>{" "}
                    </span>
                    <input type="text" id="product-name" {...register("name")} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="product-category">Categoría</label>
                    <br />
                    <i className="fa-solid fa-icons"></i>
                    <input type="text" id="product-category" {...register("category")} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="product-price">Precio</label>
                    <br />
                    <i className="fa-solid fa-dollar-sign"></i>
                    <input type="text" id="product-price" {...register("price")} />
                </div>
                <div className="input-wrapper1">
                    <h3>Disponible</h3>
                    <input
                        className="checkbox-input"
                        type="checkbox" 
                        id="product-available"
                        {...register("isAvailable")}
                    />
                    <label htmlFor="product-available" className="checkbox-label"></label>
                </div>
                <button typeof="submit">Crear</button>
            </form>
        </div>
    );
};
export default ProductsForm;
