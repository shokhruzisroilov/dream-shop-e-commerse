import { styles } from '../util/style'
import { HashLink as Link } from 'react-router-hash-link'

import {
	MacPlay,
	GooglePlay,
	FacebookIcon,
	TelegramIcon,
	TwitterIcon,
	YoutebeIcon,
	InstagramIcon,
} from '../util/icons'
import logo from '../assets/icons/logo.uz-removebg.png'

function Footer() {
	return (
		<footer className={`${styles.container} bg-mainBg`}>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='sm:flex sm:justify-between'>
					<div className='mb-6 md:mb-0'>
						<div
							to='/'
							className='flex flex-col gap-y-10 justify-start items-start'
						>
							<div className='flex items-center justify-start'>
								<Link to='/'>
									<img src={logo} alt='logo' className='w-40 h-20 bg-mainBg' />
								</Link>
							</div>
							<div className='sm:flex-row flex flex-col gap-4 '>
								<div className='w-full sm:w-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '>
									<MacPlay />
									<div className='text-left'>
										<div className='mb-1 text-xs'>Download on the</div>
										<div className='-mt-1 font-sans text-sm font-semibold'>
											Mac App Store
										</div>
									</div>
								</div>
								<div className='w-full sm:w-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '>
									<GooglePlay />
									<div className='text-left'>
										<div className='mb-1 text-xs'>Get in on</div>
										<div className='-mt-1 font-sans text-sm font-semibold'>
											Google Play
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 max-sl:grid-cols-1'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
								Resurslar
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-4'>
									<Link to='/#top' className='hover:underline'>
										Bosh sahifa
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/#category' className='hover:underline'>
										Kategoriya
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/#product' className='hover:underline'>
										Mahsulotlar
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
								Yordam markazi
							</h2>
							<ul className='text-gray-500 font-medium'>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Biz bilan bog'lanish
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Savollar
									</Link>
								</li>
								<li className='mb-4'>
									<Link to='/' className='hover:underline'>
										Kontaklar
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2024{' '}
						<Link to='/' className='hover:underline'>
							Dreams Shop{' '}
						</Link>
						tomonidan barcha huquqlar himoyalangan
					</span>
					<div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
						<Link to='/' className='text-gray-500 hover:text-gray-900 '>
							<FacebookIcon />
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900 '>
							<TelegramIcon />
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<TwitterIcon />
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900'>
							<YoutebeIcon />
						</Link>
						<Link to='/' className='text-gray-500 hover:text-gray-900 '>
							<InstagramIcon />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
