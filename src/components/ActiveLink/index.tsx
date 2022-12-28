import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement, ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    activeClassname: string
    disableClassname: string
}


export function ActiveLink({ activeClassname, children, disableClassname, ...rest }: ActiveLinkProps) {

    const { asPath } = useRouter()

    const clasname = asPath === rest.href ? activeClassname : disableClassname

    return (
        <div
            className="div"
            // style={{margin:"2.5rem 0"}}
        >
            <Link
                className={clasname}
                {...rest}
            >
                {cloneElement(children, { clasname })}
            </Link>
        </div>
    )
}