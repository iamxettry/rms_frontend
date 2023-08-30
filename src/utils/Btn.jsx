
import Link from 'next/link'

export const Btn = ({title,path,available}) => 
  (
    <Link href={path}  className={available?'':'cursor-not-allowed'}>{title}</Link>
  )

