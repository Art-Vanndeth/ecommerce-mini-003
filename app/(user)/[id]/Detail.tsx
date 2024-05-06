'use client'
import CardDetailComponent from "@/components/card/CardProductDetail";
import { BASE_URL } from "@/lib/constants";
import { dataFromProps } from "@/lib/definitions";
import { useEffect, useState } from "react";

interface Params {
    id: string;
    // other properties if needed
}

const Detail = ({ params }: dataFromProps) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${BASE_URL}/api/products/${params.id}`);
                const fetchedData = await res.json();
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params.id]);

    return (
        <div>

    {/* Uncomment the CardDetailComponent when you want to use it */}
     <CardDetailComponent
                id={data?.id || "No ID"}
                name={data?.name || "No Title"}
                price={data?.price || "No Price"}
                description={data?.desc || "No Description"}
                image={data?.image || "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"}
            />
    </div>
);
};

export default Detail;
