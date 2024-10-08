import { styles } from '../util/style'
import { bagBuy } from '../constants/index'
import { useNavigate } from 'react-router-dom'

function Product({ id, image1, category, title, description, price }) {
	const navigate = useNavigate()
	// title
	const sliceTitle = title.length >= 60 ? title.slice(0, 60) + '...' : title
	// description
	const sliceDescription =
		description.length >= 70 ? description.slice(0, 70) + '...' : description

	return (
		<div
			className='bg-white p-[10px] cursor-pointer hover:shadow-shadowProduct'
			onClick={() => navigate(`/shoping/${id}`)}
		>
			<img src={image1} alt={title} className='w-full h-[200px] object-cover' />
			<h4 className='text-[#9C9C9C] pt-[10px] text-[12px] font-light leading-normal	'>
				{category.title}
			</h4>
			<h3 className='text-textColor text-[16px] font-normal leading-[150%]'>
				{sliceTitle}
			</h3>
			<p className='text-textColor text-[12px] font-light'>
				{sliceDescription}
			</p>
			<span className='pt-[12px] flex justify-between'>
				<p className='text-black text-14px font-[500] leading-normal'>
					{price} so'm
				</p>
				<div
					className={`${styles.btnSecondary} flex items-center gap-x-2 px-[10px] py-1`}
				>
					<p>Sotib olish</p>
					<img src={bagBuy} alt='buy icon' />
				</div>
			</span>
		</div>
	)
}

export default Product
