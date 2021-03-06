import Head from "next/head";
import Profile from "../components/Profile";
import Main from "../components/Main";

export default function Home() {
	return (
		<>
			<Head>
				<title>Tomas's Portfolio</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='flex flex-col md:flex-row bg-gray-800 pt-4 justify-self-stretch'>
				<div className=' md:border-r-2 border-green-700 flex-1 max-w-md justify-center md:block m-auto md:mt-1'>
					<Profile />
				</div>
				<div className='flex-1  flex flex-col '>
					<Main
						url={"https://github.com/TomasSanchez/Django-Ecommerce"}
						url_as={"github"}
						img={"/Ecommerce.png"}
						description={"E-commerce website built with Django rest, and NextJs. In development"}
					/>
					<Main
						url={"https://randomleplants.com"}
						url_as={"randomleplants.com"}
						img={"RandomLeplants.png"}
						description={"Blog for random ideas and thoughts. Built with Gatsby & Typescript"}
					/>
				</div>
				<div className='flex-1 flex flex-col '>
					<Main
						url={"https://github.com/TomasSanchez/Django-BasicBlog"}
						url_as={"github"}
						img={"Blog Home.png"}
						description={"Twitter-Like Blog using Django and React. In development"}
					/>
					{/* <Main
						url={""}
						url_as={""}
						img={"https://dummyimage.com/1900x1000/000000/fff.png"}
						description={""}
					/> */}
				</div>
				<div className='flex-1 flex flex-col w-1/4'></div>
			</div>
		</>
	);
}
