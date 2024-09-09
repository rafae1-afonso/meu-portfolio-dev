import { ReactNode, ReactPortal } from 'react'

interface Props {
    title: string
    children: ReactNode;
}

const SkillsList = ({ title, children }: Props) => {
    return (
        <div className='scrollHidden flex flex-col gap-5 p-28'>
            <h1 className='text-2xl text-center p-5 font-bold'><strong className='text-cyan-300'>&lt;</strong> {title} <strong className='text-cyan-300'>/&gt;</strong></h1>
            <ul className='flex flex-col gap-4 text-xl'>
                {children}
            </ul>
        </div>
    )
}

export default SkillsList