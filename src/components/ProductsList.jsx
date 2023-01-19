
const ProductsList= ({products, deleteProduct, selectProduct})=>{

    return (
        <ul>
            {products?.map((productElement, index) =>(
                <li key={`product-${index}`}>   
                    <h4><span>Nombre: </span>{productElement.name}</h4>
                    <h4><span>Categoría: </span>{productElement.category}</h4>
                    <h4><span>Precio: </span>{productElement.price}</h4>
                    <h4><span className="avai">{ productElement.isAvailable ? "Disponible" : "No disponible" }</span></h4>
                    
                    <button className="btn-delete" onClick={()=>deleteProduct(productElement.id)}><i className="fa-solid fa-trash"></i> Eliminar</button>
                    <button className="btn-edit" onClick={()=>selectProduct(productElement)}><i className="fa-regular fa-pen-to-square"></i> Editar</button>
                </li>
                ))
            }
        </ul>
    )
}
export default ProductsList