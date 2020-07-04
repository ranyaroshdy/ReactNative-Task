import * as React from "react";
import db from "../../../db";
import ProductItem from './Product-item'
import Loading from '../LoadingScreen'

export default function ProductsScreen({ route }: any) {
    const [data, setData] = React.useState<any>({});
    const [loader, setLoader] = React.useState<any>(true);

    const getData = React.useCallback(async () => {
        let categoryRef = await db.collection("category").doc(route.params.id);
        categoryRef.get();
        let result = await db.collection("product").where("categoryid", "==", categoryRef).get();
        let firstProduct = result.docs[0];
        let ProductObj = firstProduct.data();
        ProductObj.id = firstProduct.id;
        if (ProductObj.categoryid) {
            ProductObj.categoryid.get().then((res: any) => {
                ProductObj.categoryid = res.data();
            })
        }
        setData(ProductObj);
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
        getData();
    }, [getData]);

    return (
        loader ? <Loading /> : <ProductItem data={data} />
    );
}
