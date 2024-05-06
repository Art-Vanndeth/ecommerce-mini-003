"use client";
import CardProduct from "@/components/card/CardProduct";
import { BASE_URL } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {Pagination,} from "@nextui-org/react";
import InfiniteCarouselComponent from "@/components/marquee/CarouselComponent";
const ENDPOINT = `${BASE_URL}/api/products`;
import { Card, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';

export default function Home() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data.results));
	}, []);

	const onPageChange = (page: number) => setCurrentPage(page);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${BASE_URL}/api/products/?page=${currentPage}&page_size=10`);
			const data = await response.json();
			console.log(data.results)
			setProducts(data.results);
			const totalPage = Math.ceil(data.total/10);
			setTotalPage(totalPage); // Assuming 10 items per page

		};

		fetchData();
	}, [currentPage]);

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	return (
		<main className="">

			<div className={'grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 container mx-auto my-8'}>
				<Card
					radius="lg"
					className=" row-span-1 min-h-[465px] w-full border-none bg-[url('https://i.pinimg.com/564x/ab/d0/db/abd0db1a33765ab5c747052a498f00a7.jpg')] bg-cover bg-center lg:row-span-2"
					data-aos="fade-up"
				>
					<CardFooter
						className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-tiny text-white/80">Available soon.</p>
						<Button
							className="bg-black/20 text-tiny text-white"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
						>
							Notify me
						</Button>
					</CardFooter>
				</Card>
				<Card
					isFooterBlurred
					radius="lg"
					className="min-h-[465px] w-full border-none bg-[url('https://i.pinimg.com/564x/a2/6e/22/a26e22489d442b6333bf36d169e44c20.jpg')]  bg-center object-cover "
					data-aos="fade-up"
				>
					<CardFooter
						className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-tiny text-white/80">Available soon.</p>
						<Button
							className="bg-black/20 text-tiny text-white"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
						>
							Notify me
						</Button>
					</CardFooter>
				</Card>
				<Card
					data-aos="fade-up"
					isFooterBlurred
					radius="lg"
					className="min-h-[465px] w-full border-none  bg-[url('https://i.pinimg.com/564x/cc/d5/03/ccd50340aaa26d4d603d2f60e5e39995.jpg')] bg-center object-cover"
				>
					<CardFooter
						className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
						<p className="text-tiny text-white/80">Available soon.</p>
						<Button
							className="bg-black/20 text-tiny text-white"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
						>
							Notify me
						</Button>
					</CardFooter>
				</Card>
				<div
					className="col-span-1 mt-8 ps-5 text-start lg:col-span-2"
					data-aos="fade-up"
				>
					<h2 className="text-4xl font-semibold">
						Each piece is designed to move with you
					</h2>
					<p className="text-md me-0 mt-2 text-foreground lg:me-3">
						We establish personal relationships with our boutiques to ensure
						each piece is vetted for a stress-free shopping experience.
					</p>
					<div className="mt-6 flex gap-4">
						<Button radius="full" variant={'shadow'} color={'default'}>
							Shop Now
						</Button>
						<Button radius="full" variant={'ghost'} color={'default'}>
							Contact Us
						</Button>
					</div>
				</div>
			</div>
			<div
				className={'my-20 pb-10 text-center text-3xl font-bold text-foreground'}
				data-aos="fade-up"
			>
				<h1>Our Partner</h1>
				<InfiniteCarouselComponent/>
			</div>
			<section data-aos="fade-up">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="col-span-1 grid grid-cols-2 gap-4 md:col-span-2">
							<div className={'row-span-2 rounded-xl '}>
								<Image
									isBlurred
									isZoomed
									src="https://i.pinimg.com/564x/bc/21/6b/bc216bdddbf7e412c569fc1a8d23a6eb.jpg"
									sizes={'2000'}
									alt="Casual Fashion"
									className="min-h-[100%]  rounded-xl"
								/>
							</div>
							<div className="grid grid-cols-1 gap-4">
								<div className={'p-10'}>
									<Image
										isBlurred
										isZoomed
										src="https://i.pinimg.com/564x/75/6b/37/756b37e8cea3f8539b265e97e2a89c92.jpg"
										height={100}
										alt="Casual Fashion"
										className="round-xl object-cover "
									/>
								</div>
								<Image
									isBlurred
									isZoomed
									src="https://i.pinimg.com/564x/c1/60/11/c160115274f29ea8ad371da536ce1916.jpg"
									height={100}
									alt="Elegant Dress"
									className="rounded-xl object-cover shadow-lg"
								/>
							</div>
						</div>

						<div
							className="col-span-1 flex flex-col justify-center p-4"
							data-aos="fade-up"
						>
							<h2 className="mb-4 text-4xl font-bold">Fashion Essentials</h2>
							<p className="mb-4">
								Discover the latest trends in Sparkle. From casual wear to
								formal attire, find the perfect outfit for any occasion.
							</p>
							<ul className="mb-4 text-foreground">
								<li>
									Explore a wide range of clothing options, including tops,
									bottoms, dresses, and accessories.
								</li>
								<li>
									Stay ahead of the fashion curve with our regularly updated
									inventory.
								</li>
							</ul>
							<Button
								variant={'shadow'}
								className={
									// ' bg-gradient-to-tr from-blue-500 to-warning text-gray-50'
									' bg-blue-500 to-warning text-gray-50'
								}
							>
								Explore
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section
				className={'my-20 pb-10 text-center text-3xl font-bold text-foreground'}
				data-aos="fade-up"
			>
			</section>
			<h1 className="mx-24 text-4xl font-semibold">Popular Products</h1>
			<section
				className="mt-6 mx-24 grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-6 md:grid-cols-4">
				{products.map((product: any, index) => (
					<CardProduct
						onClick={() => router.push(`${product.id}`)}
						key={index}
						name={product.name}
						image={product.image}
						price={product.price}
					/>
				))}
			</section>
			<div className="flex overflow-x-auto sm:justify-center my-8">
				<Pagination isCompact showControls total={totalPages} initialPage={1} page={currentPage}
							onChange={onPageChange}/>
			</div>
		</main>

	);
}


