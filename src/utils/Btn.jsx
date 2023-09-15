

export const Btn = ({title,available}) => 
  (
    <span  className={available?'':'cursor-not-allowed'}>{title}</span>
  )

