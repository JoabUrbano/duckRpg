import { SpinnerCircular } from 'spinners-react';

export default function Loading() {
    return(
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <SpinnerCircular className='' size={120} thickness={100} speed={90} color="rgba(96, 172, 57, 1)" secondaryColor="rgba(172, 105, 57, 0.44)" />
            <p className='text-orange-600'>Carregando...</p>
        </div>
    )
}
