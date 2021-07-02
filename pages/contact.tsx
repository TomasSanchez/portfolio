import Head from "next/head";
import { useState } from "react";

const Contact = () => {
	const [emailForm, setEmailForm] = useState({
		email: "",
		subject: "",
		message: "",
	});

	return (
		<div>
			<Head>
				<title>Contact</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<section className='text-gray-400 bg-gray-800 body-font relative '>
				<div className='container px-5 py-10 mt-6 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
							Contact Me
						</h1>
						<p className='lg:w-2/3 mx-auto text-base text-gray-300'>
							Simply fill in the form with your email and message
							and will be in contact. Alterantivly you can contact
							me on linkedin or mail
						</p>
					</div>
					<div className='lg:w-1/2 md:w-2/3 mx-auto'>
						<div className='flex flex-wrap -m-2'>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label
										htmlFor='email'
										className='leading-7 text-sm text-gray-200'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full bg-gray-900 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label
										htmlFor='name'
										className='leading-7 text-sm text-gray-200'>
										Subject
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className='w-full bg-gray-900 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-full'>
								<div className='relative'>
									<label
										htmlFor='message'
										className='leading-7 text-sm text-gray-200'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										className='w-full bg-gray-900 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
										defaultValue={""}
									/>
								</div>
							</div>
							<div className='p-2 w-full'>
								<button className='flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Send
								</button>
							</div>
							<div className='px-2 mb-3 w-full pt-8 mt-4 border-t border-gray-800 text-center'>
								<a className='text-blue-500'>
									tomas.solano.sanchez@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
