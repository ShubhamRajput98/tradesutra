
import { NavLink } from 'react-router-dom'
import error from '../../../assets/image/error.png'


export const ErrorPage = () => {
    return (
        <div className='flex flex-1 flex-col items-center justify-center h-screen'>
            <div className="flex items-center justify-center">
                <div className="w-1/2 flex items-center flex-col ">
                    <div className="content">
                        <p className='text-max font-bold my-3'>Oops.... </p>
                        <p className='text-major font-text my-3'>Page  not found </p>
                        <p className='text-text font-text my-3'>This Page doesn`t exist or was removed! <br />
                            We suggest you  back to home.</p>

                        <NavLink className={' flex items-center bg-bgDarkBlue w-max text-white leading-4 font-text text-general rounded gap-1 px-7 py-2 my-6'} to={"/"}>
                            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 32 31" fill="none">
                                <path d="M17.2112 22.3012L11.6749 16.7649H24.0371V14.1857H11.6749L17.2112 8.64938L15.3877 6.82587L6.73828 15.4753L15.3877 24.1247L17.2112 22.3012Z" fill="white" />
                            </svg>
                            Back to home</NavLink>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img className='w-full' src={error} alt="error image" />
                </div>
            </div>
        </div>
    )
}
