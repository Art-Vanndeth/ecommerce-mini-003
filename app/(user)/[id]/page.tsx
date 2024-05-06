'use client'
import { useParams } from "next/navigation";
import Detail from "@/app/(user)/[id]/Detail";
import { dataFromProps } from "@/lib/definitions";

const Page = () => {
    const params = useParams();
    const { id } = params;
    console.log('id', id);

    // Define the props object with actual values
    const props: dataFromProps = {
        params: { id: id as string },
        title: { title: "Your Title Here" }, // Replace "Your Title Here" with the actual title
        searchParams: {} // Empty searchParams object
    };

    console.log('page', params);
    console.log('id', id);

    return <Detail {...props} />;
};

export default Page;
